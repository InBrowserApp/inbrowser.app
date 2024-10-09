<template>
  <n-form-item label="Size">
    <n-input-number v-model:value="size" />
  </n-form-item>
</template>

<script setup lang="ts">
import { NFormItem, NInputNumber } from 'naive-ui'

const size = defineModel<number>('size', {
  required: true
})
</script>
