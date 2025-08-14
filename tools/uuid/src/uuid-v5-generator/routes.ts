import type { ToolRoute } from '@shared/tools'

export const routes: ToolRoute[] = [
  {
    name: 'uuid-v5-generator',
    path: '/tools/uuid-v5-generator',
    component: () => import('./UUIDV5GeneratorView.vue'),
  },
] as const
