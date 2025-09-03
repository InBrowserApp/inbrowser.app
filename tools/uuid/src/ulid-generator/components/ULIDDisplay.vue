<template>
  <CopyToClipboardTooltip :content="ulid" #="{ copy }">
    <n-text code class="ulid-display" @click="copy">
      {{ ulid }}
    </n-text>
  </CopyToClipboardTooltip>
</template>

<script setup lang="ts">
import { NText } from 'naive-ui'
import { CopyToClipboardTooltip } from '@shared/ui/base'

defineProps<{
  ulid: string
}>()
</script>

<style scoped>
.ulid-display {
  word-break: break-all;
  font-size: 2em;
  cursor: pointer;
}
</style>
