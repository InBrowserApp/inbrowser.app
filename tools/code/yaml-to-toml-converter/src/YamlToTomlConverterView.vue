<template>
  <ToolDefaultPageLayout :info="toolInfo">
    <YamlToTomlConverter />
  </ToolDefaultPageLayout>
</template>

<script setup lang="ts">
import * as toolInfo from './info'
import { ToolDefaultPageLayout } from '@shared/ui/tool'
import YamlToTomlConverter from './components/YamlToTomlConverter.vue'
</script>
