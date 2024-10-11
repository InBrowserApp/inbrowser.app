<template>
  <n-form-item label="MAC" :rule="rule">
    <n-input v-model:value="mac" placeholder="00-B0-D0-63-C2-26" />
  </n-form-item>
  <n-form-item label="Network Interface">
    <n-input v-model:value="networkInterface" placeholder="eth0" />
  </n-form-item>
</template>

<script setup lang="ts">
import { NInput, NFormItem, type FormItemRule } from 'naive-ui'
import { ref, watch } from 'vue'
import { isValidMacAddress } from '../../../utils/mac'

const mac = ref('')
const networkInterface = ref('')
const emit = defineEmits(['update:mac', 'update:networkInterface'])

const rule: FormItemRule = {
  trigger: ['input', 'change', 'blur'],
  validator() {
    if (!isValidMacAddress(mac.value)) {
      return new Error('Invalid MAC')
    }
  }
}

watch(mac, (value: string) => {
  if (isValidMacAddress(mac.value)) {
    emit('update:mac', value)
  } else {
    emit('update:mac', '')
  }
})

watch(networkInterface, (value: string) => {
  emit('update:networkInterface', value)
})
</script>
