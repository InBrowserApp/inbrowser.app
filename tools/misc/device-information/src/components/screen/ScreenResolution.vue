<template>
  <InfoStatistic :label="t('screen-resolution')" :value="screenResolution" />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import InfoStatistic from '../common/InfoStatistic.vue'

const { t } = useI18n()

const screenResolution = computed(() => `${screen.width} × ${screen.height}`)
</script>

<i18n lang="json">
{
  "en": {
    "screen-resolution": "Screen Resolution"
  },
  "zh": {
    "screen-resolution": "屏幕分辨率"
  }
}
</i18n>
