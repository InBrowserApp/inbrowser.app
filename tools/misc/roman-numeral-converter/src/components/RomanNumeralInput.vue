<template>
  <ToolSectionHeader>{{ t('romanNumeral') }}</ToolSectionHeader>
  <ToolSection>
    <n-form-item :label="t('romanNumeral')" :rule="romanRule" :show-label="false">
      <n-input
        :model-value="modelValue"
        :placeholder="t('romanPlaceholder')"
        :status="status"
        size="large"
        @update:value="$emit('update:modelValue', $event)"
      />
    </n-form-item>
  </ToolSection>
  <ToolSection>
    <CopyToClipboardButton :content="modelValue" />
  </ToolSection>
</template>

<script setup lang="ts">
import { NInput, NFormItem, type FormItemRule } from 'naive-ui'
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'
import { ToolSectionHeader, ToolSection } from '@shared/ui/tool'
import { CopyToClipboardButton } from '@shared/ui/base'
import { isValidRomanNumeral } from '../utils/conversion'

interface Props {
  modelValue: string
  status?: 'success' | 'warning' | 'error' | undefined
}

defineProps<Props>()
defineEmits<{
  'update:modelValue': [value: string]
}>()

const { t } = useI18n()

// Validation rule for Roman numeral input
const romanRule = computed(
  (): FormItemRule => ({
    trigger: ['input', 'blur'],
    validator(_, value: string) {
      if (!value) return true // Allow empty input
      if (!isValidRomanNumeral(value)) {
        return new Error(t('invalidRomanNumeral'))
      }
      return true
    },
  }),
)
</script>

<i18n lang="json">
{
  "en": {
    "romanNumeral": "Roman Numeral",
    "romanPlaceholder": "Enter Roman numeral...",
    "invalidRomanNumeral": "Please enter a valid Roman numeral"
  },
  "zh": {
    "romanNumeral": "罗马数字",
    "romanPlaceholder": "输入罗马数字...",
    "invalidRomanNumeral": "请输入有效的罗马数字"
  },
  "zh-CN": {
    "romanNumeral": "罗马数字",
    "romanPlaceholder": "输入罗马数字...",
    "invalidRomanNumeral": "请输入有效的罗马数字"
  },
  "zh-TW": {
    "romanNumeral": "羅馬數字",
    "romanPlaceholder": "輸入羅馬數字...",
    "invalidRomanNumeral": "請輸入有效的羅馬數字"
  },
  "zh-HK": {
    "romanNumeral": "羅馬數字",
    "romanPlaceholder": "輸入羅馬數字...",
    "invalidRomanNumeral": "請輸入有效的羅馬數字"
  },
  "es": {
    "romanNumeral": "Número Romano",
    "romanPlaceholder": "Ingresa número romano...",
    "invalidRomanNumeral": "Por favor ingresa un número romano válido"
  },
  "fr": {
    "romanNumeral": "Nombre Romain",
    "romanPlaceholder": "Entrez un nombre romain...",
    "invalidRomanNumeral": "Veuillez saisir un nombre romain valide"
  },
  "de": {
    "romanNumeral": "Römische Zahl",
    "romanPlaceholder": "Römische Zahl eingeben...",
    "invalidRomanNumeral": "Bitte geben Sie eine gültige römische Zahl ein"
  },
  "it": {
    "romanNumeral": "Numero Romano",
    "romanPlaceholder": "Inserisci numero romano...",
    "invalidRomanNumeral": "Inserisci un numero romano valido"
  },
  "ja": {
    "romanNumeral": "ローマ数字",
    "romanPlaceholder": "ローマ数字を入力...",
    "invalidRomanNumeral": "有効なローマ数字を入力してください"
  },
  "ko": {
    "romanNumeral": "로마 숫자",
    "romanPlaceholder": "로마 숫자 입력...",
    "invalidRomanNumeral": "유효한 로마 숫자를 입력하세요"
  },
  "ru": {
    "romanNumeral": "Римская цифра",
    "romanPlaceholder": "Введите римскую цифру...",
    "invalidRomanNumeral": "Пожалуйста, введите действительную римскую цифру"
  },
  "pt": {
    "romanNumeral": "Número Romano",
    "romanPlaceholder": "Digite número romano...",
    "invalidRomanNumeral": "Por favor digite um numeral romano válido"
  },
  "ar": {
    "romanNumeral": "الرقم الروماني",
    "romanPlaceholder": "أدخل الرقم الروماني...",
    "invalidRomanNumeral": "يرجى إدخال رقم روماني صحيح"
  },
  "hi": {
    "romanNumeral": "रोमन संख्या",
    "romanPlaceholder": "रोमन संख्या दर्ज करें...",
    "invalidRomanNumeral": "कृपया एक वैध रोमन संख्या दर्ज करें"
  },
  "tr": {
    "romanNumeral": "Roma Rakamı",
    "romanPlaceholder": "Roma rakamı girin...",
    "invalidRomanNumeral": "Lütfen geçerli bir Roma rakamı girin"
  },
  "nl": {
    "romanNumeral": "Romeins Cijfer",
    "romanPlaceholder": "Voer Romeins cijfer in...",
    "invalidRomanNumeral": "Voer een geldig Romeins cijfer in"
  },
  "sv": {
    "romanNumeral": "Romersk Siffra",
    "romanPlaceholder": "Ange romersk siffra...",
    "invalidRomanNumeral": "Ange en giltig romersk siffra"
  },
  "pl": {
    "romanNumeral": "Cyfra Rzymska",
    "romanPlaceholder": "Wprowadź cyfrę rzymską...",
    "invalidRomanNumeral": "Wprowadź prawidłową cyfrę rzymską"
  },
  "vi": {
    "romanNumeral": "Số La Mã",
    "romanPlaceholder": "Nhập số La Mã...",
    "invalidRomanNumeral": "Vui lòng nhập một số La Mã hợp lệ"
  },
  "th": {
    "romanNumeral": "ตัวเลขโรมัน",
    "romanPlaceholder": "ป้อนตัวเลขโรมัน...",
    "invalidRomanNumeral": "โปรดป้อนตัวเลขโรมันที่ถูกต้อง"
  },
  "id": {
    "romanNumeral": "Angka Romawi",
    "romanPlaceholder": "Masukkan angka Romawi...",
    "invalidRomanNumeral": "Harap masukkan angka Romawi yang valid"
  },
  "he": {
    "romanNumeral": "מספר רומי",
    "romanPlaceholder": "הכנס מספר רומי...",
    "invalidRomanNumeral": "אנא הכנס מספר רומי תקין"
  },
  "ms": {
    "romanNumeral": "Nombor Rom",
    "romanPlaceholder": "Masukkan nombor Rom...",
    "invalidRomanNumeral": "Sila masukkan nombor Rom yang sah"
  },
  "no": {
    "romanNumeral": "Romersk Tall",
    "romanPlaceholder": "Skriv inn romersk tall...",
    "invalidRomanNumeral": "Vennligst skriv inn et gyldig romersk tall"
  }
}
</i18n>
