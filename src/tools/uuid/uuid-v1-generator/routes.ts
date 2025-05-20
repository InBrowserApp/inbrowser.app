import type { ToolRoute } from '@/tools/interface'

export const routes: ToolRoute[] = [
  {
    name: 'uuid-v1-generator',
    path: '/tools/uuid-v1-generator',
    component: () => import('./UUIDV1GeneratorView.vue'),
  },
] as const
