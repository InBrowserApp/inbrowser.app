import { defineStore } from 'pinia'
import { readonly } from 'vue'
import { useStorage } from '@vueuse/core'

export const useAirplaneModeStore = defineStore('airplane-mode', () => {
  const isAirplaneMode = useStorage('inbrowser.app:settings:airplane-mode', false)
  const originalFetch = window.fetch

  async function airplaneModeFetch(
    input: RequestInfo | URL,
    init?: RequestInit,
  ): Promise<Response> {
    if (!isAirplaneMode.value) {
      return originalFetch(input, init)
    }

    const request = new Request(input, init)
    const requestUrl = new URL(request.url)

    if (requestUrl.origin !== window.location.origin) {
      throw new AirplaneModeError('Network requests are blocked in airplane mode')
    }

    return originalFetch(input, init)
  }

  window.fetch = airplaneModeFetch

  function enableAirplaneMode(): void {
    isAirplaneMode.value = true
  }

  function disableAirplaneMode(): void {
    isAirplaneMode.value = false
  }

  function toggleAirplaneMode(): void {
    isAirplaneMode.value = !isAirplaneMode.value
  }

  return {
    airplaneModeFetch,
    enableAirplaneMode,
    disableAirplaneMode,
    toggleAirplaneMode,
    isAirplaneMode: readonly(isAirplaneMode),
  }
})

export class AirplaneModeError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'AirplaneModeError'
  }
}
