<template>
  <ToolDefaultPageLayout :info="toolInfo">
    <IPv6ToMAC />
    <HowToConvertIPv6ToMAC />
  </ToolDefaultPageLayout>
</template>

<script setup lang="ts">
import * as toolInfo from './info'
import IPv6ToMAC from './components/IPv6ToMAC.vue'
import { ToolDefaultPageLayout } from '@shared/ui/tool'
import HowToConvertIPv6ToMAC from './components/HowToConvertIPv6ToMAC.vue'
</script>
