<template>
  <InfoStatistic :label="t('connection-speed')" :value="connectionSpeed" />
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
const connectionSpeed = computed(() => {
  const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection
  const downlink = connection?.downlink
  return downlink ? `${downlink} Mbps` : undefined
})
</script>

<i18n lang="json">
{
  "en": {
    "connection-speed": "Connection Speed"
  },
  "zh": {
    "connection-speed": "连接速度"
  }
}
</i18n>
