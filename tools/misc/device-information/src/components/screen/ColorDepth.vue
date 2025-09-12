<template>
  <InfoStatistic :label="t('color-depth')" :value="colorDepth" />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import InfoStatistic from '../common/InfoStatistic.vue'

const { t } = useI18n()

const colorDepth = computed(
  () => `${screen.colorDepth} ${t('bits')}` + (screen.colorDepth <= 24 ? '' : ` (${t('hdr')})`),
)
</script>

<i18n lang="json">
{
  "en": {
    "color-depth": "Color Depth",
    "bits": "bits",
    "hdr": "HDR"
  },
  "zh": {
    "color-depth": "颜色深度",
    "bits": "位",
    "hdr": "HDR"
  }
}
</i18n>
