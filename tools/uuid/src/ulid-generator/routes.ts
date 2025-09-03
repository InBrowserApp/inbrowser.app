import type { ToolRoute } from '@shared/tools'

export const routes: ToolRoute[] = [
  {
    name: 'ulid-generator',
    path: '/tools/ulid-generator',
    component: () => import('./ULIDGeneratorView.vue'),
  },
] as const
