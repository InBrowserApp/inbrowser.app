<template>
  <div>
    <UUIDDisplay :uuid="uuid" />
  </div>
  <div>
    <n-space>
      <RegenerateButton @click="refresh" />
      <CopyToClipboardButton @click="copy" />
    </n-space>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { v1 as uuidv1 } from 'uuid'
import UUIDDisplay from '../../../components/uuid/UUIDDisplay.vue'
import { NSpace } from 'naive-ui'
import RegenerateButton from '../../../components/controls/RegenerateButton.vue'
import CopyToClipboardButton from '../../../components/controls/CopyToClipboardButton.vue'
import { useCopyToClipboard } from '../../../composables/useCopyToClipboard'
import type { UUIDV1Config } from '../../../utils/uuid/config/UUIDV1Config'
import { parseMACAddress } from '../../../utils/mac'

const props = defineProps<{
  config: UUIDV1Config
}>()

const getUUID = () => {
  return uuidv1({
    node: parseMACAddress(props.config.macAddress)
  })
}

const uuid = ref(getUUID())

const refresh = () => {
  uuid.value = getUUID()
}

const { copy } = useCopyToClipboard(uuid)

watch(() => props.config.macAddress, refresh)
</script>
