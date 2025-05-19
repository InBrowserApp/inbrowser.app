<template>
  <span>
    {{ labels?.[variant] || labelUnknown }}
  </span>
</template>

<script setup lang="ts">
defineProps<{
  variant: number
}>()

const labels: Record<number, string> = {
  0: '0 (backwards compatibility with NCS)',
  1: '1 (RFC 4122/DCE 1.1 UUIDs)',
  2: '2 (reserved, Microsoft Corporation backward compatibility)',
  3: 'reserved',
}

const labelUnknown = 'unknown'
</script>
