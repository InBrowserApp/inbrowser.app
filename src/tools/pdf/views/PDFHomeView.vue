<template>
  <ToolViewTemplate>
    <ToolsListMeta :tool-names="toolNames" />
  </ToolViewTemplate>
</template>

<script setup lang="ts">
import ToolViewTemplate from '@/components/layouts/tool-view-template/ToolViewTemplate.vue'
import { ToolsListMeta } from '@/components/layouts/tools-list-meta'

const toolNames = ['tools-pdf-remove-owner-password']
</script>
