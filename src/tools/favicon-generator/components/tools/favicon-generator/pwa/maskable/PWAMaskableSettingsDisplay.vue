<template>
  <n-form-item label="Background Color">
    <n-color-picker
      :show-alpha="false"
      :show-preview="true"
      v-model:value="options.maskableBackgroundColor"
    />
  </n-form-item>
  <n-form-item label="Margin">
    <n-slider v-model:value="options.maskableMargin" :step="1" />
  </n-form-item>
</template>

<script setup lang="ts">
import { NColorPicker, NSlider, NFormItem } from 'naive-ui'
import type { PWAOptions } from '../../../../../utils/favicon-generator/pwa'
import { useVModel } from '@vueuse/core'

const props = defineProps<{
  options: PWAOptions
}>()

const emit = defineEmits(['update:options'])

const options = useVModel(props, 'options', emit)
</script>
