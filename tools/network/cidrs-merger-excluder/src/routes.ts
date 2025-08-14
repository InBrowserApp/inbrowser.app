import type { ToolRoute } from '@shared/tools'

export const routes: ToolRoute[] = [
  {
    name: 'cidrs-merger-excluder',
    path: '/tools/cidrs-merger-excluder',
    component: () => import('./CIDRMergerExcluderView.vue'),
  },
] as const
