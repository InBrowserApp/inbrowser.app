<template>
  <n-grid cols="1 s:2 m:3" responsive="screen" :x-gap="12" :y-gap="12">
    <n-form-item-gi :label="t('text')" :show-feedback="false">
      <n-input
        v-model:value="text"
        :autosize="{ minRows: 2, maxRows: 6 }"
        :placeholder="t('text-ph')"
        style="width: 100%"
      />
    </n-form-item-gi>
    <n-form-item-gi :label="t('error-level')" :show-feedback="false">
      <n-select v-model:value="errorCorrectionLevel" :options="errorLevelOptions" />
    </n-form-item-gi>
    <n-form-item-gi :label="t('size')" :show-feedback="false">
      <n-slider v-model:value="width" :min="64" :max="1024" :step="4" />
    </n-form-item-gi>
    <n-form-item-gi :label="t('margin')" :show-feedback="false">
      <n-slider v-model:value="margin" :min="0" :max="16" :step="1" />
    </n-form-item-gi>
    <n-form-item-gi :label="t('dark')" :show-feedback="false">
      <n-color-picker v-model:value="dark" :modes="['hex']" :show-alpha="true" size="small" />
    </n-form-item-gi>
    <n-form-item-gi :label="t('light')" :show-feedback="false">
      <n-color-picker v-model:value="light" :modes="['hex']" :show-alpha="true" size="small" />
    </n-form-item-gi>
  </n-grid>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { NGrid, NFormItemGi, NInput, NSelect, NSlider, NColorPicker } from 'naive-ui'

const text = defineModel<string>('text', { required: true })
const errorCorrectionLevel = defineModel<'L' | 'M' | 'Q' | 'H'>('error-correction-level', {
  required: true,
})
const width = defineModel<number>('width', { required: true })
const margin = defineModel<number>('margin', { required: true })
const dark = defineModel<string>('dark', { required: true })
const light = defineModel<string>('light', { required: true })

const { t } = useI18n()

const errorLevelOptions = computed(() => [
  { label: t('L'), value: 'L' },
  { label: t('M'), value: 'M' },
  { label: t('Q'), value: 'Q' },
  { label: t('H'), value: 'H' },
])
</script>

