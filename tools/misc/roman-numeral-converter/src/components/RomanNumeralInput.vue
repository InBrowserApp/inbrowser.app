<template>
  <ToolSectionHeader>{{ t('romanNumeral') }}</ToolSectionHeader>
  <ToolSection>
    <n-input
      :value="modelValue"
      :placeholder="t('romanPlaceholder')"
      size="large"
      @update:value="$emit('update:modelValue', $event)"
    />
  </ToolSection>
  <ToolSection>
    <CopyToClipboardButton :content="modelValue" />
  </ToolSection>
</template>

<script setup lang="ts">
import { NInput } from 'naive-ui'
import { useI18n } from 'vue-i18n'
import { ToolSectionHeader, ToolSection } from '@shared/ui/tool'
import { CopyToClipboardButton } from '@shared/ui/base'

interface Props {
  modelValue: string
}

defineProps<Props>()
defineEmits<{
  'update:modelValue': [value: string]
}>()

const { t } = useI18n()
</script>

<i18n lang="json">
{
  "en": {
    "romanNumeral": "Roman Numeral",
    "romanPlaceholder": "Enter Roman numeral..."
  },
  "zh": {
    "romanNumeral": "罗马数字",
    "romanPlaceholder": "输入罗马数字..."
  },
  "zh-CN": {
    "romanNumeral": "罗马数字",
    "romanPlaceholder": "输入罗马数字..."
  },
  "zh-TW": {
    "romanNumeral": "羅馬數字",
    "romanPlaceholder": "輸入羅馬數字..."
  },
  "zh-HK": {
    "romanNumeral": "羅馬數字",
    "romanPlaceholder": "輸入羅馬數字..."
  },
  "es": {
    "romanNumeral": "Número Romano",
    "romanPlaceholder": "Ingresa número romano..."
  },
  "fr": {
    "romanNumeral": "Nombre Romain",
    "romanPlaceholder": "Entrez un nombre romain..."
  },
  "de": {
    "romanNumeral": "Römische Zahl",
    "romanPlaceholder": "Römische Zahl eingeben..."
  },
  "it": {
    "romanNumeral": "Numero Romano",
    "romanPlaceholder": "Inserisci numero romano..."
  },
  "ja": {
    "romanNumeral": "ローマ数字",
    "romanPlaceholder": "ローマ数字を入力..."
  },
  "ko": {
    "romanNumeral": "로마 숫자",
    "romanPlaceholder": "로마 숫자 입력..."
  },
  "ru": {
    "romanNumeral": "Римская цифра",
    "romanPlaceholder": "Введите римскую цифру..."
  },
  "pt": {
    "romanNumeral": "Número Romano",
    "romanPlaceholder": "Digite número romano..."
  },
  "ar": {
    "romanNumeral": "الرقم الروماني",
    "romanPlaceholder": "أدخل الرقم الروماني..."
  },
  "hi": {
    "romanNumeral": "रोमन संख्या",
    "romanPlaceholder": "रोमन संख्या दर्ज करें..."
  },
  "tr": {
    "romanNumeral": "Roma Rakamı",
    "romanPlaceholder": "Roma rakamı girin..."
  },
  "nl": {
    "romanNumeral": "Romeins Cijfer",
    "romanPlaceholder": "Voer Romeins cijfer in..."
  },
  "sv": {
    "romanNumeral": "Romersk Siffra",
    "romanPlaceholder": "Ange romersk siffra..."
  },
  "pl": {
    "romanNumeral": "Cyfra Rzymska",
    "romanPlaceholder": "Wprowadź cyfrę rzymską..."
  },
  "vi": {
    "romanNumeral": "Số La Mã",
    "romanPlaceholder": "Nhập số La Mã..."
  },
  "th": {
    "romanNumeral": "ตัวเลขโรมัน",
    "romanPlaceholder": "ป้อนตัวเลขโรมัน..."
  },
  "id": {
    "romanNumeral": "Angka Romawi",
    "romanPlaceholder": "Masukkan angka Romawi..."
  },
  "he": {
    "romanNumeral": "מספר רומי",
    "romanPlaceholder": "הכנס מספר רומי..."
  },
  "ms": {
    "romanNumeral": "Nombor Rom",
    "romanPlaceholder": "Masukkan nombor Rom..."
  },
  "no": {
    "romanNumeral": "Romersk Tall",
    "romanPlaceholder": "Skriv inn romersk tall..."
  }
}
</i18n>
