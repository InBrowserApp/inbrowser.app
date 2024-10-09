<template>
  <n-upload @before-upload="beforeUpload" accept="application/pdf">
    <n-upload-dragger>
      <div style="margin-bottom: 12px">
        <n-icon size="48" :depth="3">
          <archive-icon />
        </n-icon>
      </div>
      <n-text style="font-size: 16px">Click or drag to upload PDF</n-text>
    </n-upload-dragger>
  </n-upload>
</template>

<script setup lang="ts">
import { NUpload, NUploadDragger, NIcon, NText } from 'naive-ui'
import ArchiveIcon from '@vicons/ionicons5/ArchiveOutline'
import type { UploadFileInfo } from 'naive-ui'
import { useMessage } from 'naive-ui'

const message = useMessage()

const emit = defineEmits<{
  (event: 'upload:file', file: File): void
}>()

async function beforeUpload(data: { file: UploadFileInfo; fileList: UploadFileInfo[] }) {
  if (data.file.file?.type !== 'application/pdf') {
    message.error('Only PDF files are allowed')
    return false
  } else {
    emit('upload:file', data.file.file)
    return false
  }
}
</script>
