<template>
  <ToolViewTemplate>
    <n-h3 prefix="bar" align-text>IPv4 / IPv6 / Domain</n-h3>
    <IPInfoSearchInput />
  </ToolViewTemplate>
</template>

<script setup lang="ts">
import { NH3 } from 'naive-ui'
import IPInfoSearchInput from '../components/tools/ip-info/IPInfoSearchInput.vue'
import ToolViewTemplate from '@/components/layouts/tool-view-template/ToolViewTemplate.vue'
</script>
