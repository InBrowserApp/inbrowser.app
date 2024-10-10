<template>
  <main>
    <BackButton />
    <n-h2 prefix="bar" align-text>IP/CIDR Normalizer</n-h2>
    <n-p
      >This tool normalizes IP addresses and CIDR notation, supporting both IPv4 and IPv6 formats.
      Enter the IP or CIDR, and get a standardized format instantly.</n-p
    >
    <IPCIDRNormalize />
  </main>
</template>

<script setup lang="ts">
import { NH2, NP } from 'naive-ui'
import { useHead } from '@vueuse/head'
import BackButton from '@/components/navigate/BackButton.vue'
import IPCIDRNormalize from '../components/tools/ip-cidr-normalize/IPCIDRNormalize.vue'

useHead({
  title: 'IP/CIDR Normalizer | IP InBrowser.App',
  meta: [
    {
      name: 'description',
      content:
        'This tool normalizes IP addresses and CIDR notation, supporting both IPv4 and IPv6 formats. Enter the IP or CIDR, and get a standardized format instantly.'
    }
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://ip.inbrowser.app/tools/ip-cidr-normalize'
    }
  ]
})
</script>
