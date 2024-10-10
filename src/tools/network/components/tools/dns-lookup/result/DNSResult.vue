<template>
  <n-h3 prefix="bar" align-text>{{ title ?? 'Result' }}</n-h3>

  <DNSResultMetadata :result="result" />
  <DNSResultTable :result="result" style="margin: 1em 0 1em 0" />

  <n-collapse>
    <n-collapse-item title="Raw Result" name="raw-result">
      <DNSRawResult :result="result" />
    </n-collapse-item>
  </n-collapse>
</template>

<script lang="ts" setup>
import { NCollapse, NCollapseItem, NH3 } from 'naive-ui'
import DNSRawResult from './DNSRawResult.vue'
import DNSResultMetadata from './DNSResultMetadata.vue'
import DNSResultTable from './DNSResultTable.vue'
import type { DNSJSONResponse } from '../../../../utils/dns/doh'

defineProps<{
  result: DNSJSONResponse
  title?: string
}>()
</script>
