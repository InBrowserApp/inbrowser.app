<template>
  <n-dropdown trigger="hover" :options="options" @select="handleSelect">
    <n-button text>
      <template #icon>
        <n-icon :component="ArrowDownload16Regular" />
      </template>
      Download
    </n-button>
  </n-dropdown>
</template>

<script setup lang="ts">
import { NIcon, NButton, NDropdown } from 'naive-ui'
import ArrowDownload16Regular from '@vicons/fluent/ArrowDownload16Regular'

const props = defineProps<{
  uuids: string[]
}>()

const options = [
  {
    label: 'TXT',
    key: 'txt'
  },
  {
    label: 'CSV',
    key: 'csv'
  },
  {
    label: 'JSON',
    key: 'json'
  }
]

const handleSelect = (key: string | number) => {
  if (key === 'txt') {
    downloadTxt()
  } else if (key === 'csv') {
    downloadCsv()
  } else if (key === 'json') {
    downloadJson()
  }
}

function downloadFile(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = filename
  a.click()
  URL.revokeObjectURL(url)
  a.remove()
}

function downloadTxt() {
  const blob = new Blob([props.uuids.join('\n')], { type: 'text/plain' })
  downloadFile(blob, 'uuids.txt')
}

function downloadCsv() {
  const blob = new Blob(['uuid,\n' + props.uuids.join(',\n')], {
    type: 'text/csv'
  })
  downloadFile(blob, 'uuids.csv')
}

function downloadJson() {
  const blob = new Blob([JSON.stringify(props.uuids)], {
    type: 'application/json'
  })
  downloadFile(blob, 'uuids.json')
}
</script>
