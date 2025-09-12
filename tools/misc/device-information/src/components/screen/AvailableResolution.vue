<template>
  <InfoStatistic :label="t('available-resolution')" :value="availableResolution" />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import InfoStatistic from '../common/InfoStatistic.vue'

const { t } = useI18n()

const availableResolution = computed(() => `${screen.availWidth} × ${screen.availHeight}`)
</script>

<i18n lang="json">
{
  "en": {
    "available-resolution": "Available Resolution"
  },
  "zh": {
    "available-resolution": "可用分辨率"
  }
}
</i18n>
