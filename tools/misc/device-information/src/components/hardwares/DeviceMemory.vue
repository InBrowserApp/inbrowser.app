<template>
  <InfoStatistic :label="t('device-memory')" :value="deviceMemory" />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import InfoStatistic from '../common/InfoStatistic.vue'

const { t } = useI18n()

declare global {
  interface Navigator {
    readonly deviceMemory?: number
  }
}

// Memory Information
const deviceMemory = computed(() => {
  const memory = navigator.deviceMemory
  return memory ? `${memory} GB` : undefined
})
</script>

<i18n lang="json">
{
  "en": {
    "device-memory": "Device Memory"
  },
  "zh": {
    "device-memory": "设备内存"
  }
}
</i18n>
