<template>
  <ToolDefaultPageLayout :info="toolInfo">
    <URLComponentConverter />
    <WhatIsURLEncoding />
  </ToolDefaultPageLayout>
</template>

<script setup lang="ts">
import * as toolInfo from './info'
import URLComponentConverter from './components/URLComponentConverter.vue'
import { ToolDefaultPageLayout } from '@shared/ui/tool'
import WhatIsURLEncoding from './components/WhatIsURLEncoding.vue'
</script>
