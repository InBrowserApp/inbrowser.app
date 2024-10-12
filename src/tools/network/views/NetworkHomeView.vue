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
    to: '/tools/dns-lookup'
  },
  {
    icon: DocumentSearch16Regular,
    title: 'Reverse IP Lookup',
    to: '/tools/reverse-ip-lookup'
  },
  {
    icon: LanguageOutline,
    title: 'Punycode Tool',
    to: '/tools/punycode-tool'
  },
  {
    icon: Server20Regular,
    title: 'DoH servers',
    to: '/tools/doh-servers'
  },
  {
    icon: Server20Regular,
    title: 'DoT servers',
    to: '/tools/dot-servers'
  },
  {
    icon: Server20Regular,
    title: 'UDP servers',
    to: '/tools/udp-servers'
  },
  {
    icon: Person16Regular,
    title: 'My IP Address',
    to: '/tools/my-ip'
  },
  {
    icon: DocumentSearch16Regular,
    title: 'IP Info Lookup',
    to: '/tools/ip-info'
  },
  {
    icon: AutoFitWidth20Regular,
    title: 'CIDR Parser',
    to: '/tools/cidr-parse'
  },
  {
    icon: Merge24Regular,
    title: 'CIDRs Merger & Excluder',
    to: '/tools/cidr-merge-exclude'
  },
  {
    icon: ArrowAutofitWidth20Regular,
    title: 'IP Range to CIDR Converter',
    to: '/tools/ip-range-to-cidr'
  },
  {
    icon: TextGrammarCheckmark20Regular,
    title: 'IP/CIDR Normalizer',
    to: '/tools/ip-cidr-normalize'
  },
  {
    icon: ArrowStepInRight24Regular,
    title: 'MAC address to IPv6 Link Local Address Converter',
    to: '/tools/mac-to-ipv6-link-local'
  }
]
</script>
