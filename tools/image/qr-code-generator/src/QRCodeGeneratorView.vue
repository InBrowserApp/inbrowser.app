<template>
  <ToolDefaultPageLayout :info="toolInfo">
    <QRCodeGenerator />
  </ToolDefaultPageLayout>
</template>

<script setup lang="ts">
import * as toolInfo from './info'
import { ToolDefaultPageLayout } from '@shared/ui/tool'
import QRCodeGenerator from './components/QRCodeGenerator.vue'
</script>
