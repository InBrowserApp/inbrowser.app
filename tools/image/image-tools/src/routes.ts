import type { ToolRoute } from '@shared/tools'

export const routes: ToolRoute[] = [
  {
    name: 'image-tools',
    path: '/tools/image-tools',
    component: () => import('./ImageToolsView.vue'),
  },
] as const
