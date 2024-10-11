<template>
  <n-form-item label="CIDR" :rule="rule" :show-label="false">
    <n-input v-model:value="cidr" placeholder="10.0.0.0/24 or 2001:db8::/32" />
  </n-form-item>
</template>

<script setup lang="ts">
import { NInput, NFormItem, type FormItemRule } from 'naive-ui'
import isCidr from 'is-cidr'
import { ref, watch } from 'vue'

const cidr = ref('')
const emit = defineEmits(['update:cidr'])

const rule: FormItemRule = {
  trigger: ['input', 'change', 'blur'],
  validator() {
    if (isCidr(cidr.value) === 0) {
      return new Error('Invalid CIDR')
    }
  }
}

watch(cidr, (value: string) => {
  if (isCidr(value) !== 0) {
    emit('update:cidr', value)
  } else {
    emit('update:cidr', '')
  }
})
</script>
