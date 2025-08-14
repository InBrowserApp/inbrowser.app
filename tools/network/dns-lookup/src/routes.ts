import type { ToolRoute } from '@shared/tools'

export const routes: ToolRoute[] = [
  {
    name: 'dns-lookup',
    path: '/tools/dns-lookup',
    component: () => import('./DNSLookupView.vue'),
  },
] as const
