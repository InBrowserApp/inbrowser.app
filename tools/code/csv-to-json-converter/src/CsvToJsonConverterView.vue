<template>
  <ToolDefaultPageLayout :info="toolInfo">
    <CsvToJsonConverter />
  </ToolDefaultPageLayout>
</template>

<script setup lang="ts">
import * as toolInfo from './info'
import { ToolDefaultPageLayout } from '@shared/ui/tool'
import CsvToJsonConverter from './components/CsvToJsonConverter.vue'
</script>
