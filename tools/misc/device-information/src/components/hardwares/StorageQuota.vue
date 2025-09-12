<template>
  <InfoStatistic :label="t('storage-quota')" :value="storageQuota" />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { computedAsync } from '@vueuse/core'
import InfoStatistic from '../common/InfoStatistic.vue'

const { t } = useI18n()

// Storage Information
const storageInfo = computedAsync(
  async () => {
    try {
      if ('storage' in navigator && 'estimate' in navigator.storage) {
        const estimate = await navigator.storage.estimate()
        return {
          quota: estimate.quota ? formatBytes(estimate.quota) : null,
          usage: estimate.usage ? formatBytes(estimate.usage) : null,
        }
      }
      return { quota: null, usage: null }
    } catch {
      return { quota: null, usage: null }
    }
  },
  { quota: null, usage: null },
)

const storageQuota = computed(() => storageInfo.value?.quota || null)

// Utility Functions
function formatBytes(bytes: number): string {
  if (bytes === 0) return '0 Bytes'
  const k = 1024
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
}
</script>

<i18n lang="json">
{
  "en": {
    "storage-quota": "Storage Quota"
  },
  "zh": {
    "storage-quota": "存储配额"
  }
}
</i18n>
