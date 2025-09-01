import type { ToolRoute } from '@shared/tools'

export const routes: ToolRoute[] = [
  {
    name: 'barcode-generator',
    path: '/tools/barcode-generator',
    component: () => import('./BarcodeGeneratorView.vue'),
  },
] as const
