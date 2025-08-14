import type { ToolRoute } from '@shared/tools'

export const routes: ToolRoute[] = [
  {
    name: 'hash-tools',
    path: '/tools/hash-tools',
    component: () => import('./HashToolsView.vue'),
  },
] as const
