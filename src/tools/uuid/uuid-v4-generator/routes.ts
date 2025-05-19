import type { ToolRoute } from '@/tools/interface'

export const routes: ToolRoute[] = [
  {
    name: 'uuid-v4-generator',
    path: '/tools/uuid-v4-generator',
    component: () => import('./UUIDV4GeneratorView.vue'),
  },
] as const
