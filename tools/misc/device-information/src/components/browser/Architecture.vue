<template>
  <InfoStatistic :label="t('architecture')" :value="architecture" />
</template>

<script setup lang="ts">
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

const architecture = computedAsync(async () => {
  try {
    if (navigator.userAgentData?.getHighEntropyValues) {
      const data = await navigator.userAgentData.getHighEntropyValues(['architecture'])
      return data.architecture
    }
    return undefined
  } catch {
    return undefined
  }
})
</script>

<i18n lang="json">
{
  "en": {
    "architecture": "Architecture"
  },
  "zh": {
    "architecture": "架构"
  }
}
</i18n>
