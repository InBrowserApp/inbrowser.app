import type { ToolRoute } from '@shared/tools'

export const routes: ToolRoute[] = [
  {
    name: 'keccak-hash-text-or-file',
    path: '/tools/keccak-hash-text-or-file',
    component: () => import('./KeccakHashTextOrFileView.vue'),
  },
] as const
