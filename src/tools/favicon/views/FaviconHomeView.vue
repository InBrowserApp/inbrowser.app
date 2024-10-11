<template>
  <ToolViewTemplate title="Favicon Tools">
    <ToolsList :tools="tools" />
  </ToolViewTemplate>
</template>

<script setup lang="ts">
import { useTitle, useDescription } from '@/composables/head'
import { Icons20Regular } from '@vicons/fluent'
import ToolViewTemplate from '@/components/layouts/tool-view-template/ToolViewTemplate.vue'
import { ToolsList, type ToolItem } from '@/components/layouts/tools-list'

const tools: ToolItem[] = [
  {
    icon: Icons20Regular,
    title: 'Favicon Generator',
    to: '/tools/favicon/favicon-generator'
  }
]

useTitle('Favicon Tools')
useDescription('Favicon Tools.')
</script>
