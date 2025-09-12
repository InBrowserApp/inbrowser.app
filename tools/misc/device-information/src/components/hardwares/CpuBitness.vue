<template>
  <InfoStatistic :label="t('cpu-bitness')" :value="cpuBitness ? cpuBitness + '-bit' : undefined" />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { computedAsync } from '@vueuse/core'
import InfoStatistic from '../common/InfoStatistic.vue'

const { t } = useI18n()

declare global {
  interface Navigator {
    readonly userAgentData?: NavigatorUAData
  }

  interface NavigatorUAData {
    readonly brands: Array<{ brand: string; version: string }>
    readonly mobile: boolean
    readonly platform: string
    getHighEntropyValues(hints: string[]): Promise<UADataValues>
  }

  interface UADataValues {
    readonly architecture?: string
    readonly bitness?: string
    readonly model?: string
    readonly platformVersion?: string
    readonly fullVersionList?: Array<{ brand: string; version: string }>
    readonly wow64?: boolean
    readonly formFactor?: string
  }
}

// User Agent Data Information
const uaHighEntropyData = computedAsync(async () => {
  try {
    if (navigator.userAgentData?.getHighEntropyValues) {
      return await navigator.userAgentData.getHighEntropyValues([
        'architecture',
        'bitness',
        'model',
        'platformVersion',
        'fullVersionList',
        'wow64',
        'formFactor',
      ])
    }
    return null
  } catch {
    return null
  }
}, null)

const cpuBitness = computed(() => uaHighEntropyData.value?.bitness || undefined)
</script>

<i18n lang="json">
{
  "en": {
    "cpu-bitness": "CPU Bitness"
  },
  "zh": {
    "cpu-bitness": "CPU位数"
  }
}
</i18n>
