<template>
  <InfoStatistic :label="t('browser-name')" :value="browserName" />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import InfoStatistic from '../common/InfoStatistic.vue'

const { t } = useI18n()

const browserName = computed(() => {
  const ua = navigator.userAgent
  if (ua.includes('Chrome') && !ua.includes('Edg')) return 'Chrome'
  if (ua.includes('Firefox')) return 'Firefox'
  if (ua.includes('Safari') && !ua.includes('Chrome')) return 'Safari'
  if (ua.includes('Edg')) return 'Edge'
  return t('unknown')
})
</script>

<i18n lang="json">
{
  "en": {
    "browser-name": "Browser",
    "unknown": "Unknown"
  },
  "zh": {
    "browser-name": "浏览器",
    "unknown": "未知"
  }
}
</i18n>
