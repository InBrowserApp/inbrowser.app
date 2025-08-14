import type { ToolRoute } from '@shared/tools'

export const routes: ToolRoute[] = [
  {
    name: 'uuid-tools',
    path: '/tools/uuid',
    component: () => import('./UUIDToolsView.vue'),
  },
] as const
