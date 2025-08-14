<template>
  <n-dropdown trigger="hover" :options="options" @select="handleSelect">
    <n-button text>
      <template #icon>
        <n-icon :component="Icon" />
      </template>
      {{ t('download') }}
    </n-button>
  </n-dropdown>
</template>

<script setup lang="ts">
import { NIcon, NButton, NDropdown } from 'naive-ui'
import { ArrowDownload16Regular as Icon } from '@shared/icons/fluent'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const props = defineProps<{
  uuids: string[]
}>()

const options = [
  {
    label: 'TXT',
    key: 'txt',
  },
  {
    label: 'CSV',
    key: 'csv',
  },
  {
    label: 'TSV',
    key: 'tsv',
  },
  {
    label: 'JSON',
    key: 'json',
  },
  // TODO: add excel
]

const handleSelect = (key: string | number) => {
  if (key === 'txt') {
    downloadTxt()
  } else if (key === 'csv') {
    downloadCsv()
  } else if (key === 'json') {
    downloadJson()
  } else if (key === 'tsv') {
    downloadTsv()
  }
}

function downloadFile(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = filename
  a.click()
  URL.revokeObjectURL(url)
  a.remove()
}

function downloadTxt() {
  const blob = new Blob([props.uuids.join('\n')], { type: 'text/plain' })
  downloadFile(blob, 'uuids.txt')
}

function downloadCsv() {
  const blob = new Blob(['uuid,\n' + props.uuids.join(',\n')], {
    type: 'text/csv',
  })
  downloadFile(blob, 'uuids.csv')
}

function downloadJson() {
  const blob = new Blob([JSON.stringify(props.uuids)], {
    type: 'application/json',
  })
  downloadFile(blob, 'uuids.json')
}

function downloadTsv() {
  const blob = new Blob(['uuid\t\n' + props.uuids.join('\t\n')], {
    type: 'text/tab-separated-values',
  })
  downloadFile(blob, 'uuids.tsv')
}
</script>
<i18n lang="json">
{
  "en": {
    "download": "Download"
  },
  "zh": {
    "download": "下载"
  },
  "zh-CN": {
    "download": "下载"
  },
  "zh-TW": {
    "download": "下载"
  },
  "zh-HK": {
    "download": "下载"
  },
  "es": {
    "download": "Descargar"
  },
  "fr": {
    "download": "Télécharger"
  },
  "de": {
    "download": "Herunterladen"
  },
  "it": {
    "download": "Scarica"
  },
  "ja": {
    "download": "ダウンロード"
  },
  "ko": {
    "download": "다운로드"
  },
  "ru": {
    "download": "Скачать"
  },
  "pt": {
    "download": "Baixar"
  },
  "ar": {
    "download": "تحميل"
  },
  "hi": {
    "download": "डाउनलोड"
  },
  "tr": {
    "download": "İndir"
  },
  "nl": {
    "download": "Downloaden"
  },
  "sv": {
    "download": "Ladda ner"
  },
  "pl": {
    "download": "Pobierz"
  },
  "vi": {
    "download": "Tải xuống"
  },
  "th": {
    "download": "ดาวน์โหลด"
  },
  "id": {
    "download": "Unduh"
  },
  "he": {
    "download": "הורדה"
  },
  "ms": {
    "download": "Muat turun"
  },
  "no": {
    "download": "Last ned"
  }
}
</i18n>
