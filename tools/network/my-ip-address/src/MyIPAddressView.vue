<template>
  <ToolDefaultPageLayout :info="toolInfo">
    <MyIPAddress />
  </ToolDefaultPageLayout>
</template>

<script setup lang="ts">
import * as toolInfo from './info'
import MyIPAddress from './components/MyIPAddress.vue'
import { ToolDefaultPageLayout } from '@shared/ui/tool'
</script>
