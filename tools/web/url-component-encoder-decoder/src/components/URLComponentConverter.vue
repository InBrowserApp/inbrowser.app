<template>
  <div>
    <ToolSectionHeader>{{ t('plain-text') }}</ToolSectionHeader>
    <ToolSection>
      <n-input
        v-model:value="plainText"
        type="textarea"
        :placeholder="t('plain-text-placeholder')"
        :autosize="{ minRows: 4, maxRows: 12 }"
      />
    </ToolSection>
    <ToolSection>
      <CopyToClipboardButton :content="plainText" />
    </ToolSection>

    <ToolSectionHeader>{{ t('url-encoded-text') }}</ToolSectionHeader>
    <ToolSection>
      <n-input
        v-model:value="encodedText"
        type="textarea"
        :placeholder="t('encoded-text-placeholder')"
        :autosize="{ minRows: 4, maxRows: 12 }"
        :status="encodedTextStatus"
      />
    </ToolSection>
    <ToolSection>
      <n-flex justify="space-between">
        <CopyToClipboardButton :content="encodedText" />
        <template v-if="encodedTextStatus === 'error'">
          <n-text type="error">
            {{ t('invalid-url-encoded-text') }}
          </n-text>
        </template>
      </n-flex>
    </ToolSection>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
import { NInput, NFlex, NText } from 'naive-ui'
import { ToolSectionHeader, ToolSection } from '@shared/ui/tool'
import { useI18n } from 'vue-i18n'
import { CopyToClipboardButton } from '@shared/ui/base'
import { computed } from 'vue'
import { useStorage } from '@vueuse/core'

const { t } = useI18n()

const plainText = useStorage<string>(
  'tools:url-component-encoder-decoder:plain-text',
  'Hello World!',
)
const encodedText = ref<string>(encodeURIComponent(plainText.value))

const encodedTextStatus = computed(() => {
  try {
    decodeURIComponent(encodedText.value)
    return 'success'
  } catch {
    return 'error'
  }
})

watch(plainText, (newValue) => {
  encodedText.value = encodeURIComponent(newValue)
})

watch(encodedText, (newValue) => {
  try {
    plainText.value = decodeURIComponent(newValue)
  } catch {
    console.error('Invalid URL encoded text')
  }
})
</script>

