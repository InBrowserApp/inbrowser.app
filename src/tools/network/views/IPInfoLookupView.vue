<template>
  <ToolViewTemplate title="IP Info Lookup">
    <n-p>
      This tool retrieves detailed information about an IP address, aiding in network analysis and
      troubleshooting. Enter the IP, and get instant information including location, ISP, and
      associated domain name.
    </n-p>
    <n-h3 prefix="bar" align-text>IPv4 / IPv6 / Domain</n-h3>
    <IPInfoSearchInput />
  </ToolViewTemplate>
</template>

<script setup lang="ts">
import { NP, NH3 } from 'naive-ui'
import IPInfoSearchInput from '../components/tools/ip-info/IPInfoSearchInput.vue'
import ToolViewTemplate from '@/components/layouts/tool-view-template/ToolViewTemplate.vue'
import { useTitle, useDescription } from '@/composables/head'

useTitle('IP Info Lookup')
useDescription(
  'This tool retrieves detailed information about an IP address, aiding in network analysis and troubleshooting. Enter the IP, and get instant information including location, ISP, and associated domain name.'
)
</script>
