<template>
  <ToolDefaultPageLayout :info="toolInfo">
    <JWTDecoderVerifier />
  </ToolDefaultPageLayout>
</template>

<script setup lang="ts">
import * as toolInfo from './info'
import { ToolDefaultPageLayout } from '@shared/ui/tool'
import JWTDecoderVerifier from './components/JWTDecoderVerifier.vue'
</script>
