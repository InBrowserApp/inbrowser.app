<template>
  <ToolDefaultPageLayout :info="toolInfo">
    <DnsLookup />
  </ToolDefaultPageLayout>
</template>

<script setup lang="ts">
import * as toolInfo from './info'
import DnsLookup from './components/DNSLookup.vue'
import { ToolDefaultPageLayout } from '@shared/ui/tool'
</script>
