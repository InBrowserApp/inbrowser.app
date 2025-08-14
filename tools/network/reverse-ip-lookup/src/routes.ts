import type { ToolRoute } from '@shared/tools'

export const routes: ToolRoute[] = [
  {
    name: 'reverse-ip-lookup',
    path: '/tools/reverse-ip-lookup',
    component: () => import('./ReverseIPLookupView.vue'),
  },
] as const
