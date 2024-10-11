<template>
  <main>
    <BackButton />
    <n-h1 prefix="bar" align-text>{{ title }}</n-h1>
    <n-p>
      <slot></slot>
    </n-p>
  </main>
</template>

<script setup lang="ts">
import { NH1, NP } from 'naive-ui'
import BackButton from '@/components/navigate/BackButton.vue'

defineProps<{
  title: string
}>()
</script>
