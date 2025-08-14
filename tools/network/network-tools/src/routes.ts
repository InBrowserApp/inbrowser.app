import type { ToolRoute } from '@shared/tools'

export const routes: ToolRoute[] = [
  {
    name: 'network-tools',
    path: '/tools/network-tools',
    component: () => import('./NetworkToolsView.vue'),
  },
] as const
