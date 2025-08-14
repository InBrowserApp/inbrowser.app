<template>
  <ToolDefaultPageLayout :info="toolInfo">
    <FaviconGenerator />
  </ToolDefaultPageLayout>
</template>

<script setup lang="ts">
import * as toolInfo from './info'
import FaviconGenerator from './components/FaviconGenerator.vue'
import { ToolDefaultPageLayout } from '@shared/ui/tool'
</script>
