<template>
  <ToolViewTemplate title="DoH servers">
    <n-list>
      <n-list-item v-for="server in servers" :key="server.name">
        <n-thing :title="server.name">
          <template #header-extra>
            <n-button text tag="a" :href="server.about" target="_blank">
              <template #icon>
                <n-icon><Info16Regular /></n-icon>
              </template>
            </n-button>
          </template>
          {{ server.url }}
        </n-thing>
      </n-list-item>
    </n-list>
  </ToolViewTemplate>
</template>

<script setup lang="ts">
import { NList, NListItem, NThing, NButton, NIcon } from 'naive-ui'
import { Info16Regular } from '@vicons/fluent'
import { useTitle, useDescription } from '@/composables/head'
import ToolViewTemplate from '@/components/layouts/tool-view-template/ToolViewTemplate.vue'

const servers = [
  {
    name: 'Cloudflare',
    url: 'https://cloudflare-dns.com/dns-query',
    about: 'https://developers.cloudflare.com/1.1.1.1/encryption/dns-over-https/'
  },
  {
    name: 'Google',
    url: 'https://dns.google/dns-query',
    about: 'https://developers.google.com/speed/public-dns/docs/doh'
  },
  {
    name: 'Quad9',
    url: 'https://dns.quad9.net/dns-query',
    about: 'https://www.quad9.net/doh-quad9-dns-servers/'
  },
  {
    name: 'CleanBrowsing (Family Filter)',
    url: 'https://doh.cleanbrowsing.org/doh/family-filter/',
    about: 'https://cleanbrowsing.org/help/docs/dnsoverhttps/'
  },
  {
    name: 'AdGuard',
    url: 'https://dns.adguard.com/dns-query',
    about: 'https://adguard.com/en/blog/adguard-dns-announcement/'
  },
  {
    name: 'AdGuard Family',
    url: 'https://dns-family.adguard.com/dns-query',
    about: 'https://adguard.com/en/blog/adguard-dns-announcement/'
  },
  {
    name: 'OpenDNS',
    url: 'https://doh.opendns.com/dns-query',
    about:
      'https://support.opendns.com/hc/en-us/articles/360038086532-Using-DNS-over-HTTPS-DoH-with-OpenDNS'
  },
  {
    name: 'AliDNS',
    url: 'https://dns.alidns.com/dns-query',
    about: 'https://alidns.com/articles/6018321800a44d0e45e90d71'
  },
  {
    name: 'DNS.SB',
    url: 'https://doh.dns.sb/dns-query',
    about: 'https://dns.sb/'
  },
  {
    name: 'Neustar',
    url: 'https://doh.neustar.biz/dns-query',
    about: 'https://vercara.com/resources/ultradns-public-faq'
  },
  {
    name: 'Yandex',
    url: 'https://dns.yandex.com/dns-query',
    about: 'https://dns.yandex.com/'
  },
  {
    name: 'CIRA Canadian Shield',
    url: 'https://doh.cleanbrowsing.org/doh/cira',
    about: 'https://www.cira.ca/cybersecurity-services/canadian-shield'
  },
  {
    name: 'BlahDNS',
    url: 'https://doh.blahdns.com/dns-query',
    about: 'https://blahdns.com/'
  },
  {
    name: 'UncensoredDNS',
    url: 'https://doh.uncensoreddns.org/dns-query',
    about: 'https://blog.uncensoreddns.org/'
  },
  {
    name: 'LibreDNS',
    url: 'https://doh.libredns.gr/dns-query',
    about: 'https://libredns.gr/'
  },
  {
    name: 'Digitale Gesellschaft',
    url: 'https://dns.digitale-gesellschaft.ch/dns-query',
    about: 'https://www.digitale-gesellschaft.ch/dns/'
  },
  {
    name: 'DNSPod',
    url: 'https://doh.pub/dns-query',
    about: 'https://docs.dnspod.cn/public-dns/dot-doh/'
  }
]

useTitle('DoH servers')
useDescription('DNS over HTTPS (DoH) servers list.')
</script>
