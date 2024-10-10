<template>
  <n-form-item label="Type">
    <n-select v-model:value="types" :options="options" multiple />
  </n-form-item>
</template>

<script lang="ts" setup>
import { NSelect, NFormItem } from 'naive-ui'
import { useVModel } from '@vueuse/core'
import { DNSRecordTypes } from '../../../../utils/dns/common/record-type'
import { computed } from 'vue'

const props = defineProps<{
  types: string[]
}>()

const emit = defineEmits(['update:type'])

const types = useVModel(props, 'types', emit)

const options = computed(() => {
  const DNSRecordOptions = Object.entries(DNSRecordTypes).map(([label, value]) => ({
    label: `${label} / ${value}`,
    value: value
  }))

  return DNSRecordOptions
})
</script>
