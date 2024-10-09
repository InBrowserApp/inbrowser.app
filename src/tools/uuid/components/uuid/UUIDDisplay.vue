<template>
  <n-tooltip trigger="hover">
    <template #trigger>
      <n-text code style="word-break: break-all; font-size: 2em; cursor: pointer" @click="copy">
        {{ uuid }}
      </n-text>
    </template>
    <n-icon :component="Clipboard16Regular" /> Copy to Clipboard
  </n-tooltip>
</template>

<script setup lang="ts">
import { toRef } from 'vue'
import { NText, NTooltip, NIcon } from 'naive-ui'
import Clipboard16Regular from '@vicons/fluent/Clipboard16Regular'
import { useCopyToClipboard } from '../../composables/useCopyToClipboard'

const props = defineProps<{
  uuid: string
}>()

const { copy } = useCopyToClipboard(toRef(props, 'uuid'))
</script>
