<template>
  <n-h2 prefix="bar" align-text>{{ t('result') }}</n-h2>
  <n-p>
    <DecodeResult :uuid="uuid" />
  </n-p>
</template>

<script setup lang="ts">
import { NH2, NP } from 'naive-ui'
import { useI18n } from 'vue-i18n'
import DecodeResult from './decode/DecodeResult.vue'
import type { UUID } from '@/utils/base/uuid'

const { t } = useI18n()

defineProps<{
  uuid: UUID
}>()
</script>

<i18n lang="json">
{
  "en": {
    "result": "Result"
  },
  "zh": {
    "result": "结果"
  },
  "zh-CN": {
    "result": "结果"
  },
  "zh-TW": {
    "result": "结果"
  },
  "zh-HK": {
    "result": "结果"
  },
  "es": {
    "result": "Resultado"
  },
  "fr": {
    "result": "Résultat"
  },
  "de": {
    "result": "Ergebnis"
  },
  "it": {
    "result": "Risultato"
  },
  "ja": {
    "result": "結果"
  },
  "ko": {
    "result": "결과"
  },
  "ru": {
    "result": "Результат"
  },
  "pt": {
    "result": "Resultado"
  },
  "ar": {
    "result": "النتيجة"
  },
  "hi": {
    "result": "परिणाम"
  },
  "tr": {
    "result": "Sonuç"
  },
  "nl": {
    "result": "Resultaat"
  },
  "sv": {
    "result": "Resultat"
  },
  "pl": {
    "result": "Wynik"
  },
  "vi": {
    "result": "Kết quả"
  },
  "th": {
    "result": "ผลลัพธ์"
  },
  "id": {
    "result": "Hasil"
  },
  "he": {
    "result": "תוצאה"
  },
  "ms": {
    "result": "Keputusan"
  },
  "no": {
    "result": "Resultat"
  }
}
</i18n>
