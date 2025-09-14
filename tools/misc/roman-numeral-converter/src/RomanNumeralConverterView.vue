<template>
  <ToolDefaultPageLayout :info="toolInfo">
    <!-- Arabic Number Input Section -->
    <ToolSectionHeader>{{ t('arabicNumber') }}</ToolSectionHeader>
    <ToolSection>
      <n-form-item :label="t('arabicNumber')" :rule="arabicRule" :show-label="false">
        <n-input
          v-model:value="arabicInput"
          :placeholder="t('arabicPlaceholder')"
          :status="arabicInputStatus"
          size="large"
        />
      </n-form-item>
    </ToolSection>
    <ToolSection>
      <CopyToClipboardButton :content="arabicInput" />
    </ToolSection>

    <!-- Roman Numeral Input Section -->
    <ToolSectionHeader>{{ t('romanNumeral') }}</ToolSectionHeader>
    <ToolSection>
      <n-form-item :label="t('romanNumeral')" :rule="romanRule" :show-label="false">
        <n-input
          v-model:value="romanInput"
          :placeholder="t('romanPlaceholder')"
          :status="romanInputStatus"
          size="large"
        />
      </n-form-item>
    </ToolSection>
    <ToolSection>
      <CopyToClipboardButton :content="romanInput" />
    </ToolSection>

    <!-- Educational Content -->
    <WhatIsRomanNumeral />
  </ToolDefaultPageLayout>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { NInput, NFormItem, type FormItemRule } from 'naive-ui'
import { useI18n } from 'vue-i18n'
import * as toolInfo from './info'
import { ToolDefaultPageLayout, ToolSectionHeader, ToolSection } from '@shared/ui/tool'
import { CopyToClipboardButton } from '@shared/ui/base'
import WhatIsRomanNumeral from './components/WhatIsRomanNumeral.vue'
import { arabicToRoman, romanToArabic, isValidArabicNumber, isValidRomanNumeral } from './utils/conversion'

const { t } = useI18n()

// State
const arabicInput = ref('')
const romanInput = ref('')
const arabicInputStatus = ref<'success' | 'warning' | 'error' | undefined>()
const romanInputStatus = ref<'success' | 'warning' | 'error' | undefined>()

// Flag to prevent infinite loop during programmatic updates
let isUpdating = false

// Validation rules for form items
const arabicRule: FormItemRule = {
  trigger: ['input', 'blur'],
  validator() {
    if (!arabicInput.value) return true // Allow empty input
    const num = parseInt(arabicInput.value)
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
  }
}

const romanRule: FormItemRule = {
  trigger: ['input', 'blur'],
  validator() {
    if (!romanInput.value) return true // Allow empty input
    if (!isValidRomanNumeral(romanInput.value)) {
      return new Error(t('invalidRomanNumeral'))
    }
    return true
  }
}

// Watch Arabic input and convert to Roman
watch(arabicInput, (newValue) => {
  if (isUpdating) return
  
  if (!newValue) {
    isUpdating = true
    romanInput.value = ''
    arabicInputStatus.value = undefined
    isUpdating = false
    return
  }
  
  const num = parseInt(newValue)
  
  if (isValidArabicNumber(num)) {
    try {
      isUpdating = true
      romanInput.value = arabicToRoman(num)
      arabicInputStatus.value = 'success'
      isUpdating = false
    } catch {
      isUpdating = true
      romanInput.value = ''
      arabicInputStatus.value = 'error'
      isUpdating = false
    }
  } else {
    isUpdating = true
    romanInput.value = ''
    arabicInputStatus.value = 'error'
    isUpdating = false
  }
})

// Watch Roman input and convert to Arabic
watch(romanInput, (newValue) => {
  if (isUpdating) return
  
  if (!newValue) {
    isUpdating = true
    arabicInput.value = ''
    romanInputStatus.value = undefined
    isUpdating = false
    return
  }

  if (isValidRomanNumeral(newValue)) {
    try {
      const result = romanToArabic(newValue)
      isUpdating = true
      arabicInput.value = result.toString()
      romanInputStatus.value = 'success'
      isUpdating = false
    } catch {
      isUpdating = true
      arabicInput.value = ''
      romanInputStatus.value = 'error'
      isUpdating = false
    }
  } else {
    isUpdating = true
    arabicInput.value = ''
    romanInputStatus.value = 'error'
    isUpdating = false
  }
})
</script>

