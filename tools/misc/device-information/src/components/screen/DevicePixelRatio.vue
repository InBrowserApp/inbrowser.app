<template>
  <InfoStatistic :label="t('device-pixel-ratio')" :value="devicePixelRatio" />
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useDevicePixelRatio } from '@vueuse/core'
import InfoStatistic from '../common/InfoStatistic.vue'

const { t } = useI18n()

const { pixelRatio: devicePixelRatio } = useDevicePixelRatio()
</script>

<i18n lang="json">
{
  "en": {
    "device-pixel-ratio": "Device Pixel Ratio"
  },
  "zh": {
    "device-pixel-ratio": "设备像素比"
  }
}
</i18n>
