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
import { computed } from 'vue'
import { v3 as uuidv3 } from 'uuid'
import UUIDDisplay from '../../../components/uuid/UUIDDisplay.vue'
import { NSpace } from 'naive-ui'
import CopyToClipboardButton from '../../../components/controls/CopyToClipboardButton.vue'
import { useCopyToClipboard } from '@/composables/misc/clipboard'
import type { UUIDV35Config } from '../../../utils/uuid/config/UUIDV35Config'

const props = defineProps<{
  config: UUIDV35Config
}>()

const uuid = computed(() => {
  return uuidv3(props.config.name, props.config.namespace)
})

const { copy } = useCopyToClipboard(uuid)
</script>
