<template>
  <n-p>
    <FileMinifiedUsingOxipng />
  </n-p>
  <DownloadFileButton filename="pwa-192x192.png" @click="download192png" />
  <br />
  <DownloadFileButton filename="pwa-512x512.png" @click="download512png" />
  <n-p>
    <n-code language="json" :code="code" :word-wrap="true" :hljs="hljs" />
  </n-p>
</template>

<script setup lang="ts">
import { NCode, NP } from 'naive-ui'
import type { PWAOptions } from '../../../utils/favicon-generator/pwa'
import { generatePWAPNG } from '../../../utils/favicon-generator/pwa'
import { computed } from 'vue'
import { useMessage } from 'naive-ui'
import { useI18n } from 'vue-i18n'
import FileMinifiedUsingOxipng from '../../common/FileMinifiedUsingOxipng.vue'
import DownloadFileButton from '../../common/DownloadFileButton.vue'
import { messages } from '../../locale/no-image-selected'
import hljs from 'highlight.js/lib/core'
import json from 'highlight.js/lib/languages/json'
hljs.registerLanguage('json', json)

const { t } = useI18n({
  messages,
})
const message = useMessage()

const props = defineProps<{
  image: Blob | undefined
  options: PWAOptions
}>()

const image = computed<Blob | undefined>(() => {
  if (props.options.image) {
    return props.options.image
  } else {
    return props.image
  }
})

const download192png = async () => {
  try {
    if (image.value === undefined) {
      throw new Error(t('noImageSelected'))
    }

    const blob = await generatePWAPNG(image.value, props.options, 192)
    const url = URL.createObjectURL(blob)

    const a = document.createElement('a')
    a.href = url
    a.download = 'pwa-192x192.png'
    a.click()
  } catch (e) {
    message.error((e as Error).message)
  }
}

const download512png = async () => {
  try {
    if (image.value === undefined) {
      throw new Error(t('noImageSelected'))
    }

    const blob = await generatePWAPNG(image.value, props.options, 512)
    const url = URL.createObjectURL(blob)

    const a = document.createElement('a')
    a.href = url
    a.download = 'pwa-512x512.png'
    a.click()
  } catch (e) {
    message.error((e as Error).message)
  }
}

const code = computed(() => {
  return JSON.stringify(
    [
      {
        src: 'pwa-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: 'pwa-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
    ],
    null,
    2,
  )
})
</script>
