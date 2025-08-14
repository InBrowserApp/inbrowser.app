import type { ToolRoute } from '@shared/tools'

export const routes: ToolRoute[] = [
  {
    name: 'uuid-max-generator',
    path: '/tools/uuid-max-generator',
    component: () => import('./MaxUUIDGeneratorView.vue'),
  },
] as const
