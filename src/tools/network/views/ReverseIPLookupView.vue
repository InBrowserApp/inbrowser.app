<template>
  <main>
    <BackButton />
    <n-h2 prefix="bar" align-text>Reverse IP Lookup</n-h2>
    <ReverseIPLookup />
  </main>
</template>

<script setup lang="ts">
import { NH2 } from 'naive-ui'
import ReverseIPLookup from '../components/tools/reverse-ip-lookup/ReverseIPLookup.vue'
import { useTitle, useDescription } from '@/composables/head'
import BackButton from '@/components/navigate/BackButton.vue'

useTitle('Reverse IP Lookup')
useDescription('Reverse IP Lookup.')
</script>
