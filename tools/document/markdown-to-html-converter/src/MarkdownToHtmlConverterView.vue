<template>
  <ToolDefaultPageLayout :info="toolInfo">
    <MarkdownToHtmlConverter />
  </ToolDefaultPageLayout>
</template>

<script setup lang="ts">
import * as toolInfo from './info'
import { ToolDefaultPageLayout } from '@shared/ui/tool'
import MarkdownToHtmlConverter from './components/MarkdownToHtmlConverter.vue'
</script>
