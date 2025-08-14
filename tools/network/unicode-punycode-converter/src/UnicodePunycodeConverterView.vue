<template>
  <ToolDefaultPageLayout :info="toolInfo">
    <PunycodeTool />
  </ToolDefaultPageLayout>
</template>

<script setup lang="ts">
import * as toolInfo from './info'
import PunycodeTool from './components/PunycodeTool.vue'
import { ToolDefaultPageLayout } from '@shared/ui/tool'
</script>
