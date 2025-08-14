import type { ToolRoute } from '@shared/tools'

export const routes: ToolRoute[] = [
  {
    name: 'ip-info-lookup',
    path: '/tools/ip-info-lookup',
    component: () => import('./IPInfoLookupView.vue'),
  },
  {
    name: 'ip-info-lookup-ip',
    path: '/tools/ip-info-lookup/:ipdomain',
    component: () => import('./IPInfoView.vue'),
  },
] as const
