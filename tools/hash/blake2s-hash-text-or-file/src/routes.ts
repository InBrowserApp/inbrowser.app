import type { ToolRoute } from '@shared/tools'

export const routes: ToolRoute[] = [
  {
    name: 'blake2s-hash-text-or-file',
    path: '/tools/blake2s-hash-text-or-file',
    component: () => import('./Blake2SHashTextOrFileView.vue'),
  },
] as const
