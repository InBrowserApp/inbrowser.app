<template>
  <NamespaceInput v-model:namespace="config.namespace" />
  <n-form-item label="Name" :show-feedback="false">
    <n-input v-model:value="config.name" type="text" />
  </n-form-item>
</template>

<script setup lang="ts">
import type { UUIDV35Config } from '../../../utils/uuid/config/UUIDV35Config'

import { NFormItem, NInput } from 'naive-ui'
import NamespaceInput from '../../../components/misc/NamespaceInput.vue'

const config = defineModel<UUIDV35Config>('config', {
  required: true
})
</script>
