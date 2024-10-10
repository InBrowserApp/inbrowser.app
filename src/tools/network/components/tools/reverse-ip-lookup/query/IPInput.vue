<template>
  <n-form-item label="IP" :rule="rule">
    <n-input v-model:value="ip" type="text" placeholder="8.8.8.8" />
  </n-form-item>
</template>

<script lang="ts" setup>
import { NInput, NFormItem, type FormItemRule } from 'naive-ui'
import { useVModel } from '@vueuse/core'
import { isIP } from 'is-ip'

const props = defineProps({
  ip: {
    type: String,
    required: true
  }
})

const emit = defineEmits(['update:ip'])

const ip = useVModel(props, 'ip', emit)

const rule: FormItemRule = {
  trigger: ['blur', 'input', 'change'],
  validator: () => {
    if (!ip.value) {
      return new Error('IP address is required')
    }

    if (isIP(ip.value)) {
      return true
    } else {
      return new Error('Invalid IP address')
    }
  }
}
</script>
