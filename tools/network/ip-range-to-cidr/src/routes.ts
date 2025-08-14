import type { ToolRoute } from '@shared/tools'

export const routes: ToolRoute[] = [
  {
    name: 'ip-range-to-cidr',
    path: '/tools/ip-range-to-cidr',
    component: () => import('./IPRangeToCIDRView.vue'),
  },
] as const
