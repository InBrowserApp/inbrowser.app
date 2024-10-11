<template>
  <main>
    <BackButton />
    <n-h2 prefix="bar" align-text>CIDR Parser</n-h2>
    <n-p>
      "This tool parses CIDR notation to provide detailed information about IP addresses and
      networks, supporting both IPv4 and IPv6 formats. Enter the CIDR, and get the network address,
      broadcast address, and the range of usable IPs instantly.
    </n-p>
    <CIDRParse />
  </main>
</template>

<script setup lang="ts">
import { NH2, NP } from 'naive-ui'
import { useHead } from '@vueuse/head'
import BackButton from '@/components/navigate/BackButton.vue'
import CIDRParse from '../components/tools/cidr-parse/CIDRParse.vue'

useHead({
  title: 'CIDR Parser | IP InBrowser.App',
  meta: [
    {
      name: 'description',
      content:
        'This tool parses CIDR notation to provide detailed information about IP addresses and networks, supporting both IPv4 and IPv6 formats. Enter the CIDR, and get the network address, broadcast address, and the range of usable IPs instantly'
    }
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://ip.inbrowser.app/tools/cidr-parse'
    }
  ]
})
</script>
