import { ref, watch } from 'vue'
import type { FormItemRule } from 'naive-ui'
import {
  arabicToRoman,
  romanToArabic,
  isValidArabicNumber,
  isValidRomanNumeral,
} from '../utils/conversion'

export function useRomanConversion() {
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
          return new Error('Please enter a valid number')
        }
        if (num < 1) {
          return new Error('Number must be at least 1')
        }
        if (num > 3999) {
          return new Error('Number must be at most 3999')
        }
      }
      return true
    },
  }

  const romanRule: FormItemRule = {
    trigger: ['input', 'blur'],
    validator() {
      if (!romanInput.value) return true // Allow empty input
      if (!isValidRomanNumeral(romanInput.value)) {
        return new Error('Please enter a valid Roman numeral')
      }
      return true
    },
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

  return {
    arabicInput,
    romanInput,
    arabicInputStatus,
    romanInputStatus,
    arabicRule,
    romanRule,
  }
}
