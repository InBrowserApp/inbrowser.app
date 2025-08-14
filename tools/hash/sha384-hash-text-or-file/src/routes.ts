import type { ToolRoute } from '@shared/tools'

export const routes: ToolRoute[] = [
  {
    name: 'sha384-hash-text-or-file',
    path: '/tools/sha384-hash-text-or-file',
    component: () => import('./SHA384HashTextOrFileView.vue'),
  },
] as const