<i18n lang="json">
{
  "en": {
    "arabicNumber": "Arabic Number (1-3999)",
    "romanNumeral": "Roman Numeral",
    "arabicPlaceholder": "Enter Arabic number...",
    "romanPlaceholder": "Enter Roman numeral...",
    "invalidNumber": "Please enter a valid number",
    "numberTooSmall": "Number must be at least 1",
    "numberTooLarge": "Number must be at most 3999",
    "invalidRomanNumeral": "Please enter a valid Roman numeral"
  },
  "zh": {
    "arabicNumber": "阿拉伯数字 (1-3999)",
    "romanNumeral": "罗马数字",
    "arabicPlaceholder": "输入阿拉伯数字...",
    "romanPlaceholder": "输入罗马数字...",
    "invalidNumber": "请输入有效数字",
    "numberTooSmall": "数字必须至少为 1",
    "numberTooLarge": "数字最多为 3999",
    "invalidRomanNumeral": "请输入有效的罗马数字"
  },
  "zh-CN": {
    "arabicNumber": "阿拉伯数字 (1-3999)",
    "romanNumeral": "罗马数字",
    "arabicPlaceholder": "输入阿拉伯数字...",
    "romanPlaceholder": "输入罗马数字...",
    "invalidNumber": "请输入有效数字",
    "numberTooSmall": "数字必须至少为 1",
    "numberTooLarge": "数字最多为 3999",
    "invalidRomanNumeral": "请输入有效的罗马数字"
  },
  "zh-TW": {
    "arabicNumber": "阿拉伯數字 (1-3999)",
    "romanNumeral": "羅馬數字",
    "arabicPlaceholder": "輸入阿拉伯數字...",
    "romanPlaceholder": "輸入羅馬數字...",
    "invalidNumber": "請輸入有效數字",
    "numberTooSmall": "數字必須至少為 1",
    "numberTooLarge": "數字最多為 3999",
    "invalidRomanNumeral": "請輸入有效的羅馬數字"
  },
  "zh-HK": {
    "arabicNumber": "阿拉伯數字 (1-3999)",
    "romanNumeral": "羅馬數字",
    "arabicPlaceholder": "輸入阿拉伯數字...",
    "romanPlaceholder": "輸入羅馬數字...",
    "invalidNumber": "請輸入有效數字",
    "numberTooSmall": "數字必須至少為 1",
    "numberTooLarge": "數字最多為 3999",
    "invalidRomanNumeral": "請輸入有效的羅馬數字"
  },
  "es": {
    "arabicNumber": "Número Arábigo (1-3999)",
    "romanNumeral": "Número Romano",
    "arabicPlaceholder": "Ingresa número arábigo...",
    "romanPlaceholder": "Ingresa número romano...",
    "invalidNumber": "Por favor ingresa un número válido",
    "numberTooSmall": "El número debe ser al menos 1",
    "numberTooLarge": "El número debe ser como máximo 3999",
    "invalidRomanNumeral": "Por favor ingresa un número romano válido"
  },
  "fr": {
    "arabicNumber": "Nombre Arabe (1-3999)",
    "romanNumeral": "Nombre Romain",
    "arabicPlaceholder": "Entrez un nombre arabe...",
    "romanPlaceholder": "Entrez un nombre romain...",
    "invalidNumber": "Veuillez entrer un nombre valide",
    "numberTooSmall": "Le nombre doit être au moins 1",
    "numberTooLarge": "Le nombre doit être au maximum 3999",
    "invalidRomanNumeral": "Veuillez entrer un nombre romain valide"
  },
  "de": {
    "arabicNumber": "Arabische Zahl (1-3999)",
    "romanNumeral": "Römische Zahl",
    "arabicPlaceholder": "Arabische Zahl eingeben...",
    "romanPlaceholder": "Römische Zahl eingeben...",
    "invalidNumber": "Bitte geben Sie eine gültige Zahl ein",
    "numberTooSmall": "Die Zahl muss mindestens 1 sein",
    "numberTooLarge": "Die Zahl darf maximal 3999 sein",
    "invalidRomanNumeral": "Bitte geben Sie eine gültige römische Zahl ein"
  },
  "it": {
    "arabicNumber": "Numero Arabo (1-3999)",
    "romanNumeral": "Numero Romano",
    "arabicPlaceholder": "Inserisci numero arabo...",
    "romanPlaceholder": "Inserisci numero romano...",
    "invalidNumber": "Inserisci un numero valido",
    "numberTooSmall": "Il numero deve essere almeno 1",
    "numberTooLarge": "Il numero deve essere al massimo 3999",
    "invalidRomanNumeral": "Inserisci un numero romano valido"
  },
  "ja": {
    "arabicNumber": "アラビア数字 (1-3999)",
    "romanNumeral": "ローマ数字",
    "arabicPlaceholder": "アラビア数字を入力...",
    "romanPlaceholder": "ローマ数字を入力...",
    "invalidNumber": "有効な数字を入力してください",
    "numberTooSmall": "数字は最小で1である必要があります",
    "numberTooLarge": "数字は最大で3999である必要があります",
    "invalidRomanNumeral": "有効なローマ数字を入力してください"
  },
  "ko": {
    "arabicNumber": "아라비아 숫자 (1-3999)",
    "romanNumeral": "로마 숫자",
    "arabicPlaceholder": "아라비아 숫자 입력...",
    "romanPlaceholder": "로마 숫자 입력...",
    "invalidNumber": "유효한 숫자를 입력해주세요",
    "numberTooSmall": "숫자는 최소 1이어야 합니다",
    "numberTooLarge": "숫자는 최대 3999여야 합니다",
    "invalidRomanNumeral": "유효한 로마 숫자를 입력해주세요"
  },
  "ru": {
    "arabicNumber": "Арабская цифра (1-3999)",
    "romanNumeral": "Римская цифра",
    "arabicPlaceholder": "Введите арабскую цифру...",
    "romanPlaceholder": "Введите римскую цифру...",
    "invalidNumber": "Пожалуйста, введите действительное число",
    "numberTooSmall": "Число должно быть не менее 1",
    "numberTooLarge": "Число должно быть не более 3999",
    "invalidRomanNumeral": "Пожалуйста, введите действительную римскую цифру"
  },
  "pt": {
    "arabicNumber": "Número Arábico (1-3999)",
    "romanNumeral": "Número Romano",
    "arabicPlaceholder": "Digite número arábico...",
    "romanPlaceholder": "Digite número romano...",
    "invalidNumber": "Por favor digite um número válido",
    "numberTooSmall": "O número deve ser pelo menos 1",
    "numberTooLarge": "O número deve ser no máximo 3999",
    "invalidRomanNumeral": "Por favor digite um número romano válido"
  },
  "ar": {
    "arabicNumber": "الرقم العربي (1-3999)",
    "romanNumeral": "الرقم الروماني",
    "arabicPlaceholder": "أدخل الرقم العربي...",
    "romanPlaceholder": "أدخل الرقم الروماني...",
    "invalidNumber": "يرجى إدخال رقم صالح",
    "numberTooSmall": "يجب أن يكون الرقم على الأقل 1",
    "numberTooLarge": "يجب أن يكون الرقم على الأكثر 3999",
    "invalidRomanNumeral": "يرجى إدخال رقم روماني صالح"
  },
  "hi": {
    "arabicNumber": "अरबी संख्या (1-3999)",
    "romanNumeral": "रोमन संख्या",
    "arabicPlaceholder": "अरबी संख्या दर्ज करें...",
    "romanPlaceholder": "रोमन संख्या दर्ज करें...",
    "invalidNumber": "कृपया एक वैध संख्या दर्ज करें",
    "numberTooSmall": "संख्या कम से कम 1 होनी चाहिए",
    "numberTooLarge": "संख्या अधिक से अधिक 3999 होनी चाहिए",
    "invalidRomanNumeral": "कृपया एक वैध रोमन संख्या दर्ज करें"
  },
  "tr": {
    "arabicNumber": "Arap Rakamı (1-3999)",
    "romanNumeral": "Roma Rakamı",
    "arabicPlaceholder": "Arap rakamı girin...",
    "romanPlaceholder": "Roma rakamı girin...",
    "invalidNumber": "Lütfen geçerli bir sayı girin",
    "numberTooSmall": "Sayı en az 1 olmalıdır",
    "numberTooLarge": "Sayı en fazla 3999 olmalıdır",
    "invalidRomanNumeral": "Lütfen geçerli bir Roma rakamı girin"
  },
  "nl": {
    "arabicNumber": "Arabisch Cijfer (1-3999)",
    "romanNumeral": "Romeins Cijfer",
    "arabicPlaceholder": "Voer Arabisch cijfer in...",
    "romanPlaceholder": "Voer Romeins cijfer in...",
    "invalidNumber": "Voer een geldig getal in",
    "numberTooSmall": "Het getal moet minimaal 1 zijn",
    "numberTooLarge": "Het getal mag maximaal 3999 zijn",
    "invalidRomanNumeral": "Voer een geldig Romeins cijfer in"
  },
  "sv": {
    "arabicNumber": "Arabisk Siffra (1-3999)",
    "romanNumeral": "Romersk Siffra",
    "arabicPlaceholder": "Ange arabisk siffra...",
    "romanPlaceholder": "Ange romersk siffra...",
    "invalidNumber": "Vänligen ange ett giltigt nummer",
    "numberTooSmall": "Numret måste vara minst 1",
    "numberTooLarge": "Numret får vara högst 3999",
    "invalidRomanNumeral": "Vänligen ange en giltig romersk siffra"
  },
  "pl": {
    "arabicNumber": "Cyfra Arabska (1-3999)",
    "romanNumeral": "Cyfra Rzymska",
    "arabicPlaceholder": "Wprowadź cyfrę arabską...",
    "romanPlaceholder": "Wprowadź cyfrę rzymską...",
    "invalidNumber": "Proszę wprowadzić prawidłową liczbę",
    "numberTooSmall": "Liczba musi być co najmniej 1",
    "numberTooLarge": "Liczba może być co najwyżej 3999",
    "invalidRomanNumeral": "Proszę wprowadzić prawidłową cyfrę rzymską"
  },
  "vi": {
    "arabicNumber": "Số Ả Rập (1-3999)",
    "romanNumeral": "Số La Mã",
    "arabicPlaceholder": "Nhập số Ả Rập...",
    "romanPlaceholder": "Nhập số La Mã...",
    "invalidNumber": "Vui lòng nhập một số hợp lệ",
    "numberTooSmall": "Số phải ít nhất là 1",
    "numberTooLarge": "Số phải nhiều nhất là 3999",
    "invalidRomanNumeral": "Vui lòng nhập một số La Mã hợp lệ"
  },
  "th": {
    "arabicNumber": "ตัวเลขอารบิก (1-3999)",
    "romanNumeral": "ตัวเลขโรมัน",
    "arabicPlaceholder": "ป้อนตัวเลขอารบิก...",
    "romanPlaceholder": "ป้อนตัวเลขโรมัน...",
    "invalidNumber": "โปรดป้อนตัวเลขที่ถูกต้อง",
    "numberTooSmall": "ตัวเลขต้องเป็นอย่างน้อย 1",
    "numberTooLarge": "ตัวเลขต้องเป็นมากที่สุด 3999",
    "invalidRomanNumeral": "โปรดป้อนตัวเลขโรมันที่ถูกต้อง"
  },
  "id": {
    "arabicNumber": "Angka Arab (1-3999)",
    "romanNumeral": "Angka Romawi",
    "arabicPlaceholder": "Masukkan angka Arab...",
    "romanPlaceholder": "Masukkan angka Romawi...",
    "invalidNumber": "Harap masukkan angka yang valid",
    "numberTooSmall": "Angka harus minimal 1",
    "numberTooLarge": "Angka harus maksimal 3999",
    "invalidRomanNumeral": "Harap masukkan angka Romawi yang valid"
  },
  "he": {
    "arabicNumber": "מספר ערבי (1-3999)",
    "romanNumeral": "מספר רומי",
    "arabicPlaceholder": "הכנס מספר ערבי...",
    "romanPlaceholder": "הכנס מספר רומי...",
    "invalidNumber": "אנא הכנס מספר תקין",
    "numberTooSmall": "המספר חייב להיות לפחות 1",
    "numberTooLarge": "המספר יכול להיות לכל היותר 3999",
    "invalidRomanNumeral": "אנא הכנס מספר רומי תקין"
  },
  "ms": {
    "arabicNumber": "Nombor Arab (1-3999)",
    "romanNumeral": "Nombor Rom",
    "arabicPlaceholder": "Masukkan nombor Arab...",
    "romanPlaceholder": "Masukkan nombor Rom...",
    "invalidNumber": "Sila masukkan nombor yang sah",
    "numberTooSmall": "Nombor mesti sekurang-kurangnya 1",
    "numberTooLarge": "Nombor mesti sebanyak-banyaknya 3999",
    "invalidRomanNumeral": "Sila masukkan nombor Rom yang sah"
  },
  "no": {
    "arabicNumber": "Arabisk Tall (1-3999)",
    "romanNumeral": "Romersk Tall",
    "arabicPlaceholder": "Skriv inn arabisk tall...",
    "romanPlaceholder": "Skriv inn romersk tall...",
    "invalidNumber": "Vennligst skriv inn et gyldig tall",
    "numberTooSmall": "Tallet må være minst 1",
    "numberTooLarge": "Tallet kan være høyst 3999",
    "invalidRomanNumeral": "Vennligst skriv inn et gyldig romersk tall"
  }
}
</i18n>