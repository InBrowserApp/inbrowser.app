<template>
  <n-li>
    <router-link :to="path">
      <span>{{ tool.toolID }}</span>
    </router-link>
  </n-li>
</template>

<script setup lang="ts">
import { NLi } from 'naive-ui'
import type { ToolInfo } from '@/tools/interface'
import { useSiteLanguagePath } from '@/locale'
import { computed } from 'vue'

const props = defineProps<{
  tool: ToolInfo
}>()

const rawPath = computed(() => props.tool.routes[0].path)

const { path } = useSiteLanguagePath(rawPath)
</script>
