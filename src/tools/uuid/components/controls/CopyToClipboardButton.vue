<template>
  <n-button @click="emit('click')" text>
    <template #icon>
      <n-icon :component="Clipboard16Regular" />
    </template>
    Copy
  </n-button>
</template>

<script setup lang="ts">
import { NIcon, NButton } from 'naive-ui'
import Clipboard16Regular from '@vicons/fluent/Clipboard16Regular'

const emit = defineEmits<{
  (e: 'click'): void
}>()
</script>
