import type { ToolRoute } from '@/tools/interface'

export const routes: ToolRoute[] = [
  {
    name: 'uuid-tools',
    path: '/tools/uuid',
    component: () => import('./UUIDToolsView.vue'),
  },
] as const
