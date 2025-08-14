import type { ToolRoute } from '@shared/tools'

export const routes: ToolRoute[] = [
  {
    name: 'unicode-punycode-converter',
    path: '/tools/unicode-punycode-converter',
    component: () => import('./UnicodePunycodeConverterView.vue'),
  },
] as const
