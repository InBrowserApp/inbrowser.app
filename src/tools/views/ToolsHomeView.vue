<template>
  <ToolViewTemplate title="Tools">
    <ToolsList :tools="tools" />
  </ToolViewTemplate>
</template>

<script setup lang="ts">
import { useTitle } from '@/composables/head'
import { DocumentPdf16Regular, Icons20Regular, PlugConnected20Regular } from '@vicons/fluent'
import { Id } from '@vicons/carbon'
import ToolViewTemplate from '@/components/layouts/tool-view-template/ToolViewTemplate.vue'
import { ToolsList, type ToolItem } from '@/components/layouts/tools-list'

const tools: ToolItem[] = [
  {
    title: 'PDF Tools',
    icon: DocumentPdf16Regular,
    to: { name: 'tools-pdf' }
  },
  {
    title: 'UUID Tools',
    icon: Id,
    to: { name: 'tools-uuid' }
  },
  {
    title: 'Favicon Tools',
    icon: Icons20Regular,
    to: { name: 'tools-favicon' }
  },
  {
    title: 'Network Tools',
    icon: PlugConnected20Regular,
    to: { name: 'tools-network' }
  }
]

useTitle('Tools')
</script>
