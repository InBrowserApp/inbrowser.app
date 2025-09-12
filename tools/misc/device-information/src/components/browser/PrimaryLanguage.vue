<template>
  <InfoStatistic :label="t('primary-language')" :value="browserLanguage" />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import InfoStatistic from '../common/InfoStatistic.vue'

const { t } = useI18n()

const browserLanguage = computed(() => navigator.language)
</script>

<i18n lang="json">
{
  "en": {
    "primary-language": "Primary Language"
  },
  "zh": {
    "primary-language": "主要语言"
  }
}
</i18n>
