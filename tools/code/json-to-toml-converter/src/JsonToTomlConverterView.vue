<template>
  <ToolDefaultPageLayout :info="toolInfo">
    <JsonToTomlConverter />
  </ToolDefaultPageLayout>
</template>

<script setup lang="ts">
import * as toolInfo from './info'
import { ToolDefaultPageLayout } from '@shared/ui/tool'
import JsonToTomlConverter from './components/JsonToTomlConverter.vue'
</script>
