<template>
  <n-grid cols="2 l:4" responsive="screen" :x-gap="40" :y-gap="20">
    <n-gi span="2 l:3">
      <ToolSectionHeader>{{ t('content') }}</ToolSectionHeader>
      <ToolSection>
        <QRContentForm v-model="text" />
      </ToolSection>

      <ToolSectionHeader>{{ t('options') }}</ToolSectionHeader>
      <ToolSection>
        <QROptionsForm
          v-model:error-correction-level="errorCorrectionLevel"
          v-model:width="width"
          v-model:margin="margin"
          v-model:dark="dark"
          v-model:light="light"
        />
      </ToolSection>
    </n-gi>

    <n-gi span="2 l:1">
      <ToolSectionHeader>{{ t('preview') }}</ToolSectionHeader>
      <QRPreview
        :text="text"
        :error-correction-level="errorCorrectionLevel"
        :width="width"
        :margin="margin"
        :dark="dark"
        :light="light"
      />

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
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { ToolSection, ToolSectionHeader } from '@shared/ui/tool'
import { useStorage } from '@vueuse/core'
import QROptionsForm from './QROptionsForm.vue'
import QRContentForm from './QRContentForm.vue'
import QRPreview from './QRPreview.vue'
import QRDownloadButtons from './QRDownloadButtons.vue'
import { NGrid, NGi } from 'naive-ui'
import { ref } from 'vue'

const { t } = useI18n()

const text = ref<string>('https://inbrowser.app')
const errorCorrectionLevel = useStorage<'L' | 'M' | 'Q' | 'H'>('tools:qr:ecc', 'M')
const width = useStorage<number>('tools:qr:width', 256)
const margin = useStorage<number>('tools:qr:margin', 2)
const dark = useStorage<string>('tools:qr:dark', '#000000FF')
const light = useStorage<string>('tools:qr:light', '#FFFFFFFF')
</script>

<i18n lang="json">
{
  "en": {
    "content": "Content",
    "options": "Options",
    "preview": "Preview",
    "download": "Download"
  },
  "zh": {
    "content": "内容",
    "options": "选项",
    "preview": "预览",
    "download": "下载"
  },
  "zh-CN": {
    "content": "内容",
    "options": "选项",
    "preview": "预览",
    "download": "下载"
  },
  "zh-TW": {
    "content": "內容",
    "options": "選項",
    "preview": "預覽",
    "download": "下載"
  },
  "zh-HK": {
    "content": "內容",
    "options": "選項",
    "preview": "預覽",
    "download": "下載"
  },
  "es": {
    "content": "Contenido",
    "options": "Opciones",
    "preview": "Vista previa",
    "download": "Descargar"
  },
  "fr": {
    "content": "Contenu",
    "options": "Options",
    "preview": "Aperçu",
    "download": "Télécharger"
  },
  "de": {
    "content": "Inhalt",
    "options": "Optionen",
    "preview": "Vorschau",
    "download": "Herunterladen"
  },
  "it": {
    "content": "Contenuto",
    "options": "Opzioni",
    "preview": "Anteprima",
    "download": "Scarica"
  },
  "ja": {
    "content": "コンテンツ",
    "options": "オプション",
    "preview": "プレビュー",
    "download": "ダウンロード"
  },
  "ko": {
    "content": "콘텐츠",
    "options": "옵션",
    "preview": "미리보기",
    "download": "다운로드"
  },
  "ru": {
    "content": "Содержимое",
    "options": "Параметры",
    "preview": "Предпросмотр",
    "download": "Скачать"
  },
  "pt": {
    "content": "Conteúdo",
    "options": "Opções",
    "preview": "Prévia",
    "download": "Baixar"
  },
  "ar": {
    "content": "المحتوى",
    "options": "الخيارات",
    "preview": "المعاينة",
    "download": "تنزيل"
  },
  "hi": {
    "content": "सामग्री",
    "options": "विकल्प",
    "preview": "पूर्वावलोकन",
    "download": "डाउनलोड"
  },
  "tr": {
    "content": "İçerik",
    "options": "Seçenekler",
    "preview": "Önizleme",
    "download": "İndir"
  },
  "nl": {
    "content": "Inhoud",
    "options": "Opties",
    "preview": "Voorbeeld",
    "download": "Downloaden"
  },
  "sv": {
    "content": "Innehåll",
    "options": "Alternativ",
    "preview": "Förhandsvisning",
    "download": "Ladda ner"
  },
  "pl": {
    "content": "Zawartość",
    "options": "Opcje",
    "preview": "Podgląd",
    "download": "Pobierz"
  },
  "vi": {
    "content": "Nội dung",
    "options": "Tùy chọn",
    "preview": "Xem trước",
    "download": "Tải xuống"
  },
  "th": {
    "content": "เนื้อหา",
    "options": "ตัวเลือก",
    "preview": "ตัวอย่าง",
    "download": "ดาวน์โหลด"
  },
  "id": {
    "content": "Konten",
    "options": "Opsi",
    "preview": "Pratinjau",
    "download": "Unduh"
  },
  "he": {
    "content": "תוכן",
    "options": "אפשרויות",
    "preview": "תצוגה מקדימה",
    "download": "הורדה"
  },
  "ms": {
    "content": "Kandungan",
    "options": "Pilihan",
    "preview": "Pratonton",
    "download": "Muat turun"
  },
  "no": {
    "content": "Innhold",
    "options": "Alternativer",
    "preview": "Forhåndsvisning",
    "download": "Last ned"
  }
}
</i18n>
