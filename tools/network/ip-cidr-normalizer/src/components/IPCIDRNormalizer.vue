<template>
  <ToolSectionHeader>{{ t('input.title') }}</ToolSectionHeader>
  <ToolSection>
    <IPCIDRInput @update:ipcidr="ipcidr = $event" />
  </ToolSection>

  <template v-if="ipcidr !== ''">
    <ToolSectionHeader>{{ t('result.title') }}</ToolSectionHeader>
    <ToolSection>
      <IPCIDRNormalizedResult :ipcidr="ipcidr" />
    </ToolSection>
  </template>
</template>

<script setup lang="ts">
import IPCIDRInput from './IPCIDRInput.vue'
import { ref } from 'vue'
import IPCIDRNormalizedResult from './IPCIDRNormalizedResult.vue'
import { ToolSectionHeader, ToolSection } from '@shared/ui/tool'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const ipcidr = ref('')
</script>

<i18n lang="json">
{
  "en": {
    "input.title": "IP/CIDR",
    "result.title": "Normalized Result"
  },
  "zh": {
    "input.title": "IP/CIDR",
    "result.title": "标准化结果"
  },
  "zh-CN": {
    "input.title": "IP/CIDR",
    "result.title": "标准化结果"
  },
  "zh-TW": {
    "input.title": "IP/CIDR",
    "result.title": "標準化結果"
  },
  "zh-HK": {
    "input.title": "IP/CIDR",
    "result.title": "標準化結果"
  },
  "es": {
    "input.title": "IP/CIDR",
    "result.title": "Resultado Normalizado"
  },
  "fr": {
    "input.title": "IP/CIDR",
    "result.title": "Résultat Normalisé"
  },
  "de": {
    "input.title": "IP/CIDR",
    "result.title": "Normalisiertes Ergebnis"
  },
  "it": {
    "input.title": "IP/CIDR",
    "result.title": "Risultato Normalizzato"
  },
  "ja": {
    "input.title": "IP/CIDR",
    "result.title": "正規化結果"
  },
  "ko": {
    "input.title": "IP/CIDR",
    "result.title": "정규화된 결과"
  },
  "ru": {
    "input.title": "IP/CIDR",
    "result.title": "Нормализованный Результат"
  },
  "pt": {
    "input.title": "IP/CIDR",
    "result.title": "Resultado Normalizado"
  },
  "ar": {
    "input.title": "IP/CIDR",
    "result.title": "النتيجة المُطبَّعة"
  },
  "hi": {
    "input.title": "IP/CIDR",
    "result.title": "सामान्यीकृत परिणाम"
  },
  "tr": {
    "input.title": "IP/CIDR",
    "result.title": "Normalleştirilmiş Sonuç"
  },
  "nl": {
    "input.title": "IP/CIDR",
    "result.title": "Genormaliseerd Resultaat"
  },
  "sv": {
    "input.title": "IP/CIDR",
    "result.title": "Normaliserat Resultat"
  },
  "pl": {
    "input.title": "IP/CIDR",
    "result.title": "Znormalizowany Wynik"
  },
  "vi": {
    "input.title": "IP/CIDR",
    "result.title": "Kết Quả Chuẩn Hóa"
  },
  "th": {
    "input.title": "IP/CIDR",
    "result.title": "ผลลัพธ์ที่ปรับให้เป็นมาตรฐาน"
  },
  "id": {
    "input.title": "IP/CIDR",
    "result.title": "Hasil Dinormalisasi"
  },
  "he": {
    "input.title": "IP/CIDR",
    "result.title": "תוצאה מנורמלת"
  },
  "ms": {
    "input.title": "IP/CIDR",
    "result.title": "Hasil Dinormalisasi"
  },
  "no": {
    "input.title": "IP/CIDR",
    "result.title": "Normalisert Resultat"
  }
}
</i18n>
