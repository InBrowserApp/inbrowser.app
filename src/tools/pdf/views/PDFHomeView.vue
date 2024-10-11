<template>
  <ToolViewTemplate title="PDF Tools">
    <ToolsList :tools="tools" />
  </ToolViewTemplate>
</template>

<script setup lang="ts">
import { useTitle, useDescription } from '@/composables/head'
import Key16Regular from '@vicons/fluent/Key16Regular'
import ToolViewTemplate from '@/components/layouts/tool-view-template/ToolViewTemplate.vue'
import { ToolsList, type ToolItem } from '@/components/layouts/tools-list'

const tools: ToolItem[] = [
  {
    title: 'Remove PDF Owner Password',
    icon: Key16Regular,
    to: { name: 'tools-pdf-remove-owner-password' }
  }
]

useTitle('PDF Tools')
useDescription('PDF Tools.')
</script>
