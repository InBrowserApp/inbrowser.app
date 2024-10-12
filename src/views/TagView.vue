<template>
  <main>
    <n-h1 prefix="bar" align-text>Tag: {{ tag }}</n-h1>
    <ToolsListMeta :tool-names="toolNames" />
  </main>
</template>

<script setup lang="ts">
import { NH1 } from 'naive-ui'
import ToolsListMeta from '@/components/layouts/tools-list-meta/ToolsListMeta.vue'
import { routes } from '@/tools/routes'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const tag = computed(() => route.params.tag as string)
const toolNames = computed(() =>
  routes
    .filter((route) => route.meta?.tags?.includes(tag.value))
    .filter((route) => !route.meta?.hidden)
    .map((route) => route.name as string)
)
</script>
