<template>
  <ToolDefaultPageLayout :info="toolInfo">
    <URLParserBuilder />
  </ToolDefaultPageLayout>
</template>

<script setup lang="ts">
import * as toolInfo from './info'
import URLParserBuilder from './components/URLParserBuilder.vue'
import { ToolDefaultPageLayout } from '@shared/ui/tool'
</script>
