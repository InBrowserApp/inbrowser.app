<template>
  <ToolDefaultPageLayout :info="toolInfo">
    <CIDRMergerExcluder />
    <WhatIsCIDR />
  </ToolDefaultPageLayout>
</template>

<script setup lang="ts">
import * as toolInfo from './info'
import CIDRMergerExcluder from './components/CIDRMergerExcluder.vue'
import { ToolDefaultPageLayout } from '@shared/ui/tool'
import WhatIsCIDR from './components/WhatIsCIDR.vue'
</script>
