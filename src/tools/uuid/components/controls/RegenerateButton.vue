<template>
  <n-button @click="emit('click')" text>
    <template #icon>
      <n-icon :component="RefreshOutline" />
    </template>
    Regenerate
  </n-button>
</template>

<script setup lang="ts">
import { NIcon, NButton } from 'naive-ui'
import RefreshOutline from '@vicons/ionicons5/RefreshOutline'

const emit = defineEmits<{
  (e: 'click'): void
}>()
</script>
