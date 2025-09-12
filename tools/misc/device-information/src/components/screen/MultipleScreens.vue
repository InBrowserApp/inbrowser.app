<template>
  <InfoStatistic
    v-if="screenIsExtended !== undefined"
    :label="t('multiple-screens')"
    :value="screenIsExtended ? t('yes') : t('no')"
  />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import InfoStatistic from '../common/InfoStatistic.vue'

const { t } = useI18n()

const screenIsExtended = computed(() => (screen as unknown as { isExtended?: boolean }).isExtended)
</script>

<i18n lang="json">
{
  "en": {
    "multiple-screens": "Multiple Screens",
    "yes": "Yes",
    "no": "No"
  },
  "zh": {
    "multiple-screens": "多屏幕",
    "yes": "是",
    "no": "否"
  }
}
</i18n>
