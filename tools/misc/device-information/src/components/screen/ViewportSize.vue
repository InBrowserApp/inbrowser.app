<template>
  <InfoStatistic :label="t('viewport-size')" :value="viewportSize" />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useWindowSize } from '@vueuse/core'
import InfoStatistic from '../common/InfoStatistic.vue'

const { t } = useI18n()

const inner = useWindowSize({ type: 'inner' })
const viewportSize = computed(() => `${inner.width.value} × ${inner.height.value}`)
</script>

<i18n lang="json">
{
  "en": {
    "viewport-size": "Viewport Size"
  },
  "zh": {
    "viewport-size": "视口大小"
  }
}
</i18n>
