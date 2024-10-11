<template>
  <n-space vertical>
    <template v-for="tool in tools" :key="tool.title">
      <router-link :to="tool.to" #="{ navigate, href }" custom>
        <n-button tag="a" :href="href" @click="navigate" text>
          <template #icon>
            <n-icon :component="tool.icon" />
          </template>
          {{ tool.title }}
        </n-button>
      </router-link>
    </template>
  </n-space>
</template>

<script setup lang="ts">
import { NButton, NIcon, NSpace } from 'naive-ui'
import type { ToolItem } from './types'

defineProps<{
  tools: ToolItem[]
}>()
</script>
