<template>
  <n-ul>
    <ToolItem v-for="tool in tools" :key="tool.toolID" :tool="tool" />
  </n-ul>
</template>

<script setup lang="ts">
import { tools } from '@/tools'
import ToolItem from './ToolItem.vue'
import { NUl } from 'naive-ui'
</script>
