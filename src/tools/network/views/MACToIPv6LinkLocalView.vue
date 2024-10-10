<template>
  <main>
    <BackButton />
    <n-h2 prefix="bar" align-text> MAC address to IPv6 Link Local Address Converter </n-h2>
    <n-p> This tool converts a MAC address to an IPv6 link local address. </n-p>
    <MACToIPv6LinkLocal />
  </main>
</template>

<script setup lang="ts">
import { NH2, NP } from 'naive-ui'
import { useHead } from '@vueuse/head'
import BackButton from '@/components/navigate/BackButton.vue'
import MACToIPv6LinkLocal from '../components/tools/mac-to-ipv6-link-local/MACToIPv6LinkLocal.vue'

useHead({
  title: 'MAC address to IPv6 Link Local Address Converter | IP InBrowser.App',
  meta: [
    {
      name: 'description',
      content: 'This tool converts a MAC address to an IPv6 link local address.'
    }
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://ip.inbrowser.app/tools/mac-to-ipv6-link-local'
    }
  ]
})
</script>
