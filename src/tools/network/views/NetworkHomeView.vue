<template>
  <ToolViewTemplate title="Network Tools">
    <ToolsList :tools="tools" />
  </ToolViewTemplate>
</template>

<script setup lang="ts">
import { DocumentSearch16Regular, Server20Regular } from '@vicons/fluent'
import {
  Person16Regular,
  AutoFitWidth20Regular,
  Merge24Regular,
  ArrowAutofitWidth20Regular,
  TextGrammarCheckmark20Regular,
  ArrowStepInRight24Regular
} from '@vicons/fluent'
import { LanguageOutline } from '@vicons/ionicons5'
import { useTitle, useDescription } from '@/composables/head'
import ToolViewTemplate from '@/components/layouts/tool-view-template/ToolViewTemplate.vue'
import { ToolsList, type ToolItem } from '@/components/layouts/tools-list'

useTitle('Network Tools')
useDescription('Network tools.')

const tools: ToolItem[] = [
  {
    icon: DocumentSearch16Regular,
    title: 'DNS Lookup',
    to: '/tools/network/dns-lookup'
  },
  {
    icon: DocumentSearch16Regular,
    title: 'Reverse IP Lookup',
    to: '/tools/network/reverse-ip-lookup'
  },
  {
    icon: LanguageOutline,
    title: 'Punycode Tool',
    to: '/tools/network/punycode-tool'
  },
  {
    icon: Server20Regular,
    title: 'DoH servers',
    to: '/tools/network/doh-servers'
  },
  {
    icon: Server20Regular,
    title: 'DoT servers',
    to: '/tools/network/dot-servers'
  },
  {
    icon: Server20Regular,
    title: 'UDP servers',
    to: '/tools/network/udp-servers'
  },
  {
    icon: Person16Regular,
    title: 'My IP Address',
    to: '/tools/network/my-ip'
  },
  {
    icon: DocumentSearch16Regular,
    title: 'IP Info Lookup',
    to: '/tools/network/ip-info'
  },
  {
    icon: AutoFitWidth20Regular,
    title: 'CIDR Parser',
    to: '/tools/network/cidr-parse'
  },
  {
    icon: Merge24Regular,
    title: 'CIDRs Merger & Excluder',
    to: '/tools/network/cidr-merge-exclude'
  },
  {
    icon: ArrowAutofitWidth20Regular,
    title: 'IP Range to CIDR Converter',
    to: '/tools/network/ip-range-to-cidr'
  },
  {
    icon: TextGrammarCheckmark20Regular,
    title: 'IP/CIDR Normalizer',
    to: '/tools/network/ip-cidr-normalize'
  },
  {
    icon: ArrowStepInRight24Regular,
    title: 'MAC address to IPv6 Link Local Address Converter',
    to: '/tools/network/mac-to-ipv6-link-local'
  }
]
</script>
