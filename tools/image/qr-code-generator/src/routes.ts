import type { ToolRoute } from '@shared/tools'

export const routes: ToolRoute[] = [
  {
    name: 'qr-code-generator',
    path: '/tools/qr-code-generator',
    component: () => import('./QRCodeGeneratorView.vue'),
  },
] as const
