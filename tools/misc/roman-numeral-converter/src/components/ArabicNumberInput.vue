<template>
  <ToolSectionHeader>{{ t('arabicNumber') }}</ToolSectionHeader>
  <ToolSection>
    <n-form-item :label="t('arabicNumber')" :rule="arabicRule" :show-label="false">
      <n-input
        :model-value="modelValue"
        :placeholder="t('arabicPlaceholder')"
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
import { isValidArabicNumber } from '../utils/conversion'

interface Props {
  modelValue: string
  status?: 'success' | 'warning' | 'error' | undefined
}

defineProps<Props>()
defineEmits<{
  'update:modelValue': [value: string]
}>()

const { t } = useI18n()

// Validation rule for Arabic number input
const arabicRule = computed(
  (): FormItemRule => ({
    trigger: ['input', 'blur'],
    validator(_, value: string) {
      if (!value) return true // Allow empty input
      const num = parseInt(value)
      if (!isValidArabicNumber(num)) {
        if (isNaN(num)) {
          return new Error(t('invalidNumber'))
        }
        if (num < 1) {
          return new Error(t('numberTooSmall'))
        }
        if (num > 3999) {
          return new Error(t('numberTooLarge'))
        }
      }
      return true
    },
  }),
)
</script>

<i18n lang="json">
{
  "en": {
    "arabicNumber": "Arabic Number (1-3999)",
    "arabicPlaceholder": "Enter Arabic number...",
    "invalidNumber": "Please enter a valid number",
    "numberTooSmall": "Number must be at least 1",
    "numberTooLarge": "Number must be at most 3999"
  },
  "zh": {
    "arabicNumber": "阿拉伯数字 (1-3999)",
    "arabicPlaceholder": "输入阿拉伯数字...",
    "invalidNumber": "请输入有效的数字",
    "numberTooSmall": "数字必须至少为 1",
    "numberTooLarge": "数字最多为 3999"
  },
  "zh-CN": {
    "arabicNumber": "阿拉伯数字 (1-3999)",
    "arabicPlaceholder": "输入阿拉伯数字...",
    "invalidNumber": "请输入有效的数字",
    "numberTooSmall": "数字必须至少为 1",
    "numberTooLarge": "数字最多为 3999"
  },
  "zh-TW": {
    "arabicNumber": "阿拉伯數字 (1-3999)",
    "arabicPlaceholder": "輸入阿拉伯數字...",
    "invalidNumber": "請輸入有效的數字",
    "numberTooSmall": "數字必須至少為 1",
    "numberTooLarge": "數字最多為 3999"
  },
  "zh-HK": {
    "arabicNumber": "阿拉伯數字 (1-3999)",
    "arabicPlaceholder": "輸入阿拉伯數字...",
    "invalidNumber": "請輸入有效的數字",
    "numberTooSmall": "數字必須至少為 1",
    "numberTooLarge": "數字最多為 3999"
  },
  "es": {
    "arabicNumber": "Número Arábigo (1-3999)",
    "arabicPlaceholder": "Ingresa número arábigo...",
    "invalidNumber": "Por favor ingresa un número válido",
    "numberTooSmall": "El número debe ser al menos 1",
    "numberTooLarge": "El número debe ser como máximo 3999"
  },
  "fr": {
    "arabicNumber": "Nombre Arabe (1-3999)",
    "arabicPlaceholder": "Entrez un nombre arabe...",
    "invalidNumber": "Veuillez saisir un nombre valide",
    "numberTooSmall": "Le nombre doit être au moins 1",
    "numberTooLarge": "Le nombre doit être au maximum 3999"
  },
  "de": {
    "arabicNumber": "Arabische Zahl (1-3999)",
    "arabicPlaceholder": "Arabische Zahl eingeben...",
    "invalidNumber": "Bitte geben Sie eine gültige Zahl ein",
    "numberTooSmall": "Die Zahl muss mindestens 1 sein",
    "numberTooLarge": "Die Zahl darf höchstens 3999 sein"
  },
  "it": {
    "arabicNumber": "Numero Arabo (1-3999)",
    "arabicPlaceholder": "Inserisci numero arabo...",
    "invalidNumber": "Inserisci un numero valido",
    "numberTooSmall": "Il numero deve essere almeno 1",
    "numberTooLarge": "Il numero deve essere al massimo 3999"
  },
  "ja": {
    "arabicNumber": "アラビア数字 (1-3999)",
    "arabicPlaceholder": "アラビア数字を入力...",
    "invalidNumber": "有効な数字を入力してください",
    "numberTooSmall": "数字は少なくとも1である必要があります",
    "numberTooLarge": "数字は最大3999である必要があります"
  },
  "ko": {
    "arabicNumber": "아라비아 숫자 (1-3999)",
    "arabicPlaceholder": "아라비아 숫자 입력...",
    "invalidNumber": "유효한 숫자를 입력하세요",
    "numberTooSmall": "숫자는 최소 1이어야 합니다",
    "numberTooLarge": "숫자는 최대 3999여야 합니다"
  },
  "ru": {
    "arabicNumber": "Арабская цифра (1-3999)",
    "arabicPlaceholder": "Введите арабскую цифру...",
    "invalidNumber": "Пожалуйста, введите действительное число",
    "numberTooSmall": "Число должно быть не менее 1",
    "numberTooLarge": "Число должно быть не более 3999"
  },
  "pt": {
    "arabicNumber": "Número Arábico (1-3999)",
    "arabicPlaceholder": "Digite número arábico...",
    "invalidNumber": "Por favor digite um número válido",
    "numberTooSmall": "O número deve ser pelo menos 1",
    "numberTooLarge": "O número deve ser no máximo 3999"
  },
  "ar": {
    "arabicNumber": "الرقم العربي (1-3999)",
    "arabicPlaceholder": "أدخل الرقم العربي...",
    "invalidNumber": "يرجى إدخال رقم صحيح",
    "numberTooSmall": "يجب أن يكون الرقم على الأقل 1",
    "numberTooLarge": "يجب أن يكون الرقم على الأكثر 3999"
  },
  "hi": {
    "arabicNumber": "अरबी संख्या (1-3999)",
    "arabicPlaceholder": "अरबी संख्या दर्ज करें...",
    "invalidNumber": "कृपया एक वैध संख्या दर्ज करें",
    "numberTooSmall": "संख्या कम से कम 1 होनी चाहिए",
    "numberTooLarge": "संख्या अधिकतम 3999 होनी चाहिए"
  },
  "tr": {
    "arabicNumber": "Arap Rakamı (1-3999)",
    "arabicPlaceholder": "Arap rakamı girin...",
    "invalidNumber": "Lütfen geçerli bir sayı girin",
    "numberTooSmall": "Sayı en az 1 olmalı",
    "numberTooLarge": "Sayı en fazla 3999 olmalı"
  },
  "nl": {
    "arabicNumber": "Arabisch Cijfer (1-3999)",
    "arabicPlaceholder": "Voer Arabisch cijfer in...",
    "invalidNumber": "Voer een geldig getal in",
    "numberTooSmall": "Het getal moet minimaal 1 zijn",
    "numberTooLarge": "Het getal mag maximaal 3999 zijn"
  },
  "sv": {
    "arabicNumber": "Arabisk Siffra (1-3999)",
    "arabicPlaceholder": "Ange arabisk siffra...",
    "invalidNumber": "Ange ett giltigt nummer",
    "numberTooSmall": "Numret måste vara minst 1",
    "numberTooLarge": "Numret får vara högst 3999"
  },
  "pl": {
    "arabicNumber": "Cyfra Arabska (1-3999)",
    "arabicPlaceholder": "Wprowadź cyfrę arabską...",
    "invalidNumber": "Wprowadź prawidłową liczbę",
    "numberTooSmall": "Liczba musi być co najmniej 1",
    "numberTooLarge": "Liczba może być co najwyżej 3999"
  },
  "vi": {
    "arabicNumber": "Số Ả Rập (1-3999)",
    "arabicPlaceholder": "Nhập số Ả Rập...",
    "invalidNumber": "Vui lòng nhập một số hợp lệ",
    "numberTooSmall": "Số phải ít nhất là 1",
    "numberTooLarge": "Số phải nhiều nhất là 3999"
  },
  "th": {
    "arabicNumber": "ตัวเลขอารบิก (1-3999)",
    "arabicPlaceholder": "ป้อนตัวเลขอารบิก...",
    "invalidNumber": "โปรดป้อนตัวเลขที่ถูกต้อง",
    "numberTooSmall": "ตัวเลขต้องมีค่าอย่างน้อย 1",
    "numberTooLarge": "ตัวเลขต้องมีค่าไม่เกิน 3999"
  },
  "id": {
    "arabicNumber": "Angka Arab (1-3999)",
    "arabicPlaceholder": "Masukkan angka Arab...",
    "invalidNumber": "Harap masukkan angka yang valid",
    "numberTooSmall": "Angka harus minimal 1",
    "numberTooLarge": "Angka harus maksimal 3999"
  },
  "he": {
    "arabicNumber": "מספר ערבי (1-3999)",
    "arabicPlaceholder": "הכנס מספר ערבי...",
    "invalidNumber": "אנא הכנס מספר תקין",
    "numberTooSmall": "המספר חייב להיות לפחות 1",
    "numberTooLarge": "המספר חייב להיות לכל היותר 3999"
  },
  "ms": {
    "arabicNumber": "Nombor Arab (1-3999)",
    "arabicPlaceholder": "Masukkan nombor Arab...",
    "invalidNumber": "Sila masukkan nombor yang sah",
    "numberTooSmall": "Nombor mestilah sekurang-kurangnya 1",
    "numberTooLarge": "Nombor mestilah paling banyak 3999"
  },
  "no": {
    "arabicNumber": "Arabisk Tall (1-3999)",
    "arabicPlaceholder": "Skriv inn arabisk tall...",
    "invalidNumber": "Vennligst skriv inn et gyldig tall",
    "numberTooSmall": "Tallet må være minst 1",
    "numberTooLarge": "Tallet kan være maksimalt 3999"
  }
}
</i18n>
