import type { ToolRoute } from '@shared/tools'

export const routes: ToolRoute[] = [
  {
    name: 'uuid-base64-hex-decimal-octal-binary-converter',
    path: '/tools/uuid-base64-hex-decimal-octal-binary-converter',
    component: () => import('./UUIDBase64HexDecimalOctalBinaryConverterView.vue'),
  },
] as const
