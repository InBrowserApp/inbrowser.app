<template>
  {{ t('decode-error') }}
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<i18n lang="json">
{
  "en": {
    "decode-error": "Not a valid UUID"
  },
  "zh": {
    "decode-error": "不是有效的 UUID"
  },
  "zh-CN": {
    "decode-error": "不是有效的 UUID"
  },
  "zh-TW": {
    "decode-error": "不是有效的 UUID"
  },
  "zh-HK": {
    "decode-error": "不是有效的 UUID"
  },
  "es": {
    "decode-error": "No es un UUID válido"
  },
  "fr": {
    "decode-error": "Ce n'est pas un UUID valide"
  },
  "de": {
    "decode-error": "Keine gültige UUID"
  },
  "it": {
    "decode-error": "Non è un UUID valido"
  },
  "ja": {
    "decode-error": "有効な UUID ではありません"
  },
  "ko": {
    "decode-error": "유효하지 않은 UUID"
  },
  "ru": {
    "decode-error": "Недопустимый UUID"
  },
  "pt": {
    "decode-error": "Não é um UUID válido"
  },
  "ar": {
    "decode-error": "ليس UUID صالحًا"
  },
  "hi": {
    "decode-error": "मान्य UUID नहीं है"
  },
  "tr": {
    "decode-error": "Geçerli bir UUID değil"
  },
  "nl": {
    "decode-error": "Geen geldige UUID"
  },
  "sv": {
    "decode-error": "Inte ett giltigt UUID"
  },
  "pl": {
    "decode-error": "Nieprawidłowy UUID"
  },
  "vi": {
    "decode-error": "Không phải UUID hợp lệ"
  },
  "th": {
    "decode-error": "ไม่ใช่ UUID ที่ถูกต้อง"
  },
  "id": {
    "decode-error": "Bukan UUID yang valid"
  },
  "he": {
    "decode-error": "UUID לא תקין"
  },
  "ms": {
    "decode-error": "Bukan UUID yang sah"
  },
  "no": {
    "decode-error": "Ikke et gyldig UUID"
  }
}
</i18n>
