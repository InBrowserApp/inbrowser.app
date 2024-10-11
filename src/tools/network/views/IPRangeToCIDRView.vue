<template>
  <main>
    <BackButton />
    <n-h2 prefix="bar" align-text>IP Range to CIDR Converter</n-h2>
    <n-p>
      This tool converts IP ranges to CIDR notation, supporting both IPv4 and IPv6 addresses. Enter
      the IP range and get the CIDR notation instantly.
    </n-p>

    <IPRangeToCIDR />
  </main>
</template>

<script setup lang="ts">
import { NH2, NP } from 'naive-ui'
import { useHead } from '@vueuse/head'
import BackButton from '@/components/navigate/BackButton.vue'
import IPRangeToCIDR from '../components/tools/ip-range-to-cidr/IPRangeToCIDR.vue'

useHead({
  title: 'IP Range to CIDR | IP InBrowser.App',
  meta: [
    {
      name: 'description',
      content:
        'This tool converts IP ranges to CIDR notation, supporting both IPv4 and IPv6 addresses. Enter the IP range and get the CIDR notation instantly.'
    }
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://ip.inbrowser.app/tools/ip-range-to-cidr'
    }
  ]
})
</script>
