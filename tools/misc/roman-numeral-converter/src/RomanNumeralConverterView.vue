<template>
  <ToolDefaultPageLayout :info="toolInfo">
    <!-- Arabic Number Input Section -->
    <ToolSectionHeader>Arabic Number (1-3999)</ToolSectionHeader>
    <ToolSection>
      <n-input
        v-model:value="arabicInput"
        placeholder="Enter Arabic number..."
        :status="arabicInputStatus"
        size="large"
      />
    </ToolSection>
    <ToolSection>
      <CopyToClipboardButton :content="arabicInput" />
    </ToolSection>

    <!-- Roman Numeral Input Section -->
    <ToolSectionHeader>Roman Numeral</ToolSectionHeader>
    <ToolSection>
      <n-input
        v-model:value="romanInput"
        placeholder="Enter Roman numeral..."
        :status="romanInputStatus"
        size="large"
      />
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
import { NInput } from 'naive-ui'
import * as toolInfo from './info'
import { ToolDefaultPageLayout, ToolSectionHeader, ToolSection } from '@shared/ui/tool'
import { CopyToClipboardButton } from '@shared/ui/base'
import WhatIsRomanNumeral from './components/WhatIsRomanNumeral.vue'
import { arabicToRoman, romanToArabic, isValidArabicNumber, isValidRomanNumeral } from './utils/conversion'

// State
const arabicInput = ref('')
const romanInput = ref('')
const arabicInputStatus = ref<'success' | 'warning' | 'error' | undefined>()
const romanInputStatus = ref<'success' | 'warning' | 'error' | undefined>()

// Flag to prevent infinite loop during programmatic updates
let isUpdating = false

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