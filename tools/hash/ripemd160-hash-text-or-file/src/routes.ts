import type { ToolRoute } from '@shared/tools'

export const routes: ToolRoute[] = [
  {
    name: 'ripemd160-hash-text-or-file',
    path: '/tools/ripemd160-hash-text-or-file',
    component: () => import('./RIPEMD160HashTextOrFileView.vue'),
  },
] as const
