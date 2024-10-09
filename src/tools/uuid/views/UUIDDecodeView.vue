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
import { useTitle, useDescription } from '@/composables/head'

useTitle('Decode UUID')
useDescription('Decode your UUID, get the version, variant, and other information.')

const uuid = ref(uuidv4())
</script>
