import type { ToolRoute } from '@shared/tools'

export const routes: ToolRoute[] = [
  {
    name: 'png-optimizer',
    path: '/tools/png-optimizer',
    component: () => import('./PngOptimizerView.vue'),
  },
] as const
