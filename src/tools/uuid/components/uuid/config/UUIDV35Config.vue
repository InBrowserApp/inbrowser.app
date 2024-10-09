<template>
  <NamespaceInput v-model:namespace="config.namespace" />
  <n-form-item label="Name" :show-feedback="false">
    <n-input v-model:value="config.name" type="text" />
  </n-form-item>
</template>

<script setup lang="ts">
import type { UUIDV35Config } from '../../../utils/uuid/config/UUIDV35Config'

import { computed } from 'vue'
import { NFormItem, NInput } from 'naive-ui'
import NamespaceInput from '../../../components/misc/NamespaceInput.vue'

const props = defineProps<{
  config: UUIDV35Config
}>()

const emit = defineEmits<{
  (event: 'update:config', config: UUIDV35Config): void
}>()

const config = computed({
  get: () => props.config,
  set: (config: UUIDV35Config) => emit('update:config', config)
})
</script>
