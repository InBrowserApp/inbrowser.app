<template>
  <DNSQuery @update:results="results = $event" />

  <n-p v-for="result in results" :key="result.question.type">
    <DNSResult :result="result.result" v-if="result.result" :title="result.question.type" />
  </n-p>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import DNSQuery from './query/DNSQuery.vue'
import DNSResult from './result/DNSResult.vue'
import type { DNSJSONResponse } from '../../../utils/dns/doh'
import { NP } from 'naive-ui'

const results = ref<{ question: { name: string; type: string }; result: DNSJSONResponse }[] | null>(
  null
)
</script>
