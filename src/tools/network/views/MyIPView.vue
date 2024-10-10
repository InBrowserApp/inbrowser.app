<template>
  <main>
    <BackButton />
    <n-h2 prefix="bar" align-text>My IP Address</n-h2>
    <n-p>
      This tool instantly displays your current IP address along with additional information such as
      location and ISP, aiding in network configuration and troubleshooting. Simply open the tool
      and your IP information is immediately presented.
    </n-p>
    <MyIP />
  </main>
</template>

<script setup lang="ts">
import { NH2, NP } from 'naive-ui'
import { useHead } from '@vueuse/head'
import BackButton from '@/components/navigate/BackButton.vue'
import MyIP from '../components/tools/my-ip/MyIP.vue'

useHead({
  title: 'My IP Address | IP InBrowser.App',
  meta: [
    {
      name: 'description',
      content:
        'This tool instantly displays your current IP address along with additional information such as location and ISP, aiding in network configuration and troubleshooting. Simply open the tool and your IP information is immediately presented.'
    }
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://ip.inbrowser.app/tools/my-ip'
    }
  ]
})
</script>
