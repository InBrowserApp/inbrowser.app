<template>
  <n-form-item label="Domain" :rule="rule">
    <n-input v-model:value="domain" type="text" placeholder="example.com" />
  </n-form-item>
</template>

<script lang="ts" setup>
import { NInput, NFormItem, type FormItemRule } from 'naive-ui'
import { useVModel } from '@vueuse/core'

const props = defineProps({
  domain: {
    type: String,
    required: true
  }
})

const emit = defineEmits(['update:domain'])

const domain = useVModel(props, 'domain', emit)

const rule: FormItemRule = {
  trigger: ['blur', 'input', 'change'],
  validator: () => {
    if (!domain.value) {
      return new Error('Domain is required')
    }
    if (!domain.value.match(/^[a-z0-9-]+(\.[a-z0-9-]+)*\.[a-z]+$/i)) {
      return new Error('Invalid domain')
    }
  }
}
</script>
