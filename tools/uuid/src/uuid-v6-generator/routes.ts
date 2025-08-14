import type { ToolRoute } from '@shared/tools'

export const routes: ToolRoute[] = [
  {
    name: 'uuid-v6-generator',
    path: '/tools/uuid-v6-generator',
    component: () => import('./UUIDV6GeneratorView.vue'),
  },
] as const
