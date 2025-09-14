<template>
  <ToolDefaultPageLayout :info="toolInfo">
    <!-- Arabic Number Input Section -->
    <ArabicNumberInput v-model="arabicInput" />

    <!-- Roman Numeral Input Section -->
    <RomanNumeralInput v-model="romanInput" />

    <!-- Educational Content -->
    <WhatIsRomanNumeral />
  </ToolDefaultPageLayout>
</template>

<script setup lang="ts">
import * as toolInfo from './info'
import { ref, watch } from 'vue'
import { ToolDefaultPageLayout } from '@shared/ui/tool'
import ArabicNumberInput from './components/ArabicNumberInput.vue'
import RomanNumeralInput from './components/RomanNumeralInput.vue'
import WhatIsRomanNumeral from './components/WhatIsRomanNumeral.vue'
import {
  arabicToRoman,
  romanToArabic,
  isValidArabicNumber,
  isValidRomanNumeral,
} from './utils/conversion'

const arabicInput = ref('')
const romanInput = ref('')

// Flag to prevent infinite loop during programmatic updates
let isUpdating = false

// Watch Arabic input and convert to Roman
watch(arabicInput, (newValue) => {
  if (isUpdating) return

  if (!newValue) {
    isUpdating = true
    romanInput.value = ''
    isUpdating = false
    return
  }

  const num = parseInt(newValue)
  if (isValidArabicNumber(num)) {
    try {
      isUpdating = true
      romanInput.value = arabicToRoman(num)
      isUpdating = false
    } catch {
      isUpdating = true
      romanInput.value = ''
      isUpdating = false
    }
  } else {
    isUpdating = true
    romanInput.value = ''
    isUpdating = false
  }
})

// Watch Roman input and convert to Arabic
watch(romanInput, (newValue) => {
  if (isUpdating) return

  if (!newValue) {
    isUpdating = true
    arabicInput.value = ''
    isUpdating = false
    return
  }

  if (isValidRomanNumeral(newValue)) {
    try {
      const result = romanToArabic(newValue)
      isUpdating = true
      arabicInput.value = result.toString()
      isUpdating = false
    } catch {
      isUpdating = true
      arabicInput.value = ''
      isUpdating = false
    }
  } else {
    isUpdating = true
    arabicInput.value = ''
    isUpdating = false
  }
})
</script>
