<template>
  <InfoStatistic :label="t('window-size')" :value="windowSize" />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useWindowSize } from '@vueuse/core'
import InfoStatistic from '../common/InfoStatistic.vue'

const { t } = useI18n()

const outer = useWindowSize({ type: 'outer' })
const windowSize = computed(() => `${outer.width.value} × ${outer.height.value}`)
</script>

<i18n lang="json">
{
  "en": {
    "window-size": "Window Size"
  },
  "zh": {
    "window-size": "窗口大小"
  }
}
</i18n>
