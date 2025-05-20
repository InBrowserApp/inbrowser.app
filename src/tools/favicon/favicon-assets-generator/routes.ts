import type { ToolRoute } from '@/tools/interface'

export const routes: ToolRoute[] = [
  {
    name: 'favicon-assets-generator',
    path: '/tools/favicon-assets-generator',
    component: () => import('./FaviconAssetsGeneratorView.vue'),
  },
] as const
