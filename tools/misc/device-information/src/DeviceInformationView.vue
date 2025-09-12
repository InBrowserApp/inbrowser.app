<template>
  <ToolDefaultPageLayout :info="toolInfo">
    <DeviceInformation />
  </ToolDefaultPageLayout>
</template>

<script setup lang="ts">
import * as toolInfo from './info'
import { ToolDefaultPageLayout } from '@shared/ui/tool'
import DeviceInformation from './components/DeviceInformation.vue'
</script>
