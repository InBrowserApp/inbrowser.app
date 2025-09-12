<template>
  <InfoStatistic
    v-if="screenOrientation.isSupported && screenOrientation.orientation.value"
    :label="t('orientation')"
    :value="orientationValue"
  />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useScreenOrientation } from '@vueuse/core'
import InfoStatistic from '../common/InfoStatistic.vue'

const { t } = useI18n()

const screenOrientation = useScreenOrientation()

const orientationValue = computed(() => {
  if (!screenOrientation.orientation.value) return undefined
  return (
    t('orientation-' + screenOrientation.orientation.value) + ` (${screenOrientation.angle.value}°)`
  )
})
</script>

<i18n lang="json">
{
  "en": {
    "orientation": "Orientation",
    "orientation-portrait-primary": "Portrait Primary",
    "orientation-portrait-secondary": "Portrait Secondary",
    "orientation-landscape-primary": "Landscape Primary",
    "orientation-landscape-secondary": "Landscape Secondary"
  },
  "zh": {
    "orientation": "屏幕方向",
    "orientation-portrait-primary": "竖屏主要",
    "orientation-portrait-secondary": "竖屏次要",
    "orientation-landscape-primary": "横屏主要",
    "orientation-landscape-secondary": "横屏次要"
  }
}
</i18n>
