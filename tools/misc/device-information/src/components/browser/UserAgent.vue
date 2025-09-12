<template>
  <InfoStatistic :label="t('user-agent')" :value="userAgent" />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import InfoStatistic from '../common/InfoStatistic.vue'

const { t } = useI18n()

const userAgent = computed(() => navigator.userAgent)
</script>

<i18n lang="json">
{
  "en": {
    "user-agent": "User Agent"
  },
  "zh": {
    "user-agent": "用户代理"
  }
}
</i18n>
