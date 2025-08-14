<template>
  <CopyToClipboardTooltip :content="mac" #="{ copy }">
    <n-text code style="font-size: 1.5em; cursor: pointer" @click="copy">{{ mac }}</n-text>
  </CopyToClipboardTooltip>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { ipv6AddressToMacAddress } from '@utils/mac-address'
import { CopyToClipboardTooltip } from '@shared/ui/base'
import { NText } from 'naive-ui'

const props = defineProps<{
  ipv6: string
}>()

const mac = computed(() => ipv6AddressToMacAddress(props.ipv6))
</script>
