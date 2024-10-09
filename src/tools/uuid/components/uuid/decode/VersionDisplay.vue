<template>
  <span>
    {{ labels?.[version] || labelUnknown }}
  </span>
</template>

<script setup lang="ts">
defineProps<{
  version: number
}>()

const labels: Record<number, string> = {
  0: '0 (Nil UUID)',
  1: '1 (date-time and MAC address)',
  2: '2 (date-time and MAC address, DCE security version)',
  3: '3 (namespace name-based, MD5 hash)',
  4: '4 (random)',
  5: '5 (namespace name-based, SHA1 hash)'
}

const labelUnknown = 'unknown'
</script>
