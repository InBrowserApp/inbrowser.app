import type { ToolRoute } from '@shared/tools'

export const routes: ToolRoute[] = [
  {
    name: 'md5-hash-text-or-file',
    path: '/tools/md5-hash-text-or-file',
    component: () => import('./MD5HashTextOrFileView.vue'),
  },
] as const
