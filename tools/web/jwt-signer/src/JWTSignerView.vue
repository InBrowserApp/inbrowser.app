<template>
  <ToolDefaultPageLayout :info="toolInfo">
    <JWTSigner />
  </ToolDefaultPageLayout>
</template>

<script setup lang="ts">
import * as toolInfo from './info'
import { ToolDefaultPageLayout } from '@shared/ui/tool'
import JWTSigner from './components/JWTSigner.vue'
</script>
