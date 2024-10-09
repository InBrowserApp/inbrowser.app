<template>
  <main>
    <BackButton />
    <n-h1 prefix="bar" align-text>Nil UUID</n-h1>
    <NilUUIDGenerator />
    <n-h2 prefix="bar" align-text>What is a Nil UUID</n-h2>
    <NilUUIDDescription />
  </main>
</template>

<script setup lang="ts">
import { NH2, NH1 } from 'naive-ui'
import NilUUIDDescription from '../components/uuid/description/NilUUIDDescription.vue'
import NilUUIDGenerator from '../components/uuid/generator/NilUUIDGenerator.vue'
import BackButton from '@/components/navigate/BackButton.vue'
import { useHead } from '@vueuse/head'

useHead({
  title: 'Nil UUID Generator | InBrowser.App',
  meta: [
    {
      name: 'description',
      content:
        'Generate Nil UUID. Fully runs in your browser, no data is sent to the server. Fast, secure, and offline capable.'
    }
  ]
})
</script>