<i18n lang="json">
{
  "en": {
    "plain-text": "Plain Text",
    "plain-text-placeholder": "Enter text to encode...",
    "url-encoded-text": "URL Encoded Text",
    "encoded-text-placeholder": "Enter URL encoded text to decode...",
    "invalid-url-encoded-text": "Invalid URL encoded text"
  },
  "zh": {
    "plain-text": "纯文本",
    "plain-text-placeholder": "输入要编码的文本...",
    "url-encoded-text": "URL 编码文本",
    "encoded-text-placeholder": "输入要解码的 URL 编码文本...",
    "invalid-url-encoded-text": "无效的 URL 编码文本"
  },
  "zh-CN": {
    "plain-text": "纯文本",
    "plain-text-placeholder": "输入要编码的文本...",
    "url-encoded-text": "URL 编码文本",
    "encoded-text-placeholder": "输入要解码的 URL 编码文本...",
    "invalid-url-encoded-text": "无效的 URL 编码文本"
  },
  "zh-TW": {
    "plain-text": "純文字",
    "plain-text-placeholder": "輸入要編碼的文字...",
    "url-encoded-text": "URL 編碼文字",
    "encoded-text-placeholder": "輸入要解碼的 URL 編碼文字...",
    "invalid-url-encoded-text": "無效的 URL 編碼文字"
  },
  "zh-HK": {
    "plain-text": "純文字",
    "plain-text-placeholder": "輸入要編碼的文字...",
    "url-encoded-text": "URL 編碼文字",
    "encoded-text-placeholder": "輸入要解碼的 URL 編碼文字...",
    "invalid-url-encoded-text": "無效的 URL 編碼文字"
  },
  "es": {
    "plain-text": "Texto Plano",
    "plain-text-placeholder": "Introduce texto para codificar...",
    "url-encoded-text": "Texto Codificado URL",
    "encoded-text-placeholder": "Introduce texto codificado URL para decodificar...",
    "invalid-url-encoded-text": "Texto codificado URL inválido"
  },
  "fr": {
    "plain-text": "Texte Brut",
    "plain-text-placeholder": "Entrez le texte à encoder...",
    "url-encoded-text": "Texte Encodé URL",
    "encoded-text-placeholder": "Entrez le texte encodé URL à décoder...",
    "invalid-url-encoded-text": "Texte encodé URL invalide"
  },
  "de": {
    "plain-text": "Klartext",
    "plain-text-placeholder": "Text zum Kodieren eingeben...",
    "url-encoded-text": "URL-kodierter Text",
    "encoded-text-placeholder": "URL-kodierten Text zum Dekodieren eingeben...",
    "invalid-url-encoded-text": "Ungültiger URL-kodierter Text"
  },
  "it": {
    "plain-text": "Testo Semplice",
    "plain-text-placeholder": "Inserisci testo da codificare...",
    "url-encoded-text": "Testo Codificato URL",
    "encoded-text-placeholder": "Inserisci testo codificato URL da decodificare...",
    "invalid-url-encoded-text": "Testo codificato URL non valido"
  },
  "ja": {
    "plain-text": "プレーンテキスト",
    "plain-text-placeholder": "エンコードするテキストを入力...",
    "url-encoded-text": "URLエンコードテキスト",
    "encoded-text-placeholder": "デコードするURLエンコードテキストを入力...",
    "invalid-url-encoded-text": "無効なURLエンコードテキスト"
  },
  "ko": {
    "plain-text": "일반 텍스트",
    "plain-text-placeholder": "인코딩할 텍스트 입력...",
    "url-encoded-text": "URL 인코딩 텍스트",
    "encoded-text-placeholder": "디코딩할 URL 인코딩 텍스트 입력...",
    "invalid-url-encoded-text": "유효하지 않은 URL 인코딩 텍스트"
  },
  "ru": {
    "plain-text": "Обычный текст",
    "plain-text-placeholder": "Введите текст для кодирования...",
    "url-encoded-text": "URL-кодированный текст",
    "encoded-text-placeholder": "Введите URL-кодированный текст для декодирования...",
    "invalid-url-encoded-text": "Неверный URL-кодированный текст"
  },
  "pt": {
    "plain-text": "Texto Simples",
    "plain-text-placeholder": "Digite texto para codificar...",
    "url-encoded-text": "Texto Codificado URL",
    "encoded-text-placeholder": "Digite texto codificado URL para decodificar...",
    "invalid-url-encoded-text": "Texto codificado URL inválido"
  },
  "ar": {
    "plain-text": "نص عادي",
    "plain-text-placeholder": "أدخل النص للترميز...",
    "url-encoded-text": "نص مُرمز URL",
    "encoded-text-placeholder": "أدخل النص المُرمز URL لفك التشفير...",
    "invalid-url-encoded-text": "نص مُرمز URL غير صالح"
  },
  "hi": {
    "plain-text": "सादा पाठ",
    "plain-text-placeholder": "एन्कोड करने के लिए पाठ दर्ज करें...",
    "url-encoded-text": "URL एन्कोडेड पाठ",
    "encoded-text-placeholder": "डिकोड करने के लिए URL एन्कोडेड पाठ दर्ज करें...",
    "invalid-url-encoded-text": "अमान्य URL एन्कोडेड पाठ"
  },
  "tr": {
    "plain-text": "Düz Metin",
    "plain-text-placeholder": "Kodlanacak metni girin...",
    "url-encoded-text": "URL Kodlanmış Metin",
    "encoded-text-placeholder": "Kod çözülecek URL kodlanmış metni girin...",
    "invalid-url-encoded-text": "Geçersiz URL kodlanmış metin"
  },
  "nl": {
    "plain-text": "Platte Tekst",
    "plain-text-placeholder": "Voer tekst in om te coderen...",
    "url-encoded-text": "URL Gecodeerde Tekst",
    "encoded-text-placeholder": "Voer URL gecodeerde tekst in om te decoderen...",
    "invalid-url-encoded-text": "Ongeldige URL gecodeerde tekst"
  },
  "sv": {
    "plain-text": "Vanlig Text",
    "plain-text-placeholder": "Ange text att koda...",
    "url-encoded-text": "URL-kodad Text",
    "encoded-text-placeholder": "Ange URL-kodad text att avkoda...",
    "invalid-url-encoded-text": "Ogiltig URL-kodad text"
  },
  "pl": {
    "plain-text": "Zwykły Tekst",
    "plain-text-placeholder": "Wprowadź tekst do kodowania...",
    "url-encoded-text": "Tekst Zakodowany URL",
    "encoded-text-placeholder": "Wprowadź tekst zakodowany URL do dekodowania...",
    "invalid-url-encoded-text": "Nieprawidłowy tekst zakodowany URL"
  },
  "vi": {
    "plain-text": "Văn Bản Thô",
    "plain-text-placeholder": "Nhập văn bản để mã hóa...",
    "url-encoded-text": "Văn Bản Mã Hóa URL",
    "encoded-text-placeholder": "Nhập văn bản mã hóa URL để giải mã...",
    "invalid-url-encoded-text": "Văn bản mã hóa URL không hợp lệ"
  },
  "th": {
    "plain-text": "ข้อความธรรมดา",
    "plain-text-placeholder": "ป้อนข้อความเพื่อเข้ารหัส...",
    "url-encoded-text": "ข้อความเข้ารหัส URL",
    "encoded-text-placeholder": "ป้อนข้อความเข้ารหัส URL เพื่อถอดรหัส...",
    "invalid-url-encoded-text": "ข้อความเข้ารหัส URL ไม่ถูกต้อง"
  },
  "id": {
    "plain-text": "Teks Biasa",
    "plain-text-placeholder": "Masukkan teks untuk dikodekan...",
    "url-encoded-text": "Teks Terkode URL",
    "encoded-text-placeholder": "Masukkan teks terkode URL untuk didekodekan...",
    "invalid-url-encoded-text": "Teks terkode URL tidak valid"
  },
  "he": {
    "plain-text": "טקסט רגיל",
    "plain-text-placeholder": "הזן טקסט לקידוד...",
    "url-encoded-text": "טקסט מקודד URL",
    "encoded-text-placeholder": "הזן טקסט מקודד URL לפענוח...",
    "invalid-url-encoded-text": "טקסט מקודד URL לא תקין"
  },
  "ms": {
    "plain-text": "Teks Biasa",
    "plain-text-placeholder": "Masukkan teks untuk dikod...",
    "url-encoded-text": "Teks Berkod URL",
    "encoded-text-placeholder": "Masukkan teks berkod URL untuk dinyahkod...",
    "invalid-url-encoded-text": "Teks berkod URL tidak sah"
  },
  "no": {
    "plain-text": "Vanlig Tekst",
    "plain-text-placeholder": "Skriv inn tekst for koding...",
    "url-encoded-text": "URL-kodet Tekst",
    "encoded-text-placeholder": "Skriv inn URL-kodet tekst for dekoding...",
    "invalid-url-encoded-text": "Ugyldig URL-kodet tekst"
  }
}
</i18n>
