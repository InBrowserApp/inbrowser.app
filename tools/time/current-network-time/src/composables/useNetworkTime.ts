import { ref } from 'vue'
import { useRafFn, useTimestamp, useIntervalFn } from '@vueuse/core'

export function useNetworkTime() {
  const localTime = useTimestamp()
  const networkTime = ref<number | undefined>(undefined) // reactive network time

  // Network time calculation based on performance.now()
  const startPerformanceTime = ref<number | undefined>(undefined)
  const startNetworkTimestamp = ref<number | undefined>(undefined)

  const offset = ref<number | undefined>(undefined)

  const status = ref<'syncing' | 'synced' | 'error'>('syncing')
  const error = ref<string | null>(null)
  const roundTripTimeMs = ref(0)
  const uncertaintyMs = ref(0)
  const lastSyncAt = ref(0)

  // Use useRafFn to continuously update time
  const { pause: pauseTimeUpdate, resume: resumeTimeUpdate } = useRafFn(() => {
    if (startPerformanceTime.value !== undefined && startNetworkTimestamp.value !== undefined) {
      const currentPerformance = performance.now()
      const elapsedMs = currentPerformance - startPerformanceTime.value
      networkTime.value = startNetworkTimestamp.value + elapsedMs
    }
  })

  async function syncNow(): Promise<void> {
    status.value = 'syncing'
    error.value = null

    try {
      const startTs = performance.now()
      const response = await fetch('https://cloudflare.com/cdn-cgi/trace', {
        cache: 'no-store',
        credentials: 'omit',
        mode: 'cors',
      })
      const text = await response.text()
      const endTs = performance.now()

      const match = /\bts=([0-9]+(?:\.[0-9]+)?)\b/.exec(text)
      if (!match) {
        throw new Error('Failed to parse Cloudflare trace timestamp (ts=...)')
      }

      const serverEpochMs = Math.round(parseFloat(match[1]) * 1000)
      const roundTrip = endTs - startTs

      // Calculate the midpoint time of network latency
      const midpointPerformanceTime = startTs + roundTrip / 2

      // Set baseline time point
      startPerformanceTime.value = midpointPerformanceTime
      startNetworkTimestamp.value = serverEpochMs

      // Update statistics
      roundTripTimeMs.value = roundTrip
      lastSyncAt.value = Date.now()

      offset.value = startNetworkTimestamp.value - Date.now()

      // Start updating network time
      resumeTimeUpdate()
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err)
      error.value = msg
      // Reset baseline time and stop updating
      startPerformanceTime.value = 0
      startNetworkTimestamp.value = 0
      pauseTimeUpdate()
    } finally {
      status.value = 'synced'
    }
  }

  // sync every 5 seconds
  useIntervalFn(syncNow, 5000)
  syncNow()

  return {
    syncNow,
    status,
    error,
    networkTime,
    localTime,
    roundTripTimeMs,
    uncertaintyMs,
    offset,
    lastSyncAt,
  }
}
