<template>
  <ToolDefaultPageLayout :info="toolInfo">
    <XmlToJsonConverter />
  </ToolDefaultPageLayout>
</template>

<script setup lang="ts">
import * as toolInfo from './info'
import { ToolDefaultPageLayout } from '@shared/ui/tool'
import XmlToJsonConverter from './components/XmlToJsonConverter.vue'
</script>
