<template>
  <InfoStatistic :label="t('cpu-cores')" :value="cpuCores?.toString()" />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import InfoStatistic from '../common/InfoStatistic.vue'

const { t } = useI18n()

// CPU Information
const cpuCores = computed(() => navigator.hardwareConcurrency || undefined)
</script>

<i18n lang="json">
{
  "en": {
    "cpu-cores": "CPU Cores"
  },
  "zh": {
    "cpu-cores": "CPU核心数"
  }
}
</i18n>
