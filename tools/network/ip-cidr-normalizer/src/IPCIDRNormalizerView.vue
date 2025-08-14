<template>
  <ToolDefaultPageLayout :info="toolInfo">
    <IPCIDRNormalizer />
  </ToolDefaultPageLayout>
</template>

<script setup lang="ts">
import * as toolInfo from './info'
import IPCIDRNormalizer from './components/IPCIDRNormalizer.vue'
import { ToolDefaultPageLayout } from '@shared/ui/tool'
</script>
