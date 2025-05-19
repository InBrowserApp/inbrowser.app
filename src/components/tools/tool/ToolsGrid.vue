<template>
  <n-grid cols="1 600:2 900:3 1200:4" :x-gap="30" :y-gap="30">
    <n-gi v-for="tool in tools" :key="tool.toolID">
      <ToolThing :tool="tool" :show-icon="true" />
    </n-gi>
  </n-grid>
</template>

<script setup lang="ts">
import { NGrid, NGi } from 'naive-ui'
import type { ToolInfo } from '@/tools/interface'
import ToolThing from './ToolThing.vue'

defineProps<{
  tools: ToolInfo[]
}>()
</script>
