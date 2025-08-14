<template>
  <n-grid cols="1 600:2 900:3 1200:4" :x-gap="10" :y-gap="10">
    <template v-if="tools">
      <n-gi v-for="tool in filteredTools" :key="tool.toolID">
        <ToolThing :tool="tool" :show-icon="true" />
      </n-gi>
    </template>
    <template v-else>
      <n-gi v-for="i in loadingSize ?? 12" :key="i">
        <ToolLoadingThing />
      </n-gi>
    </template>
  </n-grid>
</template>

<script setup lang="ts">
import { NGrid, NGi } from 'naive-ui'
import type { ToolInfo } from '@shared/tools'
import ToolThing from './ToolThing.vue'
import ToolLoadingThing from './ToolLoadingThing.vue'
import { computed } from 'vue'

const props = defineProps<{
  tools?: ToolInfo[]
  hide?: string[] | string // toolID[]
  loadingSize?: number
}>()

const filteredTools = computed(() => {
  if (!props.tools) {
    return []
  }

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
