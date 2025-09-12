<template>
  <InfoStatistic :label="t('connection-type')" :value="connectionType" />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import InfoStatistic from '../common/InfoStatistic.vue'

const { t } = useI18n()

declare global {
  interface Navigator {
    readonly connection?: NetworkInformation
    readonly mozConnection?: NetworkInformation
    readonly webkitConnection?: NetworkInformation
  }

  interface NetworkInformation {
    readonly effectiveType?: string
    readonly type?: string
    readonly downlink?: number
  }
}

// Network Information
const connectionType = computed(() => {
  const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection
  return connection?.effectiveType || connection?.type || undefined
})
</script>

<i18n lang="json">
{
  "en": {
    "connection-type": "Connection Type"
  },
  "zh": {
    "connection-type": "连接类型"
  }
}
</i18n>
