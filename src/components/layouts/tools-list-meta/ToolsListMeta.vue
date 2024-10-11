<template>
  <n-space vertical>
    <template v-for="toolName in toolNames" :key="toolName">
      <ToolMetaItem :tool-name="toolName" />
    </template>
  </n-space>
</template>

<script setup lang="ts">
import { NSpace } from 'naive-ui'
import ToolMetaItem from './ToolMetaItem.vue'

defineProps<{
  toolNames: string[]
}>()
</script>
