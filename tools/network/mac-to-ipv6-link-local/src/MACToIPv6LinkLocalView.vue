<template>
  <ToolDefaultPageLayout :info="toolInfo">
    <MACToIPv6LinkLocal />
    <WhatIsIPv6LinkLocal />
  </ToolDefaultPageLayout>
</template>

<script setup lang="ts">
import * as toolInfo from './info'
import MACToIPv6LinkLocal from './components/MACToIPv6LinkLocal.vue'
import { ToolDefaultPageLayout } from '@shared/ui/tool'
import WhatIsIPv6LinkLocal from './components/WhatIsIPv6LinkLocal.vue'
</script>
