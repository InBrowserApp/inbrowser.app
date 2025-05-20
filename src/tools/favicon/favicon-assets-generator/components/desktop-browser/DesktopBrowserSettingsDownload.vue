<template>
  <n-p>
    <FileMinifiedUsingOxipngAndSvgo />
  </n-p>
  <DownloadFileButton filename="favicon.ico" @click="downloadico" />
  <br />
  <template v-if="useOriginalSVG">
    <DownloadFileButton filename="favicon.svg" @click="downloadSVG" />
    <br />
  </template>
  <template v-else>
    <DownloadFileButton filename="favicon-32x32.png" @click="download32png" />
    <br />
    <DownloadFileButton filename="favicon-16x16.png" @click="download16png" />
    <br />
  </template>

  <n-p>
    <n-code language="html" :code="code" :word-wrap="true" :hljs="hljs" />
  </n-p>
</template>

<script setup lang="ts">
import { NCode, NP, useMessage } from 'naive-ui'
import type { DesktopBrowserOptions } from '../../utils/favicon-generator/desktop-browser'
import {
  generateFaviconICO,
  generateFaviconPNG,
  getHTMLCode,
  generateFaviconSVG,
} from '../../utils/favicon-generator/desktop-browser'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import FileMinifiedUsingOxipngAndSvgo from '../common/FileMinifiedUsingOxipngAndSvgo.vue'
import DownloadFileButton from '../common/DownloadFileButton.vue'
import hljs from 'highlight.js/lib/core'
import xml from 'highlight.js/lib/languages/xml'
hljs.registerLanguage('html', xml)

const { t } = useI18n()
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
      throw new Error(t('noImageSelected'))
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
      throw new Error(t('noImageSelected'))
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
      throw new Error(t('noImageSelected'))
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
      throw new Error(t('noImageSelected'))
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

<i18n lang="json">
{
  "en": {
    "noImageSelected": "No image selected"
  },
  "zh": {
    "noImageSelected": "未选择图片"
  },
  "zh-CN": {
    "noImageSelected": "未选择图片"
  },
  "zh-TW": {
    "noImageSelected": "未選擇圖片"
  },
  "zh-HK": {
    "noImageSelected": "未選擇圖片"
  },
  "es": {
    "noImageSelected": "No se ha seleccionado ninguna imagen"
  },
  "fr": {
    "noImageSelected": "Aucune image sélectionnée"
  },
  "de": {
    "noImageSelected": "Kein Bild ausgewählt"
  },
  "it": {
    "noImageSelected": "Nessuna immagine selezionata"
  },
  "ja": {
    "noImageSelected": "画像が選択されていません"
  },
  "ko": {
    "noImageSelected": "이미지가 선택되지 않았습니다"
  },
  "ru": {
    "noImageSelected": "Изображение не выбрано"
  },
  "pt": {
    "noImageSelected": "Nenhuma imagem selecionada"
  },
  "ar": {
    "noImageSelected": "لم يتم اختيار صورة"
  },
  "hi": {
    "noImageSelected": "कोई छवि चयनित नहीं है"
  },
  "tr": {
    "noImageSelected": "Hiçbir görsel seçilmedi"
  },
  "nl": {
    "noImageSelected": "Geen afbeelding geselecteerd"
  },
  "sv": {
    "noImageSelected": "Ingen bild vald"
  },
  "pl": {
    "noImageSelected": "Nie wybrano obrazu"
  },
  "vi": {
    "noImageSelected": "Chưa chọn hình ảnh"
  },
  "th": {
    "noImageSelected": "ไม่ได้เลือกรูปภาพ"
  },
  "id": {
    "noImageSelected": "Tidak ada gambar yang dipilih"
  },
  "he": {
    "noImageSelected": "לא נבחרה תמונה"
  },
  "ms": {
    "noImageSelected": "Tiada imej dipilih"
  },
  "no": {
    "noImageSelected": "Ingen bilde valgt"
  }
}
</i18n>
