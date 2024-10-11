<template>
  <ToolViewTemplate title="DNS Lookup">
    <DNSLookup />
  </ToolViewTemplate>
</template>

<script setup lang="ts">
import DNSLookup from '../components/tools/dns-lookup/DNSLookup.vue'
import { useTitle, useDescription } from '@/composables/head'
import ToolViewTemplate from '@/components/layouts/tool-view-template/ToolViewTemplate.vue'

useTitle('DNS Lookup')
useDescription('Lookup DNS records.')
</script>
