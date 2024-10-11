<template>
  <ToolViewTemplate title="MAC address to IPv6 Link Local Address Converter">
    <n-p> This tool converts a MAC address to an IPv6 link local address. </n-p>
    <MACToIPv6LinkLocal />
  </ToolViewTemplate>
</template>

<script setup lang="ts">
import { NP } from 'naive-ui'
import MACToIPv6LinkLocal from '../components/tools/mac-to-ipv6-link-local/MACToIPv6LinkLocal.vue'
import ToolViewTemplate from '@/components/layouts/tool-view-template/ToolViewTemplate.vue'
import { useTitle, useDescription } from '@/composables/head'

useTitle('MAC address to IPv6 Link Local Address Converter')
useDescription('This tool converts a MAC address to an IPv6 link local address.')
</script>
