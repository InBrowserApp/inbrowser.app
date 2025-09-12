<template>
  <InfoStatistic :label="t('browser-languages')" :value="browserLanguages" />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import InfoStatistic from '../common/InfoStatistic.vue'

const { t } = useI18n()

const browserLanguages = computed(() => navigator.languages.join(', '))
</script>

<i18n lang="json">
{
  "en": {
    "browser-languages": "Supported Languages"
  },
  "zh": {
    "browser-languages": "支持语言"
  }
}
</i18n>
