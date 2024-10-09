<template>
  <div>
    <UUIDsDisplay :uuids="uuids" />
  </div>
  <div>
    <n-space>
      <RegenerateButton @click="refresh" />
      <CopyToClipboardButton @click="copy" />
      <UUIDsDownloadButton :uuids="uuids" />
    </n-space>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { v4 as uuidv4 } from 'uuid'
import UUIDsDisplay from '../UUIDsDisplay.vue'
import { NSpace } from 'naive-ui'
import RegenerateButton from '../../controls/RegenerateButton.vue'
import CopyToClipboardButton from '../../controls/CopyToClipboardButton.vue'
import UUIDsDownloadButton from '../../controls/UUIDsDownloadButton.vue'
import { useCopyToClipboard } from '@/composables/misc/clipboard'

const props = defineProps<{
  size: number
}>()

const generateUUIDs = () => Array.from({ length: props.size }, () => uuidv4())

const uuids = ref(generateUUIDs())

const refresh = () => {
  uuids.value = generateUUIDs()
}

watch(() => props.size, refresh)

const { copy } = useCopyToClipboard(uuids.value.join('\n'))
</script>
