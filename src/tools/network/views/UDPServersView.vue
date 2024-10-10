<template>
  <main>
    <BackButton />
    <n-h2 prefix="bar" align-text>UDP servers</n-h2>
    <n-list>
      <n-list-item v-for="server in servers" :key="server.name">
        <n-thing :title="server.name">
          <template v-if="server.about" #header-extra>
            <n-button text tag="a" :href="server.about" target="_blank">
              <template #icon>
                <n-icon><Info16Regular /></n-icon>
              </template>
            </n-button>
          </template>
          IPv4: {{ server.ipv4.join(' / ') }}
          <br />
          IPv6: {{ server.ipv6.join(' / ') }}
        </n-thing>
      </n-list-item>
    </n-list>
  </main>
</template>

<script setup lang="ts">
import { NH2, NList, NListItem, NThing, NButton, NIcon } from 'naive-ui'
import { useTitle, useDescription } from '@/composables/head'
import BackButton from '@/components/navigate/BackButton.vue'
import { Info16Regular } from '@vicons/fluent'

const servers = [
  {
    name: 'Cloudflare',
    ipv4: ['1.1.1.1', '1.0.0.1'],
    ipv6: ['2606:4700:4700::1111', '2606:4700:4700::1001'],
    about: 'https://1.1.1.1/dns/'
  },
  {
    name: 'Google',
    ipv4: ['8.8.8.8', '8.8.4.4'],
    ipv6: ['2001:4860:4860::8888', '2001:4860:4860::8844'],
    about: 'https://developers.google.com/speed/public-dns/'
  },
  {
    name: 'Quad9',
    ipv4: ['9.9.9.9', '149.112.112.112'],
    ipv6: ['2620:fe::fe', '2620:fe::9'],
    about: 'https://www.quad9.net/'
  },
  {
    name: 'OpenDNS',
    ipv4: ['208.67.222.222', '208.67.220.220'],
    ipv6: ['2620:0:ccc::2', '2620:0:ccd::2'],
    about: 'https://www.opendns.com/'
  },
  {
    name: 'AdGuard',
    ipv4: ['94.140.14.14', '94.140.15.15'],
    ipv6: ['2a10:50c0::ad1:ff', '2a10:50c0::ad2:ff'],
    about: 'https://adguard.com/'
  },
  {
    name: 'DNSPod',
    ipv4: ['119.29.29.29'],
    ipv6: ['2402:4e00::'],
    about: 'https://www.dnspod.cn/Products/publicdns'
  },
  {
    name: 'AliDNS',
    ipv4: ['223.5.5.5', '223.6.6.6'],
    ipv6: ['2400:3200::1', '2400:3200:baba::1'],
    about: 'https://www.alidns.com/'
  }
]

useTitle('UDP servers')
useDescription('DNS over UDP servers list.')
</script>
