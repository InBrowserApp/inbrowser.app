<template>
  <ToolDefaultPageLayout :info="toolInfo">
    <JsonFormatter />
  </ToolDefaultPageLayout>
</template>

<script setup lang="ts">
import * as toolInfo from './info'
import { ToolDefaultPageLayout } from '@shared/ui/tool'
import JsonFormatter from './components/JsonFormatter.vue'
</script>