import type { ToolRoute } from '@shared/tools'

export const routes: ToolRoute[] = [
  {
    name: 'uuid-v1-generator',
    path: '/tools/uuid-v1-generator',
    component: () => import('./UUIDV1GeneratorView.vue'),
  },
] as const
