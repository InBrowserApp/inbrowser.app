import type { ToolRoute } from '@shared/tools'

export const routes: ToolRoute[] = [
  {
    name: 'uuid-validator',
    path: '/tools/uuid-validator',
    component: () => import('./UUIDValidatorView.vue'),
  },
] as const
