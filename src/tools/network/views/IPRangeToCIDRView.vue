<template>
  <ToolViewTemplate title="IP Range to CIDR">
    <n-p>
      This tool converts IP ranges to CIDR notation, supporting both IPv4 and IPv6 addresses. Enter
      the IP range and get the CIDR notation instantly.
    </n-p>

    <IPRangeToCIDR />
  </ToolViewTemplate>
</template>

<script setup lang="ts">
import { NP } from 'naive-ui'
import IPRangeToCIDR from '../components/tools/ip-range-to-cidr/IPRangeToCIDR.vue'
import { useTitle, useDescription } from '@/composables/head'
import ToolViewTemplate from '@/components/layouts/tool-view-template/ToolViewTemplate.vue'

useTitle('IP Range to CIDR')
useDescription(
  'This tool converts IP ranges to CIDR notation, supporting both IPv4 and IPv6 addresses. Enter the IP range and get the CIDR notation instantly.'
)
</script>
