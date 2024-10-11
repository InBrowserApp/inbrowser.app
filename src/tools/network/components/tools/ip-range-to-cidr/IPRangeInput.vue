<template>
  <n-form-item label="IP Range" :rule="rule" :show-label="false">
    <n-input pair separator="-" :placeholder="placeholder" clearable v-model:value="ipRange" />
  </n-form-item>
</template>

<script setup lang="ts">
import { NInput, NFormItem, type FormItemRule } from 'naive-ui'
import { ref, watch } from 'vue'
import { isIP } from 'is-ip'
// @ts-ignore
import { parseIp } from 'ip-bigint'

const placeholder = ['Start IP', 'End IP'] as [string, string]
const ipRange = ref<[string, string]>(['', ''])
const emit = defineEmits(['update:ipRange'])
const rule: FormItemRule = {
  trigger: ['input', 'change', 'blur'],
  validator() {
    if (!isIP(ipRange.value[0]) && !isIP(ipRange.value[1])) {
      return new Error('Invalid IP Range')
    }

    if (!isIP(ipRange.value[0])) {
      return new Error('Invalid Start IP Address')
    }
    if (!isIP(ipRange.value[1])) {
      return new Error('Invalid End IP Address')
    }

    const ip1Obj = parseIp(ipRange.value[0])
    const ip2Obj = parseIp(ipRange.value[1])
    if (ip1Obj.version !== ip2Obj.version) {
      return new Error('IP version mismatch')
    }
    if (ip1Obj.number > ip2Obj.number) {
      return new Error('Start IP must be smaller than End IP')
    }
  }
}

watch(ipRange, (value: [string, string]) => {
  if (isIP(value[0]) && isIP(value[1])) {
    const ip1Obj = parseIp(value[0])
    const ip2Obj = parseIp(value[1])
    if (ip1Obj.version === ip2Obj.version && ip1Obj.number <= ip2Obj.number) {
      emit('update:ipRange', value)
      return
    }
  }
  emit('update:ipRange', ['', ''])
})
</script>
