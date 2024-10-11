<template>
  <main>
    <BackButton />
    <n-h2 prefix="bar" align-text>CIDRs Merger & Excluder</n-h2>
    <n-p
      >This tool efficiently merges multiple CIDR blocks and can exclude specified CIDRs, supporting
      both IPv4 and IPv6 formats. Enter the CIDRs to be merged or excluded, and get the resulting
      CIDR blocks instantly.</n-p
    >
    <CIDRMergeExclude />
  </main>
</template>

<script setup lang="ts">
import { NH2, NP } from 'naive-ui'
import { useHead } from '@vueuse/head'
import BackButton from '@/components/navigate/BackButton.vue'
import CIDRMergeExclude from '../components/tools/cidr-merge-exclude/CIDRMergeExclude.vue'

useHead({
  title: 'CIDRs Merger & Excluder | IP InBrowser.App',
  meta: [
    {
      name: 'description',
      content:
        'This tool efficiently merges multiple CIDR blocks and can exclude specified CIDRs, supporting both IPv4 and IPv6 formats. Enter the CIDRs to be merged or excluded, and get the resulting CIDR blocks instantly.'
    }
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://ip.inbrowser.app/tools/cidr-merge-exclude'
    }
  ]
})
</script>
