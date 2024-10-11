<template>
  <div>
    {{ ipv6LinkLocalAddress }}
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { macAddressToIPv6LinkLocalAddress } from '../../../utils/mac'

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
