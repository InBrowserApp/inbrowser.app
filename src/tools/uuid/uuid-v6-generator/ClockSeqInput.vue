<template>
  <n-form-item :label="t('clock_seq')" :show-feedback="false">
    <n-input-number v-model:value="clockSeq" :min="0" :max="0x3fff" />
  </n-form-item>
</template>

<script setup lang="ts">
import { NFormItem, NInputNumber } from 'naive-ui'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const clockSeq = defineModel<number>('clockSeq', { required: true })
</script>

<i18n lang="json">
{
  "en": {
    "clock_seq": "Clock Sequence"
  },
  "zh": {
    "clock_seq": "时钟序列"
  },
  "zh-CN": {
    "clock_seq": "时钟序列"
  },
  "zh-TW": {
    "clock_seq": "時鐘序列"
  },
  "zh-HK": {
    "clock_seq": "時鐘序列"
  },
  "es": {
    "clock_seq": "Secuencia de Reloj"
  },
  "fr": {
    "clock_seq": "Séquence d'Horloge"
  },
  "de": {
    "clock_seq": "Uhrsequenz"
  },
  "it": {
    "clock_seq": "Sequenza di Clock"
  },
  "ja": {
    "clock_seq": "クロックシーケンス"
  },
  "ko": {
    "clock_seq": "클록 시퀀스"
  },
  "ru": {
    "clock_seq": "Последовательность часов"
  },
  "pt": {
    "clock_seq": "Sequência de Relógio"
  },
  "ar": {
    "clock_seq": "تسلسل الساعة"
  },
  "hi": {
    "clock_seq": "घड़ी अनुक्रम"
  },
  "tr": {
    "clock_seq": "Saat Dizisi"
  },
  "nl": {
    "clock_seq": "Kloksequentie"
  },
  "sv": {
    "clock_seq": "Klocksekvens"
  },
  "pl": {
    "clock_seq": "Sekwencja zegara"
  },
  "vi": {
    "clock_seq": "Chuỗi đồng hồ"
  },
  "th": {
    "clock_seq": "ลำดับนาฬิกา"
  },
  "id": {
    "clock_seq": "Urutan Jam"
  },
  "he": {
    "clock_seq": "רצף שעון"
  },
  "ms": {
    "clock_seq": "Urutan Jam"
  },
  "no": {
    "clock_seq": "Klokkesevens"
  }
}
</i18n>
