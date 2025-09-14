<template>
  <ToolDefaultPageLayout :info="toolInfo">
    <!-- Arabic Number Input Section -->
    <ArabicNumberInput
      v-model="arabicInput"
      :status="arabicInputStatus"
      :arabic-rule="arabicRule"
    />

    <!-- Roman Numeral Input Section -->
    <RomanNumeralInput v-model="romanInput" :status="romanInputStatus" :roman-rule="romanRule" />

    <!-- Educational Content -->
    <WhatIsRomanNumeral />
  </ToolDefaultPageLayout>
</template>

<script setup lang="ts">
import * as toolInfo from './info'
import { ToolDefaultPageLayout } from '@shared/ui/tool'
import ArabicNumberInput from './components/ArabicNumberInput.vue'
import RomanNumeralInput from './components/RomanNumeralInput.vue'
import WhatIsRomanNumeral from './components/WhatIsRomanNumeral.vue'
import { useRomanConversion } from './composables/useRomanConversion'

const { arabicInput, romanInput, arabicInputStatus, romanInputStatus, arabicRule, romanRule } =
  useRomanConversion()
</script>

<i18n lang="json">
{
  "en": {
    "invalidNumber": "Please enter a valid number",
    "numberTooSmall": "Number must be at least 1",
    "numberTooLarge": "Number must be at most 3999",
    "invalidRomanNumeral": "Please enter a valid Roman numeral"
  },
  "zh": {
    "invalidNumber": "请输入有效的数字",
    "numberTooSmall": "数字必须至少为 1",
    "numberTooLarge": "数字最多为 3999",
    "invalidRomanNumeral": "请输入有效的罗马数字"
  },
  "zh-CN": {
    "invalidNumber": "请输入有效的数字",
    "numberTooSmall": "数字必须至少为 1",
    "numberTooLarge": "数字最多为 3999",
    "invalidRomanNumeral": "请输入有效的罗马数字"
  },
  "zh-TW": {
    "invalidNumber": "請輸入有效的數字",
    "numberTooSmall": "數字必須至少為 1",
    "numberTooLarge": "數字最多為 3999",
    "invalidRomanNumeral": "請輸入有效的羅馬數字"
  },
  "zh-HK": {
    "invalidNumber": "請輸入有效的數字",
    "numberTooSmall": "數字必須至少為 1",
    "numberTooLarge": "數字最多為 3999",
    "invalidRomanNumeral": "請輸入有效的羅馬數字"
  },
  "es": {
    "invalidNumber": "Por favor ingresa un número válido",
    "numberTooSmall": "El número debe ser al menos 1",
    "numberTooLarge": "El número debe ser como máximo 3999",
    "invalidRomanNumeral": "Por favor ingresa un número romano válido"
  },
  "fr": {
    "invalidNumber": "Veuillez saisir un nombre valide",
    "numberTooSmall": "Le nombre doit être au moins 1",
    "numberTooLarge": "Le nombre doit être au maximum 3999",
    "invalidRomanNumeral": "Veuillez saisir un nombre romain valide"
  },
  "de": {
    "invalidNumber": "Bitte geben Sie eine gültige Zahl ein",
    "numberTooSmall": "Die Zahl muss mindestens 1 sein",
    "numberTooLarge": "Die Zahl darf höchstens 3999 sein",
    "invalidRomanNumeral": "Bitte geben Sie eine gültige römische Zahl ein"
  },
  "it": {
    "invalidNumber": "Inserisci un numero valido",
    "numberTooSmall": "Il numero deve essere almeno 1",
    "numberTooLarge": "Il numero deve essere al massimo 3999",
    "invalidRomanNumeral": "Inserisci un numero romano valido"
  },
  "ja": {
    "invalidNumber": "有効な数字を入力してください",
    "numberTooSmall": "数字は少なくとも1である必要があります",
    "numberTooLarge": "数字は最大3999である必要があります",
    "invalidRomanNumeral": "有効なローマ数字を入力してください"
  },
  "ko": {
    "invalidNumber": "유효한 숫자를 입력하세요",
    "numberTooSmall": "숫자는 최소 1이어야 합니다",
    "numberTooLarge": "숫자는 최대 3999여야 합니다",
    "invalidRomanNumeral": "유효한 로마 숫자를 입력하세요"
  },
  "ru": {
    "invalidNumber": "Пожалуйста, введите действительное число",
    "numberTooSmall": "Число должно быть не менее 1",
    "numberTooLarge": "Число должно быть не более 3999",
    "invalidRomanNumeral": "Пожалуйста, введите действительную римскую цифру"
  },
  "pt": {
    "invalidNumber": "Por favor digite um número válido",
    "numberTooSmall": "O número deve ser pelo menos 1",
    "numberTooLarge": "O número deve ser no máximo 3999",
    "invalidRomanNumeral": "Por favor digite um numeral romano válido"
  },
  "ar": {
    "invalidNumber": "يرجى إدخال رقم صحيح",
    "numberTooSmall": "يجب أن يكون الرقم على الأقل 1",
    "numberTooLarge": "يجب أن يكون الرقم على الأكثر 3999",
    "invalidRomanNumeral": "يرجى إدخال رقم روماني صحيح"
  },
  "hi": {
    "invalidNumber": "कृपया एक वैध संख्या दर्ज करें",
    "numberTooSmall": "संख्या कम से कम 1 होनी चाहिए",
    "numberTooLarge": "संख्या अधिकतम 3999 होनी चाहिए",
    "invalidRomanNumeral": "कृपया एक वैध रोमन संख्या दर्ज करें"
  },
  "tr": {
    "invalidNumber": "Lütfen geçerli bir sayı girin",
    "numberTooSmall": "Sayı en az 1 olmalı",
    "numberTooLarge": "Sayı en fazla 3999 olmalı",
    "invalidRomanNumeral": "Lütfen geçerli bir Roma rakamı girin"
  },
  "nl": {
    "invalidNumber": "Voer een geldig getal in",
    "numberTooSmall": "Het getal moet minimaal 1 zijn",
    "numberTooLarge": "Het getal mag maximaal 3999 zijn",
    "invalidRomanNumeral": "Voer een geldig Romeins cijfer in"
  },
  "sv": {
    "invalidNumber": "Ange ett giltigt nummer",
    "numberTooSmall": "Numret måste vara minst 1",
    "numberTooLarge": "Numret får vara högst 3999",
    "invalidRomanNumeral": "Ange en giltig romersk siffra"
  },
  "pl": {
    "invalidNumber": "Wprowadź prawidłową liczbę",
    "numberTooSmall": "Liczba musi być co najmniej 1",
    "numberTooLarge": "Liczba może być co najwyżej 3999",
    "invalidRomanNumeral": "Wprowadź prawidłową cyfrę rzymską"
  },
  "vi": {
    "invalidNumber": "Vui lòng nhập một số hợp lệ",
    "numberTooSmall": "Số phải ít nhất là 1",
    "numberTooLarge": "Số phải nhiều nhất là 3999",
    "invalidRomanNumeral": "Vui lòng nhập một số La Mã hợp lệ"
  },
  "th": {
    "invalidNumber": "โปรดป้อนตัวเลขที่ถูกต้อง",
    "numberTooSmall": "ตัวเลขต้องมีค่าอย่างน้อย 1",
    "numberTooLarge": "ตัวเลขต้องมีค่าไม่เกิน 3999",
    "invalidRomanNumeral": "โปรดป้อนตัวเลขโรมันที่ถูกต้อง"
  },
  "id": {
    "invalidNumber": "Harap masukkan angka yang valid",
    "numberTooSmall": "Angka harus minimal 1",
    "numberTooLarge": "Angka harus maksimal 3999",
    "invalidRomanNumeral": "Harap masukkan angka Romawi yang valid"
  },
  "he": {
    "invalidNumber": "אנא הכנס מספר תקין",
    "numberTooSmall": "המספר חייב להיות לפחות 1",
    "numberTooLarge": "המספר חייב להיות לכל היותר 3999",
    "invalidRomanNumeral": "אנא הכנס מספר רומי תקין"
  },
  "ms": {
    "invalidNumber": "Sila masukkan nombor yang sah",
    "numberTooSmall": "Nombor mestilah sekurang-kurangnya 1",
    "numberTooLarge": "Nombor mestilah paling banyak 3999",
    "invalidRomanNumeral": "Sila masukkan nombor Rom yang sah"
  },
  "no": {
    "invalidNumber": "Vennligst skriv inn et gyldig tall",
    "numberTooSmall": "Tallet må være minst 1",
    "numberTooLarge": "Tallet kan være maksimalt 3999",
    "invalidRomanNumeral": "Vennligst skriv inn et gyldig romersk tall"
  }
}
</i18n>
