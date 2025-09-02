<template>
  <ToolDefaultPageLayout :info="toolInfo">
    <HtmlToMarkdownConverter />
  </ToolDefaultPageLayout>
</template>

<script setup lang="ts">
import * as toolInfo from './info'
import { ToolDefaultPageLayout } from '@shared/ui/tool'
import HtmlToMarkdownConverter from './components/HtmlToMarkdownConverter.vue'
</script>
