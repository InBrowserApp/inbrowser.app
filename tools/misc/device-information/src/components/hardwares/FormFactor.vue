<template>
  <InfoStatistic :label="t('form-factor')" :value="formFactor" />
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
    getHighEntropyValues(hints: string[]): Promise<UADataValues>
  }

  interface UADataValues {
    readonly formFactor?: string
  }
}

const uaHighEntropyData = computedAsync(async () => {
  try {
    if (navigator.userAgentData?.getHighEntropyValues) {
      return await navigator.userAgentData.getHighEntropyValues(['formFactor'])
    }
    return null
  } catch {
    return null
  }
}, null)

const formFactor = computed(() => uaHighEntropyData.value?.formFactor)
</script>

<i18n lang="json">
{
  "en": {
    "form-factor": "Form Factor"
  },
  "zh": {
    "form-factor": "设备形态"
  }
}
</i18n>
