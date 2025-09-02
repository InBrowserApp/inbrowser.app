<template>
  <ToolDefaultPageLayout :info="toolInfo">
    <YamlToJsonConverter />
  </ToolDefaultPageLayout>
</template>

<script setup lang="ts">
import * as toolInfo from './info'
import { ToolDefaultPageLayout } from '@shared/ui/tool'
import YamlToJsonConverter from './components/YamlToJsonConverter.vue'
</script>
