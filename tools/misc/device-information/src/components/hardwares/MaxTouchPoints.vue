<template>
  <InfoStatistic :label="t('max-touch-points')" :value="maxTouchPoints" />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import InfoStatistic from '../common/InfoStatistic.vue'

const { t } = useI18n()

// Device Information
const maxTouchPoints = computed(() => navigator.maxTouchPoints)
</script>

<i18n lang="json">
{
  "en": {
    "max-touch-points": "Max Touch Points"
  },
  "zh": {
    "max-touch-points": "最大触摸点"
  }
}
</i18n>
