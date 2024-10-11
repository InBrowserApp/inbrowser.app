<template>
  <ToolViewTemplate title="IP/CIDR Normalizer">
    <n-p
      >This tool normalizes IP addresses and CIDR notation, supporting both IPv4 and IPv6 formats.
      Enter the IP or CIDR, and get a standardized format instantly.</n-p
    >
    <IPCIDRNormalize />
  </ToolViewTemplate>
</template>

<script setup lang="ts">
import { NP } from 'naive-ui'
import ToolViewTemplate from '@/components/layouts/tool-view-template/ToolViewTemplate.vue'
import { useTitle, useDescription } from '@/composables/head'
import IPCIDRNormalize from '../components/tools/ip-cidr-normalize/IPCIDRNormalize.vue'

useTitle('IP/CIDR Normalizer')
useDescription(
  'This tool normalizes IP addresses and CIDR notation, supporting both IPv4 and IPv6 formats. Enter the IP or CIDR, and get a standardized format instantly.'
)
</script>
