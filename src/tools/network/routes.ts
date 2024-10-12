import type { RouteRecordRaw } from 'vue-router'
import {
  DocumentSearch16Regular,
  Server20Regular,
  Person16Regular,
  AutoFitWidth20Regular,
  Merge24Regular,
  ArrowAutofitWidth20Regular,
  TextGrammarCheckmark20Regular,
  ArrowStepInRight24Regular
} from '@vicons/fluent'
import { LanguageOutline } from '@vicons/ionicons5'
import { messages as DNSLookupLocales } from './locales/DNSLookupView.vue.locales'
import { messages as DOHServersLocales } from './locales/DOHServersView.vue.locales'
import { messages as DOTServersLocales } from './locales/DOTServersView.vue.locales'
import { messages as UDPServersLocales } from './locales/UDPServersView.vue.locales'
import { messages as PunycodeToolLocales } from './locales/PunycodeToolView.vue.locales'
import { messages as ReverseIPLookupLocales } from './locales/ReverseIPLookupView.vue.locales'
import { messages as MyIPLocales } from './locales/MyIPView.vue.locales'
import { messages as IPInfoLookupLocales } from './locales/IPInfoLookupView.vue.locales'
import { messages as IPInfoLocales } from './locales/IPInfoView.vue.locales'
import { messages as CIDRParseLocales } from './locales/CIDRParseView.vue.locales'
import { messages as CIDRMergeExcludeLocales } from './locales/CIDRMergeExcludeView.vue.locales'
import { messages as IPRangeToCIDRLocales } from './locales/IPRangeToCIDRView.vue.locales'
import { messages as IPCIDRNormalizeLocales } from './locales/IPCIDRNormalizeView.vue.locales'
import { messages as MACToIPv6LinkLocalLocales } from './locales/MACToIPv6LinkLocalView.vue.locales'

const prefix = '/tools'

export const routes: RouteRecordRaw[] = [
  {
    path: prefix + '/dns-lookup',
    name: 'tools-network-dns-lookup',
    component: () => import('./views/DNSLookupView.vue'),
    meta: {
      locales: DNSLookupLocales,
      icon: DocumentSearch16Regular,
      tags: ['dns', 'lookup', 'domain', 'ip', 'network', 'resolver']
    }
  },
  {
    path: prefix + '/doh-servers',
    name: 'tools-network-doh-servers',
    component: () => import('./views/DOHServersView.vue'),
    meta: {
      locales: DOHServersLocales,
      icon: Server20Regular,
      tags: ['dns', 'doh', 'dns-over-https', 'servers', 'network', 'security']
    }
  },
  {
    path: prefix + '/dot-servers',
    name: 'tools-network-dot-servers',
    component: () => import('./views/DOTServersView.vue'),
    meta: {
      locales: DOTServersLocales,
      icon: Server20Regular,
      tags: ['dns', 'dot', 'dns-over-tls', 'servers', 'network', 'security']
    }
  },
  {
    path: prefix + '/dns-udp-servers',
    name: 'tools-network-dns-udp-servers',
    component: () => import('./views/UDPServersView.vue'),
    meta: {
      locales: UDPServersLocales,
      icon: Server20Regular,
      tags: ['dns', 'udp', 'servers', 'network', 'protocol']
    }
  },
  {
    path: prefix + '/punycode-tool',
    name: 'tools-network-punycode-tool',
    component: () => import('./views/PunycodeToolView.vue'),
    meta: {
      locales: PunycodeToolLocales,
      icon: LanguageOutline,
      tags: ['punycode', 'idn', 'internationalized-domain-names', 'unicode', 'domain', 'converter']
    }
  },
  {
    path: prefix + '/reverse-ip-lookup',
    name: 'tools-network-reverse-ip-lookup',
    component: () => import('./views/ReverseIPLookupView.vue'),
    meta: {
      locales: ReverseIPLookupLocales,
      icon: DocumentSearch16Regular,
      tags: ['reverse-ip', 'ip', 'dns', 'domain', 'network', 'ptr-record']
    }
  },
  {
    path: prefix + '/my-ip',
    name: 'tools-network-my-ip',
    component: () => import('./views/MyIPView.vue'),
    meta: {
      locales: MyIPLocales,
      icon: Person16Regular,
      tags: ['ip', 'network', 'my-ip', 'public-ip', 'geolocation']
    }
  },
  {
    path: prefix + '/ip-info',
    name: 'tools-network-ip-info-lookup',
    component: () => import('./views/IPInfoLookupView.vue'),
    meta: {
      locales: IPInfoLookupLocales,
      icon: DocumentSearch16Regular,
      tags: ['ip', 'network', 'geolocation', 'whois', 'ip-info']
    }
  },
  {
    path: prefix + '/ip-info/:ipdomain',
    name: 'tools-network-ip-info',
    component: () => import('./views/IPInfoView.vue'),
    meta: {
      locales: IPInfoLocales,
      icon: DocumentSearch16Regular,
      tags: ['ip', 'network'],
      hidden: true
    }
  },
  {
    path: prefix + '/cidr-parse',
    name: 'tools-network-cidr-parse',
    component: () => import('./views/CIDRParseView.vue'),
    meta: {
      locales: CIDRParseLocales,
      icon: AutoFitWidth20Regular,
      tags: ['cidr', 'parse', 'ip', 'network', 'subnet', 'ip-range'],
      keepAlive: true
    }
  },
  {
    path: prefix + '/cidr-merge-exclude',
    name: 'tools-network-cidr-merge-exclude',
    component: () => import('./views/CIDRMergeExcludeView.vue'),
    meta: {
      locales: CIDRMergeExcludeLocales,
      icon: Merge24Regular,
      tags: ['cidr', 'merge', 'exclude', 'network', 'ip-range', 'subnet-calculator'],
      keepAlive: true
    }
  },
  {
    path: prefix + '/ip-range-to-cidr',
    name: 'tools-network-ip-range-to-cidr',
    component: () => import('./views/IPRangeToCIDRView.vue'),
    meta: {
      locales: IPRangeToCIDRLocales,
      icon: ArrowAutofitWidth20Regular,
      tags: ['ip', 'cidr', 'network', 'ip-range', 'subnet', 'converter'],
      keepAlive: true
    }
  },
  {
    path: prefix + '/ip-cidr-normalize',
    name: 'tools-network-ip-cidr-normalize',
    component: () => import('./views/IPCIDRNormalizeView.vue'),
    meta: {
      locales: IPCIDRNormalizeLocales,
      icon: TextGrammarCheckmark20Regular,
      tags: ['ip', 'cidr', 'normalize', 'network', 'subnet', 'standardize'],
      keepAlive: true
    }
  },
  {
    path: prefix + '/mac-to-ipv6-link-local',
    name: 'tools-network-mac-to-ipv6-link-local',
    component: () => import('./views/MACToIPv6LinkLocalView.vue'),
    meta: {
      locales: MACToIPv6LinkLocalLocales,
      icon: ArrowStepInRight24Regular,
      tags: ['mac', 'ipv6', 'link-local', 'ip', 'network', 'eui-64', 'converter'],
      keepAlive: true
    }
  }
]
