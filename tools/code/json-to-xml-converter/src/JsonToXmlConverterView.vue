<template>
  <ToolDefaultPageLayout :info="toolInfo">
    <JsonToXmlConverter />
  </ToolDefaultPageLayout>
</template>

<script setup lang="ts">
import * as toolInfo from './info'
import { ToolDefaultPageLayout } from '@shared/ui/tool'
import JsonToXmlConverter from './components/JsonToXmlConverter.vue'
</script>
