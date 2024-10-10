<template>
  <n-p>
    <n-checkbox v-model:checked="options.background"> Set a background color </n-checkbox>
  </n-p>

  <n-collapse-transition :show="options.background">
    <n-form-item label="Background Color">
      <n-color-picker
        :show-alpha="false"
        :show-preview="true"
        v-model:value="options.backgroundColor"
      />
    </n-form-item>

    <n-form-item label="Background Radius">
      <n-slider v-model:value="options.backgroundRadius" :step="1" />
    </n-form-item>
  </n-collapse-transition>

  <n-form-item label="Margin">
    <n-slider v-model:value="options.margin" :step="1" />
  </n-form-item>
</template>

<script setup lang="ts">
import { NColorPicker, NSlider, NCheckbox, NCollapseTransition, NFormItem, NP } from 'naive-ui'
import type { PWAOptions } from '../../../../../utils/favicon-generator/pwa'
import { useVModel } from '@vueuse/core'

const props = defineProps<{
  options: PWAOptions
}>()

const emit = defineEmits(['update:options'])

const options = useVModel(props, 'options', emit)
</script>
