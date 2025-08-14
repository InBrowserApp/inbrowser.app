import type { ToolRoute } from '@shared/tools'

export const routes: ToolRoute[] = [
  {
    name: 'ipv6-to-mac',
    path: '/tools/ipv6-to-mac',
    component: () => import('./IPv6ToMACView.vue'),
  },
] as const
