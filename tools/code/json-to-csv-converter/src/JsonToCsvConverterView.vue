<template>
  <ToolDefaultPageLayout :info="toolInfo">
    <JsonToCsvConverter />
  </ToolDefaultPageLayout>
</template>

<script setup lang="ts">
import * as toolInfo from './info'
import { ToolDefaultPageLayout } from '@shared/ui/tool'
import JsonToCsvConverter from './components/JsonToCsvConverter.vue'
</script>