<i18n lang="json">
{
  "en": {
    "text": "Text",
    "text-ph": "Type text or URL...",
    "error-level": "Error correction level",
    "L": "L (≈7%)",
    "M": "M (≈15%)",
    "Q": "Q (≈25%)",
    "H": "H (≈30%)",
    "size": "Size",
    "margin": "Margin",
    "dark": "Dark color (RGBA hex)",
    "light": "Light color (RGBA hex)"
  },
  "zh": {
    "text": "文本",
    "text-ph": "输入文本或链接...",
    "error-level": "纠错级别",
    "L": "L (≈7%)",
    "M": "M (≈15%)",
    "Q": "Q (≈25%)",
    "H": "H (≈30%)",
    "size": "尺寸",
    "margin": "边距",
    "dark": "深色（RGBA 十六进制）",
    "light": "浅色（RGBA 十六进制）"
  },
  "zh-CN": {
    "text": "文本",
    "text-ph": "输入文本或链接...",
    "error-level": "纠错级别",
    "L": "L (≈7%)",
    "M": "M (≈15%)",
    "Q": "Q (≈25%)",
    "H": "H (≈30%)",
    "size": "尺寸",
    "margin": "边距",
    "dark": "深色（RGBA 十六进制）",
    "light": "浅色（RGBA 十六进制）"
  },
  "zh-TW": {
    "text": "文字",
    "text-ph": "輸入文字或連結...",
    "error-level": "糾錯等級",
    "L": "L (≈7%)",
    "M": "M (≈15%)",
    "Q": "Q (≈25%)",
    "H": "H (≈30%)",
    "size": "尺寸",
    "margin": "邊距",
    "dark": "深色（RGBA 十六進位）",
    "light": "淺色（RGBA 十六進位）"
  },
  "zh-HK": {
    "text": "文字",
    "text-ph": "輸入文字或連結...",
    "error-level": "糾錯等級",
    "L": "L (≈7%)",
    "M": "M (≈15%)",
    "Q": "Q (≈25%)",
    "H": "H (≈30%)",
    "size": "尺寸",
    "margin": "邊距",
    "dark": "深色（RGBA 十六進位）",
    "light": "淺色（RGBA 十六進位）"
  },
  "es": {
    "text": "Texto",
    "text-ph": "Escribe texto o URL...",
    "error-level": "Nivel de corrección",
    "L": "L (≈7%)",
    "M": "M (≈15%)",
    "Q": "Q (≈25%)",
    "H": "H (≈30%)",
    "size": "Tamaño",
    "margin": "Margen",
    "dark": "Color oscuro (hex RGBA)",
    "light": "Color claro (hex RGBA)"
  },
  "fr": {
    "text": "Texte",
    "text-ph": "Saisir du texte ou une URL...",
    "error-level": "Niveau de correction",
    "L": "L (≈7%)",
    "M": "M (≈15%)",
    "Q": "Q (≈25%)",
    "H": "H (≈30%)",
    "size": "Taille",
    "margin": "Marge",
    "dark": "Couleur foncée (hex RGBA)",
    "light": "Couleur claire (hex RGBA)"
  },
  "de": {
    "text": "Text",
    "text-ph": "Text oder URL eingeben...",
    "error-level": "Fehlerkorrektur",
    "L": "L (≈7%)",
    "M": "M (≈15%)",
    "Q": "Q (≈25%)",
    "H": "H (≈30%)",
    "size": "Größe",
    "margin": "Rand",
    "dark": "Dunkle Farbe (RGBA‑Hex)",
    "light": "Helle Farbe (RGBA‑Hex)"
  },
  "it": {
    "text": "Testo",
    "text-ph": "Scrivi testo o URL...",
    "error-level": "Livello di correzione",
    "L": "L (≈7%)",
    "M": "M (≈15%)",
    "Q": "Q (≈25%)",
    "H": "H (≈30%)",
    "size": "Dimensione",
    "margin": "Margine",
    "dark": "Colore scuro (esadec. RGBA)",
    "light": "Colore chiaro (esadec. RGBA)"
  },
  "ja": {
    "text": "テキスト",
    "text-ph": "テキストまたはURLを入力...",
    "error-level": "誤り訂正レベル",
    "L": "L (≈7%)",
    "M": "M (≈15%)",
    "Q": "Q (≈25%)",
    "H": "H (≈30%)",
    "size": "サイズ",
    "margin": "マージン",
    "dark": "濃色（RGBA 16進）",
    "light": "淡色（RGBA 16進）"
  },
  "ko": {
    "text": "텍스트",
    "text-ph": "텍스트 또는 URL 입력...",
    "error-level": "오류 수정 레벨",
    "L": "L (≈7%)",
    "M": "M (≈15%)",
    "Q": "Q (≈25%)",
    "H": "H (≈30%)",
    "size": "크기",
    "margin": "여백",
    "dark": "어두운 색 (RGBA hex)",
    "light": "밝은 색 (RGBA hex)"
  },
  "ru": {
    "text": "Текст",
    "text-ph": "Введите текст или URL...",
    "error-level": "Уровень коррекции",
    "L": "L (≈7%)",
    "M": "M (≈15%)",
    "Q": "Q (≈25%)",
    "H": "H (≈30%)",
    "size": "Размер",
    "margin": "Отступ",
    "dark": "Тёмный цвет (RGBA hex)",
    "light": "Светлый цвет (RGBA hex)"
  },
  "pt": {
    "text": "Texto",
    "text-ph": "Digite texto ou URL...",
    "error-level": "Nível de correção",
    "L": "L (≈7%)",
    "M": "M (≈15%)",
    "Q": "Q (≈25%)",
    "H": "H (≈30%)",
    "size": "Tamanho",
    "margin": "Margem",
    "dark": "Cor escura (hex RGBA)",
    "light": "Cor clara (hex RGBA)"
  },
  "ar": {
    "text": "نص",
    "text-ph": "اكتب نصًا أو رابطًا...",
    "error-level": "مستوى تصحيح الخطأ",
    "L": "L (≈7%)",
    "M": "M (≈15%)",
    "Q": "Q (≈25%)",
    "H": "H (≈30%)",
    "size": "الحجم",
    "margin": "الهامش",
    "dark": "لون داكن (RGBA hex)",
    "light": "لون فاتح (RGBA hex)"
  },
  "hi": {
    "text": "टेक्स्ट",
    "text-ph": "टेक्स्ट या URL लिखें...",
    "error-level": "त्रुटि सुधार स्तर",
    "L": "L (≈7%)",
    "M": "M (≈15%)",
    "Q": "Q (≈25%)",
    "H": "H (≈30%)",
    "size": "आकार",
    "margin": "मार्जिन",
    "dark": "गहरा रंग (RGBA hex)",
    "light": "हल्का रंग (RGBA hex)"
  },
  "tr": {
    "text": "Metin",
    "text-ph": "Metin veya URL yazın...",
    "error-level": "Hata düzeltme seviyesi",
    "L": "L (≈7%)",
    "M": "M (≈15%)",
    "Q": "Q (≈25%)",
    "H": "H (≈30%)",
    "size": "Boyut",
    "margin": "Kenar boşluğu",
    "dark": "Koyu renk (RGBA hex)",
    "light": "Açık renk (RGBA hex)"
  },
  "nl": {
    "text": "Tekst",
    "text-ph": "Typ tekst of URL...",
    "error-level": "Foutcorrectieniveau",
    "L": "L (≈7%)",
    "M": "M (≈15%)",
    "Q": "Q (≈25%)",
    "H": "H (≈30%)",
    "size": "Grootte",
    "margin": "Marge",
    "dark": "Donkere kleur (RGBA hex)",
    "light": "Lichte kleur (RGBA hex)"
  },
  "sv": {
    "text": "Text",
    "text-ph": "Skriv text eller URL...",
    "error-level": "Felkorrigeringsnivå",
    "L": "L (≈7%)",
    "M": "M (≈15%)",
    "Q": "Q (≈25%)",
    "H": "H (≈30%)",
    "size": "Storlek",
    "margin": "Marginal",
    "dark": "Mörk färg (RGBA hex)",
    "light": "Ljus färg (RGBA hex)"
  },
  "pl": {
    "text": "Tekst",
    "text-ph": "Wpisz tekst lub URL...",
    "error-level": "Poziom korekcji",
    "L": "L (≈7%)",
    "M": "M (≈15%)",
    "Q": "Q (≈25%)",
    "H": "H (≈30%)",
    "size": "Rozmiar",
    "margin": "Margines",
    "dark": "Ciemny kolor (RGBA hex)",
    "light": "Jasny kolor (RGBA hex)"
  },
  "vi": {
    "text": "Văn bản",
    "text-ph": "Nhập văn bản hoặc URL...",
    "error-level": "Mức sửa lỗi",
    "L": "L (≈7%)",
    "M": "M (≈15%)",
    "Q": "Q (≈25%)",
    "H": "H (≈30%)",
    "size": "Kích thước",
    "margin": "Lề",
    "dark": "Màu đậm (RGBA hex)",
    "light": "Màu nhạt (RGBA hex)"
  },
  "th": {
    "text": "ข้อความ",
    "text-ph": "พิมพ์ข้อความหรือ URL...",
    "error-level": "ระดับการแก้ไขข้อผิดพลาด",
    "L": "L (≈7%)",
    "M": "M (≈15%)",
    "Q": "Q (≈25%)",
    "H": "H (≈30%)",
    "size": "ขนาด",
    "margin": "ระยะขอบ",
    "dark": "สีเข้ม (RGBA hex)",
    "light": "สีอ่อน (RGBA hex)"
  },
  "id": {
    "text": "Teks",
    "text-ph": "Ketik teks atau URL...",
    "error-level": "Tingkat koreksi",
    "L": "L (≈7%)",
    "M": "M (≈15%)",
    "Q": "Q (≈25%)",
    "H": "H (≈30%)",
    "size": "Ukuran",
    "margin": "Margin",
    "dark": "Warna gelap (RGBA hex)",
    "light": "Warna terang (RGBA hex)"
  },
  "he": {
    "text": "טקסט",
    "text-ph": "הקלד טקסט או כתובת...",
    "error-level": "רמת תיקון",
    "L": "L (≈7%)",
    "M": "M (≈15%)",
    "Q": "Q (≈25%)",
    "H": "H (≈30%)",
    "size": "גודל",
    "margin": "שוליים",
    "dark": "צבע כהה (RGBA hex)",
    "light": "צבע בהיר (RGBA hex)"
  },
  "ms": {
    "text": "Teks",
    "text-ph": "Taip teks atau URL...",
    "error-level": "Tahap pembetulan",
    "L": "L (≈7%)",
    "M": "M (≈15%)",
    "Q": "Q (≈25%)",
    "H": "H (≈30%)",
    "size": "Saiz",
    "margin": "Jidar",
    "dark": "Warna gelap (RGBA hex)",
    "light": "Warna cerah (RGBA hex)"
  },
  "no": {
    "text": "Tekst",
    "text-ph": "Skriv tekst eller URL...",
    "error-level": "Feilrettingsnivå",
    "L": "L (≈7%)",
    "M": "M (≈15%)",
    "Q": "Q (≈25%)",
    "H": "H (≈30%)",
    "size": "Størrelse",
    "margin": "Marg",
    "dark": "Mørk farge (RGBA hex)",
    "light": "Lys farge (RGBA hex)"
  }
}
</i18n>
