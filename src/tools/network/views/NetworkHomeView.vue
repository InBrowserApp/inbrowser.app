<template>
  <main>
    <BackButton />
    <n-h2 prefix="bar" align-text>Network Tools</n-h2>
    <n-space vertical>
      <router-link to="/tools/network/dns-lookup" #="{ navigate, href }" custom>
        <n-button tag="a" :href="href" @click="navigate" text>
          <template #icon>
            <n-icon :component="DocumentSearch16Regular" />
          </template>
          DNS Lookup
        </n-button>
      </router-link>
      <router-link to="/tools/network/reverse-ip-lookup" #="{ navigate, href }" custom>
        <n-button tag="a" :href="href" @click="navigate" text>
          <template #icon>
            <n-icon :component="DocumentSearch16Regular" />
          </template>
          Reverse IP Lookup
        </n-button>
      </router-link>
      <router-link to="/tools/network/punycode-tool" #="{ navigate, href }" custom>
        <n-button tag="a" :href="href" @click="navigate" text>
          <template #icon>
            <n-icon :component="LanguageOutline" />
          </template>
          Punycode Tool
        </n-button>
      </router-link>
      <router-link to="/tools/network/doh-servers" #="{ navigate, href }" custom>
        <n-button tag="a" :href="href" @click="navigate" text>
          <template #icon>
            <n-icon :component="Server20Regular" />
          </template>
          DoH servers
        </n-button>
      </router-link>
      <router-link to="/tools/network/dot-servers" #="{ navigate, href }" custom>
        <n-button tag="a" :href="href" @click="navigate" text>
          <template #icon>
            <n-icon :component="Server20Regular" />
          </template>
          DoT servers
        </n-button>
      </router-link>
      <router-link to="/tools/network/udp-servers" #="{ navigate, href }" custom>
        <n-button tag="a" :href="href" @click="navigate" text>
          <template #icon>
            <n-icon :component="Server20Regular" />
          </template>
          UDP servers
        </n-button>
      </router-link>
    </n-space>
  </main>
</template>

<script setup lang="ts">
import { NH2, NButton, NIcon, NSpace } from 'naive-ui'
import { DocumentSearch16Regular, Server20Regular } from '@vicons/fluent'
import { LanguageOutline } from '@vicons/ionicons5'
import { useTitle, useDescription } from '@/composables/head'
import BackButton from '@/components/navigate/BackButton.vue'

useTitle('Network Tools')
useDescription('Network tools.')
</script>
