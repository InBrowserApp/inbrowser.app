import type { ToolRoute } from '@/tools/interface'

export const routes: ToolRoute[] = [
  {
    name: 'uuid-max-generator',
    path: '/tools/uuid-max-generator',
    component: () => import('./MaxUUIDGeneratorView.vue'),
  },
] as const
