<template>
  <CopyToClipboardTooltip :content="ipv6LinkLocalAddress" #="{ copy }">
    <n-text code style="font-size: 1.5em; cursor: pointer" @click="copy">{{
      ipv6LinkLocalAddress
    }}</n-text>
  </CopyToClipboardTooltip>
</template>

<script setup lang="ts">
import { NText } from 'naive-ui'
import { computed } from 'vue'
import { macAddressToIPv6LinkLocalAddress } from '@utils/mac-address'
import { CopyToClipboardTooltip } from '@shared/ui/base'

const props = defineProps<{
  mac: string
  networkInterface: string
}>()

const ipv6LinkLocalAddress = computed(() => {
  let address = macAddressToIPv6LinkLocalAddress(props.mac)

  if (props.networkInterface !== '') {
    address += `%${props.networkInterface}`
  }

  return address
})
</script>
