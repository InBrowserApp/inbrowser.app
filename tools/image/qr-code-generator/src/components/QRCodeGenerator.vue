<template>
  <div>
    <ToolSectionHeader>{{ t('options') }}</ToolSectionHeader>
    <ToolSection>
      <QROptionsForm
        v-model:text="text"
        v-model:error-correction-level="errorCorrectionLevel"
        v-model:width="width"
        v-model:margin="margin"
        v-model:dark="dark"
        v-model:light="light"
      />
    </ToolSection>

    <ToolSection>
      <n-grid cols="1 s:2" responsive="screen" :x-gap="12" :y-gap="12">
        <n-gi>
          <ToolSectionHeader>{{ t('preview') }}</ToolSectionHeader>
          <QRPreview
            :text="text"
            :error-correction-level="errorCorrectionLevel"
            :width="width"
            :margin="margin"
            :dark="dark"
            :light="light"
          />
        </n-gi>
        <n-gi>
          <ToolSectionHeader>{{ t('download') }}</ToolSectionHeader>
          <QRDownloadButtons
            :text="text"
            :error-correction-level="errorCorrectionLevel"
            :width="width"
            :margin="margin"
            :dark="dark"
            :light="light"
          />
        </n-gi>
      </n-grid>
    </ToolSection>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { ToolSection, ToolSectionHeader } from '@shared/ui/tool'
import { useStorage } from '@vueuse/core'
import QROptionsForm from './QROptionsForm.vue'
import QRPreview from './QRPreview.vue'
import QRDownloadButtons from './QRDownloadButtons.vue'
import { NGrid, NGi } from 'naive-ui'

const { t } = useI18n()

const text = useStorage<string>('tools:qr:text', 'https://inbrowser.app')
const errorCorrectionLevel = useStorage<'L' | 'M' | 'Q' | 'H'>('tools:qr:ecc', 'M')
const width = useStorage<number>('tools:qr:width', 256)
const margin = useStorage<number>('tools:qr:margin', 2)
const dark = useStorage<string>('tools:qr:dark', '#000000ff')
const light = useStorage<string>('tools:qr:light', '#ffffffff')
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
