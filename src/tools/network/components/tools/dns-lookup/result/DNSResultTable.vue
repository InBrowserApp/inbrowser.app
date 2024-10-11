<template>
  <n-data-table bordered :columns="columns" :data="data" />
</template>

<script lang="ts" setup>
import { NDataTable } from 'naive-ui'
import type { DNSJSONResponse } from '../../../../utils/dns/doh'
import { computed, h } from 'vue'
import { DNSRecordTypes } from '../../../../utils/dns/common/record-type'
import DNSResultData from './DNSResultData.vue'

const props = defineProps<{
  result: DNSJSONResponse
}>()

interface DataRow {
  name: string
  type: number
  TTL: number
  data: string
}

const columns = computed(() => [
  {
    title: 'Name',
    key: 'name'
  },
  {
    title: 'Type',
    key: 'type',
    render: (row: DataRow) => h('span', DNSRecordTypes?.[row.type] ?? 'Unknown')
  },
  {
    title: 'TTL',
    key: 'TTL'
  },
  {
    title: 'Data',
    key: 'data',
    render: (row: DataRow) => h(DNSResultData, { data: row.data })
  }
])

const data = computed<DataRow[]>(() => {
  return (props.result?.Answer ?? []).map((answer) => ({
    name: answer.name,
    type: answer.type,
    TTL: answer.TTL,
    data: answer.data
  }))
})
</script>
