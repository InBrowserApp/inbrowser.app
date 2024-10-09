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
import { v1 as uuidv1 } from 'uuid'
import UUIDsDisplay from '../UUIDsDisplay.vue'
import { NSpace } from 'naive-ui'
import RegenerateButton from '../../controls/RegenerateButton.vue'
import CopyToClipboardButton from '../../controls/CopyToClipboardButton.vue'
import UUIDsDownloadButton from '../../controls/UUIDsDownloadButton.vue'
import { useCopyToClipboard } from '../../../composables/useCopyToClipboard'
import type { UUIDV1Config } from '../../../utils/uuid/config/UUIDV1Config'
import { parseMACAddress } from '../../../utils/mac'

const props = defineProps<{
  size: number
  config: UUIDV1Config
}>()

const generateUUIDs = () =>
  Array.from({ length: props.size }, () =>
    uuidv1({
      node: parseMACAddress(props.config.macAddress)
    })
  )

const uuids = ref(generateUUIDs())

const refresh = () => {
  uuids.value = generateUUIDs()
}

watch(() => props.size, refresh)
watch(() => props.config.macAddress, refresh)

const { copy } = useCopyToClipboard(uuids.value.join('\n'))
</script>
