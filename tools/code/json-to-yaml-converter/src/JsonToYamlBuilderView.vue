<template>
  <ToolDefaultPageLayout :info="toolInfo">
    <JsonToYamlBuilder />
  </ToolDefaultPageLayout>
</template>

<script setup lang="ts">
import * as toolInfo from './info'
import { ToolDefaultPageLayout } from '@shared/ui/tool'
import JsonToYamlBuilder from './components/JsonToYamlBuilder.vue'
</script>
