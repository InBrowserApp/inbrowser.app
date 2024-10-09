<template>
  <n-form-item label="MAC Address" :show-feedback="false">
    <MACAddressInput v-model:address="config.macAddress" />
  </n-form-item>
</template>

<script setup lang="ts">
import MACAddressInput from '../../misc/MACAddressInput.vue'
import type { UUIDV1Config } from '../../../utils/uuid/config/UUIDV1Config'
import { NFormItem } from 'naive-ui'

const config = defineModel<UUIDV1Config>('config', {
  required: true
})
</script>
