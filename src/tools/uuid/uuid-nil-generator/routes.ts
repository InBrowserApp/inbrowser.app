import type { ToolRoute } from '@/tools/interface'

export const routes: ToolRoute[] = [
  {
    name: 'uuid-nil-generator',
    path: '/tools/uuid-nil-generator',
    component: () => import('./NilUUIDGeneratorView.vue'),
  },
] as const
