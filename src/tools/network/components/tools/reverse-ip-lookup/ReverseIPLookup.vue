<template>
  <DNSQuery @update:result="result = $event" />

  <DNSResult :result="result" v-if="result" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import DNSQuery from './query/DNSQuery.vue'
import DNSResult from '../dns-lookup/result/DNSResult.vue'
import type { DNSJSONResponse } from '../../../utils/dns/doh'

const result = ref<DNSJSONResponse | null>(null)
</script>
