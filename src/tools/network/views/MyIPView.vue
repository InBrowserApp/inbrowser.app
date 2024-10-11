<template>
  <ToolViewTemplate title="My IP Address">
    <n-p>
      This tool instantly displays your current IP address along with additional information such as
      location and ISP, aiding in network configuration and troubleshooting. Simply open the tool
      and your IP information is immediately presented.
    </n-p>
    <MyIP />
  </ToolViewTemplate>
</template>

<script setup lang="ts">
import { NP } from 'naive-ui'
import MyIP from '../components/tools/my-ip/MyIP.vue'
import { useTitle, useDescription } from '@/composables/head'
import ToolViewTemplate from '@/components/layouts/tool-view-template/ToolViewTemplate.vue'

useTitle('My IP Address')
useDescription(
  'This tool instantly displays your current IP address along with additional information such as location and ISP, aiding in network configuration and troubleshooting. Simply open the tool and your IP information is immediately presented.'
)
</script>
