<template>
  <n-form :model="model">
    <n-dynamic-input
      v-model:value="model.cidrs"
      item-style="margin-bottom: 0;"
      placeholder="10.0.0.0/24 or 2001:db8::/32"
      :on-create="onCreate"
      #="{ index, value }"
    >
      <n-form-item
        ignore-path-change
        :rule="rule"
        :path="`cidrs[${index}]`"
        :show-label="false"
        style="width: 100%"
      >
        <n-input v-model:value="model.cidrs[index]" placeholder="10.0.0.0/24 or 2001:db8::/32" />
      </n-form-item>
    </n-dynamic-input>
  </n-form>
</template>

<script setup lang="ts">
import { NForm, NDynamicInput, NInput, NFormItem, type FormItemRule } from 'naive-ui'
import { ref } from 'vue'
import isCidr from 'is-cidr'
import { watchDeep } from '@vueuse/core'

const emit = defineEmits(['update:cidrs'])

const model = ref({
  cidrs: []
})

const rule: FormItemRule = {
  trigger: ['input', 'change', 'blur'],
  validator(rule: unknown, value: string) {
    if (isCidr(value) === 0) {
      return new Error('Invalid CIDR')
    }
  }
}

const onCreate = () => {
  return ''
}

watchDeep(model, () => {
  const cidrs = model.value.cidrs
  // all cidrs are valid
  if (cidrs.every((cidr) => isCidr(cidr) !== 0)) {
    emit('update:cidrs', cidrs)
    return
  } else {
    emit('update:cidrs', undefined)
    return
  }
})
</script>
