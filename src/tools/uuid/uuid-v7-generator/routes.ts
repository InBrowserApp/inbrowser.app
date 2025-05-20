import type { ToolRoute } from '@/tools/interface'

export const routes: ToolRoute[] = [
  {
    name: 'uuid-v7-generator',
    path: '/tools/uuid-v7-generator',
    component: () => import('./UUIDV7GeneratorView.vue'),
  },
] as const
