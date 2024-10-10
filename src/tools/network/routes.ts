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
  }
]
