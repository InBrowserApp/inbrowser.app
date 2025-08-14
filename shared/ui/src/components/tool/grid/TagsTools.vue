<template>
  <ToolsGrid :tools="tagTools" />
</template>

<script setup lang="ts">
import ToolsGrid from './ToolsGrid.vue'
import { computedAsync } from '@vueuse/core'

const props = defineProps<{
  tags: string[] | string
  exclude?: string[] | string
}>()

const tagTools = computedAsync(async () => {
  const tags = Array.isArray(props.tags) ? props.tags : [props.tags]

  const allTools = (await import('@registry/tools')).tools
  const tagsTools = allTools.filter((tool) => tool.tags.some((tag) => tags.includes(tag)))
  const excludeTools = allTools.filter((tool) => {
    if (typeof props.exclude === 'string') {
      return tool.toolID === props.exclude
    }
    if (Array.isArray(props.exclude)) {
      return props.exclude.includes(tool.toolID)
    }
    return false
  })
  return tagsTools.filter((tool) => !excludeTools.includes(tool))
})
</script>
