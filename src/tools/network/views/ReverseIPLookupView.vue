<template>
  <ToolViewTemplate title="Reverse IP Lookup">
    <n-p> Reverse IP Lookup. </n-p>
    <ReverseIPLookup />
  </ToolViewTemplate>
</template>

<script setup lang="ts">
import { NP } from 'naive-ui'
import ReverseIPLookup from '../components/tools/reverse-ip-lookup/ReverseIPLookup.vue'
import { useTitle, useDescription } from '@/composables/head'
import ToolViewTemplate from '@/components/layouts/tool-view-template/ToolViewTemplate.vue'

useTitle('Reverse IP Lookup')
useDescription('Reverse IP Lookup.')
</script>
