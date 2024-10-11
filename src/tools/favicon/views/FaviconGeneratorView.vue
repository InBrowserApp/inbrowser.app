<template>
  <ToolViewTemplate title="Favicon Generator">
    <FaviconGenerator />
  </ToolViewTemplate>
</template>

<script setup lang="ts">
import FaviconGenerator from '../components/tools/favicon-generator/FaviconGenerator.vue'
import { useTitle, useDescription } from '@/composables/head'
import ToolViewTemplate from '@/components/layouts/tool-view-template/ToolViewTemplate.vue'

useTitle('Favicon Generator')
useDescription('Generate Favicon.')
</script>
