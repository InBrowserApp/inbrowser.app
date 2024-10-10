import type { RouteRecordRaw } from 'vue-router'

const prefix = '/tools/network'

export const routes: RouteRecordRaw[] = [
  {
    path: prefix,
    name: 'tools-network',
    component: () => import('./views/NetworkHomeView.vue')
  },
  {
    path: prefix + '/dns-lookup',
    name: 'tools-network-dns-lookup',
    component: () => import('./views/DNSLookupView.vue')
  },
  {
    path: prefix + '/doh-servers',
    name: 'tools-network-doh-servers',
    component: () => import('./views/DOHServersView.vue')
  },
  {
    path: prefix + '/dot-servers',
    name: 'tools-network-dot-servers',
    component: () => import('./views/DOTServersView.vue')
  },
  {
    path: prefix + '/udp-servers',
    name: 'tools-network-udp-servers',
    component: () => import('./views/UDPServersView.vue')
  },
  {
    path: prefix + '/punycode-tool',
    name: 'tools-network-punycode-tool',
    component: () => import('./views/PunycodeToolView.vue')
  },
  {
    path: prefix + '/reverse-ip-lookup',
    name: 'tools-network-reverse-ip-lookup',
    component: () => import('./views/ReverseIPLookupView.vue')
  },
  {
    path: prefix + '/my-ip',
    name: 'tools-network-my-ip',
    component: () => import('./views/MyIPView.vue')
  },
  {
    path: prefix + '/ip-info',
    name: 'tools-network-ip-info-lookup',
    component: () => import('./views/IPInfoLookupView.vue')
  },
  {
    path: prefix + '/ip-info/:ipdomain',
    name: 'tools-network-ip-info',
    component: () => import('./views/IPInfoView.vue')
  },
  {
    path: prefix + '/cidr-parse',
    name: 'tools-network-cidr-parse',
    component: () => import('./views/CIDRParseView.vue'),
    meta: {
      keepAlive: true
    }
  },
  {
    path: prefix + '/cidr-merge-exclude',
    name: 'tools-network-cidr-merge-exclude',
    component: () => import('./views/CIDRMergeExcludeView.vue'),
    meta: {
      keepAlive: true
    }
  },
  {
    path: prefix + '/ip-range-to-cidr',
    name: 'tools-network-ip-range-to-cidr',
    component: () => import('./views/IPRangeToCIDRView.vue'),
    meta: {
      keepAlive: true
    }
  },
  {
    path: prefix + '/ip-cidr-normalize',
    name: 'tools-network-ip-cidr-normalize',
    component: () => import('./views/IPCIDRNormalizeView.vue'),
    meta: {
      keepAlive: true
    }
  },
  {
    path: prefix + '/mac-to-ipv6-link-local',
    name: 'tools-network-mac-to-ipv6-link-local',
    component: () => import('./views/MACToIPv6LinkLocalView.vue'),
    meta: {
      keepAlive: true
    }
  }
]
