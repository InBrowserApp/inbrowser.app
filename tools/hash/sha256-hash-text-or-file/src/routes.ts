import type { ToolRoute } from '@shared/tools'

export const routes: ToolRoute[] = [
  {
    name: 'sha256-hash-text-or-file',
    path: '/tools/sha256-hash-text-or-file',
    component: () => import('./SHA256HashTextOrFileView.vue'),
  },
] as const
