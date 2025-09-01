<template>
  <n-form-item :label="t('text')" :show-feedback="false">
    <n-input
      v-model:value="model"
      :autosize="{ minRows: 1, maxRows: 8 }"
      type="textarea"
      :placeholder="t('text-ph')"
    />
  </n-form-item>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { NFormItem, NInput } from 'naive-ui'

const model = defineModel<string>({ required: true })
const { t } = useI18n()
</script>

<i18n lang="json">
{
  "en": {
    "text": "Text / URL",
    "text-ph": "Type text or URL..."
  },
  "zh": { "text": "文本 / 链接", "text-ph": "输入文本或链接..." },
  "zh-CN": { "text": "文本 / 链接", "text-ph": "输入文本或链接..." },
  "zh-TW": { "text": "文字 / 連結", "text-ph": "輸入文字或連結..." },
  "zh-HK": { "text": "文字 / 連結", "text-ph": "輸入文字或連結..." },
  "es": { "text": "Texto / URL", "text-ph": "Escribe texto o URL..." },
  "fr": { "text": "Texte / URL", "text-ph": "Saisir du texte ou une URL..." },
  "de": { "text": "Text / URL", "text-ph": "Text oder URL eingeben..." },
  "it": { "text": "Testo / URL", "text-ph": "Scrivi testo o URL..." },
  "ja": { "text": "テキスト / URL", "text-ph": "テキストまたはURLを入力..." },
  "ko": { "text": "텍스트 / URL", "text-ph": "텍스트 또는 URL 입력..." },
  "ru": { "text": "Текст / URL", "text-ph": "Введите текст или URL..." },
  "pt": { "text": "Texto / URL", "text-ph": "Digite texto ou URL..." },
  "ar": { "text": "نص / رابط", "text-ph": "اكتب نصًا أو رابطًا..." },
  "hi": { "text": "टेक्स्ट / URL", "text-ph": "टेक्स्ट या URL लिखें..." },
  "tr": { "text": "Metin / URL", "text-ph": "Metin veya URL yazın..." },
  "nl": { "text": "Tekst / URL", "text-ph": "Typ tekst of URL..." },
  "sv": { "text": "Text / URL", "text-ph": "Skriv text eller URL..." },
  "pl": { "text": "Tekst / URL", "text-ph": "Wpisz tekst lub URL..." },
  "vi": { "text": "Văn bản / URL", "text-ph": "Nhập văn bản hoặc URL..." },
  "th": { "text": "ข้อความ / URL", "text-ph": "พิมพ์ข้อความหรือ URL..." },
  "id": { "text": "Teks / URL", "text-ph": "Ketik teks atau URL..." },
  "he": { "text": "טקסט / כתובת", "text-ph": "הקלד טקסט או כתובת..." },
  "ms": { "text": "Teks / URL", "text-ph": "Taip teks atau URL..." },
  "no": { "text": "Tekst / URL", "text-ph": "Skriv tekst eller URL..." }
}
</i18n>
