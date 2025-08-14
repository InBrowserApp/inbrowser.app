import type { ToolRoute } from '@shared/tools'

export const routes: ToolRoute[] = [
  {
    name: 'my-ip-address',
    path: '/tools/my-ip-address',
    component: () => import('./MyIPAddressView.vue'),
  },
] as const
