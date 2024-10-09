<template>
  <main>
    <BackButton />
    <n-h1 prefix="bar" align-text>Bulk Version 4 UUID</n-h1>
    <BulkUUIDV4Generator :size="size" />
    <n-h2 prefix="bar" align-text>Config</n-h2>
    <BulkSizeInput v-model:size="size" />
    <n-h2 prefix="bar" align-text>What is a version 4 UUID?</n-h2>
    <UUIDV4Description />
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { NH2, NH1 } from 'naive-ui'
import UUIDV4Description from '../components/uuid/description/UUIDV4Description.vue'
import BulkUUIDV4Generator from '../components/uuid/generator/BulkUUIDV4Generator.vue'
import BulkSizeInput from '../components/uuid/config/BulkSizeInput.vue'
import BackButton from '@/components/navigate/BackButton.vue'
import { useHead } from '@vueuse/head'

useHead({
  title: 'Bulk Version 4 UUID Generator | InBrowser.App',
  meta: [
    {
      name: 'description',
      content:
        'Generate bulk version 4 UUIDs. Fully runs in your browser, no data is sent to the server. Fast, secure, and offline capable.'
    }
  ]
})

const size = ref(10)
</script>
