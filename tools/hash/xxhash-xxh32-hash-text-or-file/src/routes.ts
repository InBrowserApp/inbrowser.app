import type { ToolRoute } from '@shared/tools'

export const routes: ToolRoute[] = [
  {
    name: 'xxhash-xxh32-hash-text-or-file',
    path: '/tools/xxhash-xxh32-hash-text-or-file',
    component: () => import('./XxHashHashTextOrFileView.vue'),
  },
] as const
