<template>
  <ToolSectionHeader>
    {{ title }}
  </ToolSectionHeader>
  <ToolSection>
    <MarkdownArticle :markdown="description" />
  </ToolSection>
</template>

<script setup lang="ts">
import { ToolSectionHeader, ToolSection } from '../../tool'
import MarkdownArticle from '../markdown/MarkdownArticle.vue'

defineProps<{
  title: string
  description: string
}>()
</script>
