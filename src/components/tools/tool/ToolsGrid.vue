<template>
  <n-grid cols="1 600:2 900:3 1200:4" :x-gap="30" :y-gap="30">
    <n-gi v-for="tool in filteredTools" :key="tool.toolID">
      <ToolThing :tool="tool" :show-icon="true" />
    </n-gi>
  </n-grid>
</template>

<script setup lang="ts">
import { NGrid, NGi } from 'naive-ui'
import type { ToolInfo } from '@/tools/interface'
import ToolThing from './ToolThing.vue'
import { computed } from 'vue'

const props = defineProps<{
  tools: ToolInfo[]
  hide?: string[] | string // toolID[]
}>()

const filteredTools = computed(() => {
  const hide = props.hide
  if (!hide) {
    return props.tools
  } else {
    if (Array.isArray(hide)) {
      return props.tools.filter((tool) => !hide.includes(tool.toolID))
    } else {
      return props.tools.filter((tool) => tool.toolID !== hide)
    }
  }
})
</script>
