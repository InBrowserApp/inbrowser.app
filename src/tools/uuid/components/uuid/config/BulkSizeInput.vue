<template>
  <n-form-item label="Size">
    <n-input-number v-model:value="size" />
  </n-form-item>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { NFormItem, NInputNumber } from 'naive-ui'

const props = defineProps<{
  size: number
}>()

const emit = defineEmits<{
  (event: 'update:size', size: number): void
}>()

const size = computed({
  get: () => props.size,
  set: (size: number) => emit('update:size', size)
})
</script>
