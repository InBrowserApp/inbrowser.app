<template>
  <div>
    <UUIDDisplay :uuid="uuid" />
  </div>
  <div>
    <n-space>
      <CopyToClipboardButton @click="copy" />
    </n-space>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import UUIDDisplay from '../../../components/uuid/UUIDDisplay.vue'
import { NSpace } from 'naive-ui'
import CopyToClipboardButton from '../../../components/controls/CopyToClipboardButton.vue'
import { useCopyToClipboard } from '@/composables/misc/clipboard'

const uuid = ref('00000000-0000-0000-0000-000000000000')

const { copy } = useCopyToClipboard(uuid)
</script>
