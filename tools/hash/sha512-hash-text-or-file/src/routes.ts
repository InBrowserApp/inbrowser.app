import type { ToolRoute } from '@shared/tools'

export const routes: ToolRoute[] = [
  {
    name: 'sha512-hash-text-or-file',
    path: '/tools/sha512-hash-text-or-file',
    component: () => import('./SHA512HashTextOrFileView.vue'),
  },
] as const
