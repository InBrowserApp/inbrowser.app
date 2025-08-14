import type { ToolRoute } from '@shared/tools'

export const routes: ToolRoute[] = [
  {
    name: 'uuid-nil-generator',
    path: '/tools/uuid-nil-generator',
    component: () => import('./NilUUIDGeneratorView.vue'),
  },
] as const
