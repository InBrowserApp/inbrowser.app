import type { ToolRoute } from '@/tools/interface'

export const routes: ToolRoute[] = [
  {
    name: 'uuid-validator',
    path: '/tools/uuid-validator',
    component: () => import('./UUIDValidatorView.vue'),
  },
] as const
