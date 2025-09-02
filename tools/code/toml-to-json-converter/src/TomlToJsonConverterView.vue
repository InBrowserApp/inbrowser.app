<template>
  <ToolDefaultPageLayout :info="toolInfo">
    <TomlToJsonConverter />
  </ToolDefaultPageLayout>
</template>

<script setup lang="ts">
import * as toolInfo from './info'
import { ToolDefaultPageLayout } from '@shared/ui/tool'
import TomlToJsonConverter from './components/TomlToJsonConverter.vue'
</script>
