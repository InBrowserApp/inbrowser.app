<template>
  <main>
    <BackButton />
    <n-h1 prefix="bar" align-text>Decode UUID</n-h1>
    <UUIDInput v-model:uuid="uuid" />
    <n-h2 prefix="bar" align-text>Result</n-h2>
    <DecodeResult :uuid="uuid" />
    <div style="width: 100%" />
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { NH2, NH1 } from 'naive-ui'
import DecodeResult from '../components/uuid/decode/DecodeResult.vue'
import UUIDInput from '../components/misc/UUIDInput.vue'
import { v4 as uuidv4 } from 'uuid'
import BackButton from '@/components/navigate/BackButton.vue'
import { useHead } from '@vueuse/head'

useHead({
  title: 'Decode UUID | InBrowser.App',
  meta: [
    {
      name: 'description',
      content:
        'Decode your UUID, get the version, variant, and other information. Fully runs in your browser, no data is sent to the server. Fast, secure, and offline capable.'
    }
  ]
})

const uuid = ref(uuidv4())
</script>
