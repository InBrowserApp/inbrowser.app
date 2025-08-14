<template>
  <n-code :code="resultString" word-wrap language="json" :hljs="hljs"></n-code>
</template>

<script setup lang="ts">
import { NCode } from 'naive-ui'
import type { DNSJSONResponse } from '@utils/dns'
import { computed } from 'vue'
import hljs from 'highlight.js/lib/core'
import json from 'highlight.js/lib/languages/json'

hljs.registerLanguage('json', json)

const props = defineProps<{
  result: DNSJSONResponse
}>()

const resultString = computed(() => JSON.stringify(props.result, null, 2))
</script>
