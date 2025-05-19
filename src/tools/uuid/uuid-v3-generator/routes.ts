import type { ToolRoute } from '@/tools/interface'

export const routes: ToolRoute[] = [
  {
    name: 'uuid-v3-generator',
    path: '/tools/uuid-v3-generator',
    component: () => import('./UUIDV3GeneratorView.vue'),
  },
] as const
