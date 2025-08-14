import type { ToolRoute } from '@shared/tools'

export const routes: ToolRoute[] = [
  {
    name: 'sri-hash-generator',
    path: '/tools/sri-hash-generator',
    component: () => import('./SRIHashGeneratorView.vue'),
  },
] as const
