<template>
  <ToolDefaultPageLayout :info="toolInfo">
    <RandomPasswordGenerator />
  </ToolDefaultPageLayout>
</template>

<script setup lang="ts">
import * as toolInfo from './info'
import { ToolDefaultPageLayout } from '@shared/ui/tool'
import RandomPasswordGenerator from './components/RandomPasswordGenerator.vue'
</script>
