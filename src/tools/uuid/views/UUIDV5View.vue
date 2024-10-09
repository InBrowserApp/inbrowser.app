<template>
  <main>
    <BackButton />
    <n-h1 prefix="bar" align-text>Version 5 UUID</n-h1>
    <UUIDV5Generator :config="config" />
    <n-h2 prefix="bar" align-text>Config</n-h2>
    <UUIDV35Config v-model:config="config" />
    <n-h2 prefix="bar" align-text>What is a version 5 UUID?</n-h2>
    <UUIDV5Description />
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { NH2, NH1 } from 'naive-ui'
import type { UUIDV35Config as UUIDV35ConfigType } from '../utils/uuid/config/UUIDV35Config'
import UUIDV5Description from '../components/uuid/description/UUIDV5Description.vue'
import UUIDV5Generator from '../components/uuid/generator/UUIDV5Generator.vue'
import UUIDV35Config from '../components/uuid/config/UUIDV35Config.vue'
import { v4 as uuidv4 } from 'uuid'
import BackButton from '@/components/navigate/BackButton.vue'
import { useHead } from '@vueuse/head'

useHead({
  title: 'Version 5 UUID Generator | InBrowser.App',
  meta: [
    {
      name: 'description',
      content:
        'Generate version 5 UUID. Fully runs in your browser, no data is sent to the server. Fast, secure, and offline capable.'
    }
  ]
})

const config = ref<UUIDV35ConfigType>({
  namespace: uuidv4(),
  name: 'example'
})
</script>
