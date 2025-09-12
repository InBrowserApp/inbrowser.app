<template>
  <InfoStatistic :label="t('fps')" :value="fps" />
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useFps } from '@vueuse/core'
import InfoStatistic from '../common/InfoStatistic.vue'

const { t } = useI18n()

const fps = useFps()
</script>

<i18n lang="json">
{
  "en": {
    "fps": "FPS"
  },
  "zh": {
    "fps": "帧率"
  }
}
</i18n>
