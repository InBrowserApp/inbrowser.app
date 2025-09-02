<template>
  <ToolDefaultPageLayout :info="toolInfo">
    <TomlToYamlConverter />
  </ToolDefaultPageLayout>
</template>

<script setup lang="ts">
import * as toolInfo from './info'
import { ToolDefaultPageLayout } from '@shared/ui/tool'
import TomlToYamlConverter from './components/TomlToYamlConverter.vue'
</script>
