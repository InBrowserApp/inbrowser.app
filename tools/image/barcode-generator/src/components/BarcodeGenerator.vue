<template>
  <n-grid cols="2 l:4" responsive="screen" :x-gap="40" :y-gap="20">
    <n-gi span="2 l:3">
      <ToolSectionHeader>{{ t('options') }}</ToolSectionHeader>
      <ToolSection>
        <BarcodeOptionsForm
          v-model:text="text"
          v-model:format="format"
          v-model:width="barWidth"
          v-model:height="barHeight"
          v-model:margin="margin"
          v-model:display-value="displayValue"
          v-model:text-align="textAlign"
          v-model:text-position="textPosition"
          v-model:font-size="fontSize"
          v-model:line-color="lineColor"
          v-model:background="background"
        />
      </ToolSection>
    </n-gi>

    <n-gi span="2 l:1">
      <ToolSectionHeader>{{ t('preview') }}</ToolSectionHeader>
      <BarcodePreview
        :text="text"
        :format="format"
        :width="barWidth"
        :height="barHeight"
        :margin="margin"
        :display-value="displayValue"
        :text-align="textAlign"
        :text-position="textPosition"
        :font-size="fontSize"
        :line-color="lineColor"
        :background="background"
      />

      <ToolSectionHeader>{{ t('download') }}</ToolSectionHeader>
      <BarcodeDownloadButtons
        :text="text"
        :format="format"
        :width="barWidth"
        :height="barHeight"
        :margin="margin"
        :display-value="displayValue"
        :text-align="textAlign"
        :text-position="textPosition"
        :font-size="fontSize"
        :line-color="lineColor"
        :background="background"
      />
    </n-gi>
  </n-grid>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { ToolSection, ToolSectionHeader } from '@shared/ui/tool'
import { useStorage } from '@vueuse/core'
import { NGrid, NGi } from 'naive-ui'
import BarcodeOptionsForm from './BarcodeOptionsForm.vue'
import BarcodePreview from './BarcodePreview.vue'
import BarcodeDownloadButtons from './BarcodeDownloadButtons.vue'

const { t } = useI18n()

const text = useStorage<string>('tools:barcode:text', '0123456789')
const format = useStorage<string>('tools:barcode:format', 'CODE128')
const barWidth = useStorage<number>('tools:barcode:width', 2)
const barHeight = useStorage<number>('tools:barcode:height', 100)
const margin = useStorage<number>('tools:barcode:margin', 10)
const displayValue = useStorage<boolean>('tools:barcode:displayValue', true)
const textAlign = useStorage<'left' | 'center' | 'right'>('tools:barcode:textAlign', 'center')
const textPosition = useStorage<'top' | 'bottom'>('tools:barcode:textPosition', 'bottom')
const fontSize = useStorage<number>('tools:barcode:fontSize', 20)
const lineColor = useStorage<string>('tools:barcode:lineColor', '#000000')
const background = useStorage<string>('tools:barcode:background', '#ffffff')
</script>

<i18n lang="json">
{
  "en": {
    "options": "Options",
    "preview": "Preview",
    "download": "Download"
  },
  "zh": {
    "options": "选项",
    "preview": "预览",
    "download": "下载"
  },
  "zh-CN": {
    "options": "选项",
    "preview": "预览",
    "download": "下载"
  },
  "zh-TW": {
    "options": "選項",
    "preview": "預覽",
    "download": "下載"
  },
  "zh-HK": {
    "options": "選項",
    "preview": "預覽",
    "download": "下載"
  },
  "es": {
    "options": "Options",
    "preview": "Preview",
    "download": "Download"
  },
  "fr": {
    "options": "Options",
    "preview": "Preview",
    "download": "Download"
  },
  "de": {
    "options": "Options",
    "preview": "Preview",
    "download": "Download"
  },
  "it": {
    "options": "Options",
    "preview": "Preview",
    "download": "Download"
  },
  "ja": {
    "options": "Options",
    "preview": "Preview",
    "download": "Download"
  },
  "ko": {
    "options": "Options",
    "preview": "Preview",
    "download": "Download"
  },
  "ru": {
    "options": "Options",
    "preview": "Preview",
    "download": "Download"
  },
  "pt": {
    "options": "Options",
    "preview": "Preview",
    "download": "Download"
  },
  "ar": {
    "options": "Options",
    "preview": "Preview",
    "download": "Download"
  },
  "hi": {
    "options": "Options",
    "preview": "Preview",
    "download": "Download"
  },
  "tr": {
    "options": "Options",
    "preview": "Preview",
    "download": "Download"
  },
  "nl": {
    "options": "Options",
    "preview": "Preview",
    "download": "Download"
  },
  "sv": {
    "options": "Options",
    "preview": "Preview",
    "download": "Download"
  },
  "pl": {
    "options": "Options",
    "preview": "Preview",
    "download": "Download"
  },
  "vi": {
    "options": "Options",
    "preview": "Preview",
    "download": "Download"
  },
  "th": {
    "options": "Options",
    "preview": "Preview",
    "download": "Download"
  },
  "id": {
    "options": "Options",
    "preview": "Preview",
    "download": "Download"
  },
  "he": {
    "options": "Options",
    "preview": "Preview",
    "download": "Download"
  },
  "ms": {
    "options": "Options",
    "preview": "Preview",
    "download": "Download"
  },
  "no": {
    "options": "Options",
    "preview": "Preview",
    "download": "Download"
  }
}
</i18n>
