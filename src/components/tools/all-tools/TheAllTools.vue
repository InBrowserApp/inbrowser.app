<template>
  <n-ul>
    <ToolItem v-for="tool in tools" :key="tool.toolID" :tool="tool" />
  </n-ul>
</template>

<script setup lang="ts">
import { tools as allTools, type ToolInfo } from '@/tools'
import ToolItem from './ToolItem.vue'
import { NUl } from 'naive-ui'
import { computed } from 'vue'

const props = defineProps<{
  tools?: ToolInfo[]
}>()

const tools = computed(() => props.tools ?? allTools)
</script>
