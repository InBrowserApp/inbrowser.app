<template>
  <n-text>{{ t(base) }}</n-text>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { NText } from 'naive-ui'

const { t } = useI18n()

defineProps<{
  base: 'decimal' | 'octal' | 'binary' | 'base64' | 'hex'
}>()
</script>

<i18n lang="json">
{
  "en": {
    "base64": "Base64",
    "decimal": "Decimal",
    "octal": "Octal",
    "binary": "Binary",
    "hex": "Hexadecimal"
  },
  "zh": {
    "decimal": "十进制",
    "octal": "八进制",
    "binary": "二进制",
    "hex": "十六进制"
  },
  "zh-CN": {
    "decimal": "十进制",
    "octal": "八进制",
    "binary": "二进制",
    "hex": "十六进制"
  },
  "zh-TW": {
    "decimal": "十進制",
    "octal": "八進制",
    "binary": "二進制",
    "hex": "十六進制"
  },
  "zh-HK": {
    "decimal": "十進制",
    "octal": "八進制",
    "binary": "二進制",
    "hex": "十六進制"
  },
  "es": {
    "decimal": "Decimal",
    "octal": "Octal",
    "binary": "Binario",
    "hex": "Hexadecimal"
  },
  "fr": {
    "decimal": "Décimal",
    "octal": "Octal",
    "binary": "Binaire",
    "hex": "Hexadécimal"
  },
  "de": {
    "decimal": "Dezimal",
    "octal": "Oktal",
    "binary": "Binär",
    "hex": "Hexadezimal"
  },
  "it": {
    "decimal": "Decimale",
    "octal": "Ottale",
    "binary": "Binario",
    "hex": "Esadecimale"
  },
  "ja": {
    "decimal": "10進数",
    "octal": "8進数",
    "binary": "2進数",
    "hex": "16進数"
  },
  "ko": {
    "decimal": "10진수",
    "octal": "8진수",
    "binary": "2진수",
    "hex": "16진수"
  },
  "ru": {
    "decimal": "Десятичное",
    "octal": "Восьмеричное",
    "binary": "Двоичное",
    "hex": "Шестнадцатеричное"
  },
  "pt": {
    "decimal": "Decimal",
    "octal": "Octal",
    "binary": "Binário",
    "hex": "Hexadecimal"
  },
  "ar": {
    "decimal": "عشري",
    "octal": "ثماني",
    "binary": "ثنائي",
    "hex": "سداسي عشري"
  },
  "hi": {
    "decimal": "दशमलव",
    "octal": "अष्टाधारी",
    "binary": "द्विआधारी",
    "hex": "हेक्साडेसिमल"
  },
  "tr": {
    "decimal": "Ondalık",
    "octal": "Sekizli",
    "binary": "İkili",
    "hex": "Onaltılı"
  },
  "nl": {
    "decimal": "Decimaal",
    "octal": "Octaal",
    "binary": "Binair",
    "hex": "Hexadecimaal"
  },
  "sv": {
    "decimal": "Decimal",
    "octal": "Oktal",
    "binary": "Binär",
    "hex": "Hexadecimal"
  },
  "pl": {
    "decimal": "Dziesiętny",
    "octal": "Ósemkowy",
    "binary": "Binarny",
    "hex": "Szesnastkowy"
  },
  "vi": {
    "decimal": "Thập phân",
    "octal": "Bát phân",
    "binary": "Nhị phân",
    "hex": "Thập lục phân"
  },
  "th": {
    "decimal": "ฐานสิบ",
    "octal": "ฐานแปด",
    "binary": "ฐานสอง",
    "hex": "ฐานสิบหก"
  },
  "id": {
    "decimal": "Desimal",
    "octal": "Oktal",
    "binary": "Biner",
    "hex": "Heksadesimal"
  },
  "he": {
    "decimal": "עשרוני",
    "octal": "אוקטלי",
    "binary": "בינארי",
    "hex": "הקסדצימלי"
  },
  "ms": {
    "decimal": "Perpuluhan",
    "octal": "Perlapanan",
    "binary": "Perduaan",
    "hex": "Perenambelasan"
  },
  "no": {
    "decimal": "Desimal",
    "octal": "Oktal",
    "binary": "Binær",
    "hex": "Heksadesimal"
  }
}
</i18n>
