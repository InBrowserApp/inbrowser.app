import type { ToolRoute } from '@shared/tools'

export const routes: ToolRoute[] = [
  {
    name: 'sha1-hash-text-or-file',
    path: '/tools/sha1-hash-text-or-file',
    component: () => import('./SHA1HashTextOrFileView.vue'),
  },
] as const
