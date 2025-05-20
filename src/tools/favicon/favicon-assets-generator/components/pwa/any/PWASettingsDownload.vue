<template>
  <n-p>
    <n-text depth="3">
      <n-icon :component="Sparkle16Filled" style="vertical-align: -0.1em" />
      All files are losslessly minified using oxipng.
    </n-text>
  </n-p>
  <n-button size="small" text @click="download192png">
    <template #icon>
      <n-icon :component="ArrowDownload16Filled" />
    </template>
    Download pwa-192x192.png
  </n-button>
  <br />
  <n-button size="small" text @click="download512png">
    <template #icon>
      <n-icon :component="ArrowDownload16Filled" />
    </template>
    Download pwa-512x512.png
  </n-button>

  <n-p>
    <n-code language="json" :code="code" :word-wrap="true" />
  </n-p>
</template>

<script setup lang="ts">
import { NButton, NIcon, NCode, NP, NText } from 'naive-ui'
import type { PWAOptions } from '../../../utils/favicon-generator/pwa'
import { ArrowDownload16Filled, Sparkle16Filled } from '@vicons/fluent'
import { generatePWAPNG } from '../../../utils/favicon-generator/pwa'
import { computed } from 'vue'
import { useMessage } from 'naive-ui'

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
      throw new Error('No image selected')
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
      throw new Error('No image selected')
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
