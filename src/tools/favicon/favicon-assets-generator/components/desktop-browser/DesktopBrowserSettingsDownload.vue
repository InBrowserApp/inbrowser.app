<template>
  <n-p>
    <n-text depth="3">
      <n-icon :component="Sparkle16Filled" style="vertical-align: -0.1em" />
      All files are losslessly minified using oxipng and svgo.
    </n-text>
  </n-p>
  <n-button size="small" text @click="downloadico">
    <template #icon>
      <n-icon :component="ArrowDownload16Filled" />
    </template>
    Download favicon.ico
  </n-button>
  <template v-if="useOriginalSVG">
    <br />
    <n-button size="small" text @click="downloadSVG">
      <template #icon>
        <n-icon :component="ArrowDownload16Filled" />
      </template>
      Download favicon.svg
    </n-button>
  </template>
  <template v-else>
    <br />
    <n-button size="small" text @click="download32png">
      <template #icon>
        <n-icon :component="ArrowDownload16Filled" />
      </template>
      Download favicon-32x32.png
    </n-button>
    <br />
    <n-button size="small" text @click="download16png">
      <template #icon>
        <n-icon :component="ArrowDownload16Filled" />
      </template>
      Download favicon-16x16.png
    </n-button>
  </template>

  <n-p>
    <n-code language="html" :code="code" :word-wrap="true" />
  </n-p>
</template>

<script setup lang="ts">
import { NButton, NIcon, NCode, NP, NText, useMessage } from 'naive-ui'
import type { DesktopBrowserOptions } from '../../utils/favicon-generator/desktop-browser'
import { ArrowDownload16Filled, Sparkle16Filled } from '@vicons/fluent'
import {
  generateFaviconICO,
  generateFaviconPNG,
  getHTMLCode,
  generateFaviconSVG,
} from '../../utils/favicon-generator/desktop-browser'
import { computed } from 'vue'

const message = useMessage()

const props = defineProps<{
  image: Blob | undefined
  options: DesktopBrowserOptions
}>()

const image = computed<Blob | undefined>(() => {
  if (props.options.image) {
    return props.options.image
  } else {
    return props.image
  }
})

const downloadico = async () => {
  try {
    if (image.value === undefined) {
      throw new Error('No image selected')
    }

    const blob = await generateFaviconICO(image.value, props.options)
    const url = URL.createObjectURL(blob)

    const a = document.createElement('a')
    a.href = url
    a.download = 'favicon.ico'
    a.click()
  } catch (e) {
    message.error((e as Error).message)
  }
}

const download32png = async () => {
  try {
    if (image.value === undefined) {
      throw new Error('No image selected')
    }
    const blob = await generateFaviconPNG(image.value, props.options, 32)
    const url = URL.createObjectURL(blob)

    const a = document.createElement('a')
    a.href = url
    a.download = 'favicon-32x32.png'
    a.click()
  } catch (e) {
    message.error((e as Error).message)
  }
}

const download16png = async () => {
  try {
    if (image.value === undefined) {
      throw new Error('No image selected')
    }

    const blob = await generateFaviconPNG(image.value, props.options, 16)
    const url = URL.createObjectURL(blob)

    const a = document.createElement('a')
    a.href = url
    a.download = 'favicon-16x16.png'
    a.click()
  } catch (e) {
    message.error((e as Error).message)
  }
}

const downloadSVG = async () => {
  try {
    if (image.value === undefined) {
      throw new Error('No image selected')
    }

    const blob = await generateFaviconSVG(image.value, props.options)
    const url = URL.createObjectURL(blob)

    const a = document.createElement('a')
    a.href = url
    a.download = 'favicon.svg'
    a.click()
  } catch (e) {
    message.error((e as Error).message)
  }
}

const iconMime = computed(() => {
  if (image.value === undefined) {
    return 'image/png'
  } else {
    return image.value.type
  }
})

const useOriginalSVG = computed(() => {
  return iconMime.value === 'image/svg+xml' && props.options.original
})

const code = computed(() => {
  if (useOriginalSVG.value) {
    return getHTMLCode(props.image, props.options)
  } else {
    return getHTMLCode(props.image, props.options)
  }
})
</script>
