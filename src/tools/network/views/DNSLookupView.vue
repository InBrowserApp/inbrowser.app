<template>
  <main>
    <BackButton />
    <n-h2 prefix="bar" align-text>DNS Lookup</n-h2>
    <DNSLookup />
  </main>
</template>

<script setup lang="ts">
import { NH2 } from 'naive-ui'
import DNSLookup from '../components/tools/dns-lookup/DNSLookup.vue'
import BackButton from '@/components/navigate/BackButton.vue'
import { useTitle, useDescription } from '@/composables/head'

useTitle('DNS Lookup')
useDescription('Lookup DNS records.')
</script>
