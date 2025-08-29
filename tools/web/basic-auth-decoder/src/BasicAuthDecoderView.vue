<template>
  <ToolDefaultPageLayout :info="toolInfo">
    <BasicAuthDecoder />
  </ToolDefaultPageLayout>
</template>

<script setup lang="ts">
import * as toolInfo from './info'
import { ToolDefaultPageLayout } from '@shared/ui/tool'
import BasicAuthDecoder from './components/BasicAuthDecoder.vue'
</script>
