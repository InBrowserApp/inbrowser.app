<template>
  <ToolSectionHeader>{{ t('cidrHeader') }}</ToolSectionHeader>
  <ToolSection>
    <CIDRInputFormItem :cidr="cidr" @update:cidr="cidr = $event" />
  </ToolSection>

  <template v-if="cidr !== ''">
    <ToolSectionHeader>{{ t('resultHeader') }}</ToolSectionHeader>
    <ToolSection>
      <CIDRParseResult :cidr="cidr" />
    </ToolSection>
  </template>
</template>

<script setup lang="ts">
import { CIDRInputFormItem } from '@shared/ui/domain/ip'
import CIDRParseResult from './CIDRParseResult.vue'
import { useStorage } from '@vueuse/core'
import { ToolSectionHeader, ToolSection } from '@shared/ui/tool'
import { useI18n } from 'vue-i18n'

const cidr = useStorage('tools:cidr-parser:cidr', '')
const { t } = useI18n()
</script>

<i18n lang="json">
{
  "en": {
    "cidrHeader": "CIDR",
    "resultHeader": "Result"
  },
  "zh": {
    "cidrHeader": "CIDR",
    "resultHeader": "结果"
  },
  "zh-CN": {
    "cidrHeader": "CIDR",
    "resultHeader": "结果"
  },
  "zh-TW": {
    "cidrHeader": "CIDR",
    "resultHeader": "結果"
  },
  "zh-HK": {
    "cidrHeader": "CIDR",
    "resultHeader": "結果"
  },
  "es": {
    "cidrHeader": "CIDR",
    "resultHeader": "Resultado"
  },
  "fr": {
    "cidrHeader": "CIDR",
    "resultHeader": "Résultat"
  },
  "de": {
    "cidrHeader": "CIDR",
    "resultHeader": "Ergebnis"
  },
  "it": {
    "cidrHeader": "CIDR",
    "resultHeader": "Risultato"
  },
  "ja": {
    "cidrHeader": "CIDR",
    "resultHeader": "結果"
  },
  "ko": {
    "cidrHeader": "CIDR",
    "resultHeader": "결과"
  },
  "ru": {
    "cidrHeader": "CIDR",
    "resultHeader": "Результат"
  },
  "pt": {
    "cidrHeader": "CIDR",
    "resultHeader": "Resultado"
  },
  "ar": {
    "cidrHeader": "CIDR",
    "resultHeader": "النتيجة"
  },
  "hi": {
    "cidrHeader": "CIDR",
    "resultHeader": "परिणाम"
  },
  "tr": {
    "cidrHeader": "CIDR",
    "resultHeader": "Sonuç"
  },
  "nl": {
    "cidrHeader": "CIDR",
    "resultHeader": "Resultaat"
  },
  "sv": {
    "cidrHeader": "CIDR",
    "resultHeader": "Resultat"
  },
  "pl": {
    "cidrHeader": "CIDR",
    "resultHeader": "Wynik"
  },
  "vi": {
    "cidrHeader": "CIDR",
    "resultHeader": "Kết quả"
  },
  "th": {
    "cidrHeader": "CIDR",
    "resultHeader": "ผลลัพธ์"
  },
  "id": {
    "cidrHeader": "CIDR",
    "resultHeader": "Hasil"
  },
  "he": {
    "cidrHeader": "CIDR",
    "resultHeader": "תוצאה"
  },
  "ms": {
    "cidrHeader": "CIDR",
    "resultHeader": "Keputusan"
  },
  "no": {
    "cidrHeader": "CIDR",
    "resultHeader": "Resultat"
  }
}
</i18n>
