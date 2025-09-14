<template>
  <ToolDefaultPageLayout :info="toolInfo">
    <!-- Arabic Number Input Section -->
    <ArabicNumberInput v-model="arabicInput" :status="arabicInputStatus" />

    <!-- Roman Numeral Input Section -->
    <RomanNumeralInput v-model="romanInput" :status="romanInputStatus" />

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

const { arabicInput, romanInput, arabicInputStatus, romanInputStatus } = useRomanConversion()
</script>
