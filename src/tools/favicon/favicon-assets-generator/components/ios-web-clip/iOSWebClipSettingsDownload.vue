<template>
  <n-p>
    <n-text depth="3">
      <n-icon :component="Sparkle16Filled" style="vertical-align: -0.1em" />
      All files are losslessly minified using oxipng.
    </n-text>
  </n-p>
  <n-button size="small" text @click="download">
    <template #icon>
      <n-icon :component="ArrowDownload16Filled" />
    </template>

    Download apple-touch-icon.png
  </n-button>

  <n-p>
    <n-code language="html" :code="code" :word-wrap="true" />
  </n-p>
</template>

<script setup lang="ts">
import { NButton, NIcon, NP, NText, NCode } from 'naive-ui'
import type { iOSWebClipOptions } from '../../utils/favicon-generator/ios-web-clip'
import { ArrowDownload16Filled, Sparkle16Filled } from '@vicons/fluent'
import { generateOutput, getHTMLCode } from '../../utils/favicon-generator/ios-web-clip'
import { computed } from 'vue'
import { useMessage } from 'naive-ui'

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
      throw new Error('No image selected')
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
