<template>
  <main>
    <BackButton />
    <n-h1 prefix="bar" align-text>Favicon Generator</n-h1>
    <FaviconGenerator />
  </main>
</template>

<script setup lang="ts">
import { NH1 } from 'naive-ui'
import BackButton from '@/components/navigate/BackButton.vue'
import FaviconGenerator from '../components/tools/favicon-generator/FaviconGenerator.vue'
import { useTitle, useDescription } from '@/composables/head'

useTitle('Favicon Generator')
useDescription('Generate Favicon.')
</script>
