<template>
  <n-p>
    <FileMinifiedUsingOxipng />
  </n-p>
  <DownloadFileButton filename="apple-touch-icon.png" @click="download" />

  <n-p>
    <n-code language="html" :code="code" :word-wrap="true" :hljs="hljs" />
  </n-p>
</template>

<script setup lang="ts">
import { NP, NCode } from 'naive-ui'
import type { iOSWebClipOptions } from '../../utils/favicon-generator/ios-web-clip'
import { generateOutput, getHTMLCode } from '../../utils/favicon-generator/ios-web-clip'
import { computed } from 'vue'
import { useMessage } from 'naive-ui'
import { useI18n } from 'vue-i18n'
import FileMinifiedUsingOxipng from '../common/FileMinifiedUsingOxipng.vue'
import DownloadFileButton from '../common/DownloadFileButton.vue'
import hljs from 'highlight.js/lib/core'
import xml from 'highlight.js/lib/languages/xml'
hljs.registerLanguage('html', xml)
import { messages } from '../locale/no-image-selected'

const { t } = useI18n({
  messages,
})
const message = useMessage()

const props = defineProps<{
  image: Blob | undefined
  options: iOSWebClipOptions
}>()

const image = computed<Blob | undefined>(() => {
  if (props.options.image) {
    return props.options.image
  } else {
    return props.image
  }
})

const download = async () => {
  try {
    if (image.value === undefined) {
      throw new Error(t('noImageSelected'))
    }

    const blob = await generateOutput(image.value, props.options)
    const url = URL.createObjectURL(blob)

    const a = document.createElement('a')
    a.href = url
    a.download = 'apple-touch-icon.png'
    a.click()
  } catch (e) {
    message.error((e as Error).message)
  }
}

const code = computed(() => {
  return getHTMLCode()
})
</script>
