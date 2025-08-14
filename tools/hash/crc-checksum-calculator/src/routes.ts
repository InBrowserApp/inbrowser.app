import type { ToolRoute } from '@shared/tools'

export const routes: ToolRoute[] = [
  {
    name: 'crc-checksum-calculator',
    path: '/tools/crc-checksum-calculator',
    component: () => import('./CRCChecksumCalculatorView.vue'),
  },
] as const
