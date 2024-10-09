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
import { ref } from 'vue'
import { v4 as uuidv4 } from 'uuid'
import UUIDDisplay from '../../../components/uuid/UUIDDisplay.vue'
import { NSpace } from 'naive-ui'
import RegenerateButton from '../../../components/controls/RegenerateButton.vue'
import CopyToClipboardButton from '../../../components/controls/CopyToClipboardButton.vue'
import { useCopyToClipboard } from '../../../composables/useCopyToClipboard'

const uuid = ref(uuidv4())

const refresh = () => {
  uuid.value = uuidv4()
}

const { copy } = useCopyToClipboard(uuid)
</script>
