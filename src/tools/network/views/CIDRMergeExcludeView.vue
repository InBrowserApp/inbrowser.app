<template>
  <ToolViewTemplate title="CIDRs Merger & Excluder">
    <n-p>
      This tool efficiently merges multiple CIDR blocks and can exclude specified CIDRs, supporting
      both IPv4 and IPv6 formats. Enter the CIDRs to be merged or excluded, and get the resulting
      CIDR blocks instantly.
    </n-p>
    <CIDRMergeExclude />
  </ToolViewTemplate>
</template>

<script setup lang="ts">
import { NP } from 'naive-ui'
import CIDRMergeExclude from '../components/tools/cidr-merge-exclude/CIDRMergeExclude.vue'
import ToolViewTemplate from '@/components/layouts/tool-view-template/ToolViewTemplate.vue'
import { useTitle, useDescription } from '@/composables/head'

useTitle('CIDRs Merger & Excluder')
useDescription(
  'This tool efficiently merges multiple CIDR blocks and can exclude specified CIDRs, supporting both IPv4 and IPv6 formats. Enter the CIDRs to be merged or excluded, and get the resulting CIDR blocks instantly.'
)
</script>
