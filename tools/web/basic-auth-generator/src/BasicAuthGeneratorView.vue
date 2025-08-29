<template>
  <ToolDefaultPageLayout :info="toolInfo">
    <BasicAuthGenerator />
  </ToolDefaultPageLayout>
</template>

<script setup lang="ts">
import * as toolInfo from './info'
import { ToolDefaultPageLayout } from '@shared/ui/tool'
import BasicAuthGenerator from './components/BasicAuthGenerator.vue'
</script>
