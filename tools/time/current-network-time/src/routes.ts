import type { ToolRoute } from '@shared/tools'

export const routes: ToolRoute[] = [
  {
    name: 'current-network-time',
    path: '/tools/current-network-time',
    component: () => import('./CurrentNetworkTimeView.vue'),
  },
] as const
