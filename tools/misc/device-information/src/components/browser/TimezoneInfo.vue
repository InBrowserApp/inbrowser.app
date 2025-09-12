<template>
  <InfoStatistic :label="t('timezone')" :value="timezone" />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import InfoStatistic from '../common/InfoStatistic.vue'

const { t } = useI18n()

const timezone = computed(() => {
  const offsetMinutes = -new Date().getTimezoneOffset()
  const sign = offsetMinutes >= 0 ? '+' : '-'
  const absOffset = Math.abs(offsetMinutes)
  const hours = String(Math.floor(absOffset / 60)).padStart(2, '0')
  const minutes = String(absOffset % 60).padStart(2, '0')
  const tz = Intl.DateTimeFormat().resolvedOptions().timeZone
  return `${tz} (UTC${sign}${hours}:${minutes})`
})
</script>

<i18n lang="json">
{
  "en": {
    "timezone": "Timezone"
  },
  "zh": {
    "timezone": "时区"
  }
}
</i18n>
