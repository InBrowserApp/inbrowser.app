import type { ToolRoute } from '@/tools/interface'

export const routes: ToolRoute[] = [
  {
    name: 'uuid-v5-generator',
    path: '/tools/uuid-v5-generator',
    component: () => import('./UUIDV5GeneratorView.vue'),
  },
] as const
