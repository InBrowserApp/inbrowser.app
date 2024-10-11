<template>
  <n-upload @before-upload="beforeUpload" accept="image/*">
    <n-upload-dragger>
      <div style="margin-bottom: 12px">
        <n-icon size="48" :depth="3">
          <ImageEdit24Regular />
        </n-icon>
      </div>
      <n-text style="font-size: 16px">Click or drag to select image</n-text>
    </n-upload-dragger>
  </n-upload>
</template>

<script setup lang="ts">
import { NUpload, NUploadDragger, NIcon, NText } from 'naive-ui'
import { ImageEdit24Regular } from '@vicons/fluent'
import type { UploadFileInfo } from 'naive-ui'
import { useMessage } from 'naive-ui'

const message = useMessage()

const emit = defineEmits<{
  (event: 'update:file', file: File): void
}>()

async function beforeUpload(data: { file: UploadFileInfo; fileList: UploadFileInfo[] }) {
  if (data.fileList.length > 1) {
    message.error('Only one file can be uploaded')
    return false
  } else if (data.file.file?.type.startsWith('image/') !== true) {
    message.error('Only image files are allowed')
    return false
  } else {
    emit('update:file', data.file.file)
    return false
  }
}
</script>
