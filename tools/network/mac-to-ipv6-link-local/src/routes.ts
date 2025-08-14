import type { ToolRoute } from '@shared/tools'

export const routes: ToolRoute[] = [
  {
    name: 'mac-to-ipv6-link-local',
    path: '/tools/mac-to-ipv6-link-local',
    component: () => import('./MACToIPv6LinkLocalView.vue'),
  },
] as const
