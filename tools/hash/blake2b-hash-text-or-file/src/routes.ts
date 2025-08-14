import type { ToolRoute } from '@shared/tools'

export const routes: ToolRoute[] = [
  {
    name: 'blake2b-hash-text-or-file',
    path: '/tools/blake2b-hash-text-or-file',
    component: () => import('./Blake2BHashTextOrFileView.vue'),
  },
] as const
