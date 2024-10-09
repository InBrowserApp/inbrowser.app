<template>
  <n-form-item label="MAC Address" :show-feedback="false">
    <MACAddressInput v-model:address="config.macAddress" />
  </n-form-item>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import MACAddressInput from '../../misc/MACAddressInput.vue'
import type { UUIDV1Config } from '../../../utils/uuid/config/UUIDV1Config'
import { NFormItem } from 'naive-ui'

const props = defineProps<{
  config: UUIDV1Config
}>()

const emit = defineEmits<{
  (event: 'update:config', config: UUIDV1Config): void
}>()

const config = computed({
  get: () => props.config,
  set: (config: UUIDV1Config) => emit('update:config', config)
})
</script>
