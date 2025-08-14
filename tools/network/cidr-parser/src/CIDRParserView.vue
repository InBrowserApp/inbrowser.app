<template>
  <ToolDefaultPageLayout :info="toolInfo">
    <CIDRParser />
    <WhatIsCIDR />
  </ToolDefaultPageLayout>
</template>

<script setup lang="ts">
import * as toolInfo from './info'
import CIDRParser from './components/CIDRParser.vue'
import { ToolDefaultPageLayout } from '@shared/ui/tool'
import WhatIsCIDR from './components/WhatIsCIDR.vue'
</script>
