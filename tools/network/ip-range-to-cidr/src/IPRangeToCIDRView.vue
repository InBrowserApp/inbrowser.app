<template>
  <ToolDefaultPageLayout :info="toolInfo">
    <IPRangeToCIDR />
    <WhatIsCIDR />
  </ToolDefaultPageLayout>
</template>

<script setup lang="ts">
import * as toolInfo from './info'
import IPRangeToCIDR from './components/IPRangeToCIDR.vue'
import { ToolDefaultPageLayout } from '@shared/ui/tool'
import WhatIsCIDR from './components/WhatIsCIDR.vue'
</script>
