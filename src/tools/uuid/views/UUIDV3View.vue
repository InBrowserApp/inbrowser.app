<template>
  <main>
    <BackButton />
    <n-h1 prefix="bar" align-text>Version 3 UUID</n-h1>
    <UUIDV3Generator :config="config" />
    <n-h2 prefix="bar" align-text>Config</n-h2>
    <UUIDV35Config v-model:config="config" />
    <n-h2 prefix="bar" align-text>What is a version 3 UUID?</n-h2>
    <UUIDV3Description />
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { NH2, NH1 } from 'naive-ui'
import type { UUIDV35Config as UUIDV35ConfigType } from '../utils/uuid/config/UUIDV35Config'
import UUIDV3Description from '../components/uuid/description/UUIDV3Description.vue'
import UUIDV3Generator from '../components/uuid/generator/UUIDV3Generator.vue'
import UUIDV35Config from '../components/uuid/config/UUIDV35Config.vue'
import { v4 as uuidv4 } from 'uuid'
import BackButton from '@/components/navigate/BackButton.vue'
import { useHead } from '@vueuse/head'

useHead({
  title: 'Version 3 UUID Generator | InBrowser.App',
  meta: [
    {
      name: 'description',
      content:
        'Generate version 3 UUID. Fully runs in your browser, no data is sent to the server. Fast, secure, and offline capable.'
    }
  ]
})

const config = ref<UUIDV35ConfigType>({
  namespace: uuidv4(),
  name: 'example'
})
</script>
