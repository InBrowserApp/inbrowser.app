<template>
  <main>
    <BackButton />
    <n-h2 prefix="bar" align-text>Punycode Tool</n-h2>
    <PunycodeTool />
  </main>
</template>

<script setup lang="ts">
import { NH2 } from 'naive-ui'
import PunycodeTool from '../components/tools/punycode/PunycodeTool.vue'
import { useTitle, useDescription } from '@/composables/head'
import BackButton from '@/components/navigate/BackButton.vue'

useTitle('Punycode Tool')
useDescription('Punycode converter that complies to RFC 3492 and RFC 5891.')
</script>
