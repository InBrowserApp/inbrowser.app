<template>
  <span>{{ normalized }}</span>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { normalize } from 'cidr-tools'

const props = defineProps<{
  ipcidr: string
}>()

const normalized = computed(() => {
  return normalize(props.ipcidr)
})
</script>
