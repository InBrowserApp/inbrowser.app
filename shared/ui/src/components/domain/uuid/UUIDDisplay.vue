<template>
  <CopyToClipboardTooltip :content="uuid" #="{ copy }">
    <n-text code class="uuid-display" @click="copy">
      {{ uuid }}
    </n-text>
  </CopyToClipboardTooltip>
</template>

<script setup lang="ts">
import { NText } from 'naive-ui'
import CopyToClipboardTooltip from '../../base/tooltip/CopyToClipboardTooltip.vue'

defineProps<{
  uuid: `${string}-${string}-${string}-${string}-${string}`
}>()
</script>

<style scoped>
.uuid-display {
  word-break: break-all;
  font-size: 2em;
  cursor: pointer;
}
</style>
