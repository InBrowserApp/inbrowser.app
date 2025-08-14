import type { ToolRoute } from '@shared/tools'

export const routes: ToolRoute[] = [
  {
    name: 'uuid-v7-generator',
    path: '/tools/uuid-v7-generator',
    component: () => import('./UUIDV7GeneratorView.vue'),
  },
] as const
