<template>
  <n-code :code="resultString" word-wrap language="json"></n-code>
</template>

<script setup lang="ts">
import { NCode } from 'naive-ui'
import type { DNSJSONResponse } from '../../../../utils/dns/doh'
import { computed } from 'vue'

const props = defineProps<{
  result: DNSJSONResponse
}>()

const resultString = computed(() => JSON.stringify(props.result, null, 2))
</script>
