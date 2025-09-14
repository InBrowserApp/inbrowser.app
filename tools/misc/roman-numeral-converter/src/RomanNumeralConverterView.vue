<template>
  <ToolDefaultPageLayout :info="toolInfo">
    <!-- Arabic Number Input Section -->
    <ArabicNumberInput v-model:value="arabicInput" />

    <!-- Roman Numeral Input Section -->
    <RomanNumeralInput v-model:value="romanInput" />

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
import { arabicToRoman, romanToArabic } from './utils/conversion'
import { useStorage } from '@vueuse/core'

const arabicInput = useStorage('tools:roman-numeral-converter:arabic-input', 1)
const romanInput = ref(arabicToRoman(arabicInput.value))

// Watch Arabic input and convert to Roman
watch(arabicInput, (newValue) => {
  romanInput.value = arabicToRoman(newValue)
})

// Watch Roman input and convert to Arabic
watch(romanInput, (newValue) => {
  arabicInput.value = romanToArabic(newValue)
})
</script>
