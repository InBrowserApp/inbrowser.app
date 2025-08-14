<template>
  <ToolDefaultPageLayout :info="toolInfo">
    <ReverseIPLookup />
  </ToolDefaultPageLayout>
</template>

<script setup lang="ts">
import * as toolInfo from './info'
import ReverseIPLookup from './components/ReverseIPLookup.vue'
import { ToolDefaultPageLayout } from '@shared/ui/tool'
</script>
