<template>
  <ToolViewTemplate title="CIDR Parser">
    <n-p>
      This tool parses CIDR notation to provide detailed information about IP addresses and
      networks, supporting both IPv4 and IPv6 formats. Enter the CIDR, and get the network address,
      broadcast address, and the range of usable IPs instantly.
    </n-p>
    <CIDRParse />
  </ToolViewTemplate>
</template>

<script setup lang="ts">
import { NP } from 'naive-ui'
import CIDRParse from '../components/tools/cidr-parse/CIDRParse.vue'
import ToolViewTemplate from '@/components/layouts/tool-view-template/ToolViewTemplate.vue'
import { useTitle, useDescription } from '@/composables/head'

useTitle('CIDR Parser')
useDescription(
  'This tool parses CIDR notation to provide detailed information about IP addresses and networks, supporting both IPv4 and IPv6 formats. Enter the CIDR, and get the network address, broadcast address, and the range of usable IPs instantly.'
)
</script>
