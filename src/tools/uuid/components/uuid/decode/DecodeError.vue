<template>
  Failed to decode UUID <n-text code> {{ uuid }}</n-text
  >.
</template>

<script setup lang="ts">
import { NText } from 'naive-ui'

defineProps<{
  uuid: string
}>()
</script>
