import type { ToolRoute } from '@shared/tools'

export const routes: ToolRoute[] = [
  {
    name: 'device-information',
    path: '/tools/device-information',
    component: () => import('./DeviceInformationView.vue'),
  },
] as const
