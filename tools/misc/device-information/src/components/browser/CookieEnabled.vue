<template>
  <InfoStatistic :label="t('cookie-enabled')" :value="cookieEnabled" />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import InfoStatistic from '../common/InfoStatistic.vue'

const { t } = useI18n()

const cookieEnabled = computed(() => (navigator.cookieEnabled ? t('yes') : t('no')))
</script>

<i18n lang="json">
{
  "en": {
    "cookie-enabled": "Cookies Enabled",
    "yes": "Yes",
    "no": "No"
  },
  "zh": {
    "cookie-enabled": "Cookie启用",
    "yes": "是",
    "no": "否"
  }
}
</i18n>
