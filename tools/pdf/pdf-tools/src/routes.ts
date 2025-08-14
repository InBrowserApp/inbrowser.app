import type { ToolRoute } from '@shared/tools'

export const routes: ToolRoute[] = [
  {
    name: 'pdf-tools',
    path: '/tools/pdf-tools',
    component: () => import('./PDFToolsView.vue'),
  },
] as const
