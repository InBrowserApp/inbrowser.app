<template>
  <ToolDefaultPageLayout :info="toolInfo">
    <BarcodeGenerator />
  </ToolDefaultPageLayout>
</template>

<script setup lang="ts">
import * as toolInfo from './info'
import { ToolDefaultPageLayout } from '@shared/ui/tool'
import BarcodeGenerator from './components/BarcodeGenerator.vue'
</script>
