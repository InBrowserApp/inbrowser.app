<template>
  <n-form-item label="IP/CIDR" :rule="rule" :show-label="false">
    <n-input v-model:value="ipcidr" placeholder="Input IP/CIDR" />
  </n-form-item>
</template>

<script setup lang="ts">
import { NInput, NFormItem, type FormItemRule } from 'naive-ui'
import isCidr from 'is-cidr'
import { isIP } from 'is-ip'
import { ref, watch } from 'vue'

const ipcidr = ref('')
const emit = defineEmits(['update:ipcidr'])

const rule: FormItemRule = {
  trigger: ['input', 'change', 'blur'],
  validator() {
    if (isCidr(ipcidr.value) === 0 && !isIP(ipcidr.value)) {
      return new Error('Invalid IP/CIDR')
    }
  }
}

watch(ipcidr, (value: string) => {
  if (isCidr(value) !== 0 || isIP(value)) {
    emit('update:ipcidr', value)
  } else {
    emit('update:ipcidr', '')
  }
})
</script>
