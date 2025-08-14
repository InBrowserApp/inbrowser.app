import type { ToolRoute } from '@shared/tools'

export const routes: ToolRoute[] = [
  {
    name: 'favicon-assets-generator',
    path: '/tools/favicon-assets-generator',
    component: () => import('./FaviconAssetsGeneratorView.vue'),
  },
] as const
