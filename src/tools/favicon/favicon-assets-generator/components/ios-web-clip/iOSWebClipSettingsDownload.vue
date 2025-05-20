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

const { t } = useI18n()
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
