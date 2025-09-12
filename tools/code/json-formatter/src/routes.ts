import type { ToolRoute } from '@shared/tools'

export const routes: ToolRoute[] = [
  {
    name: 'json-formatter',
    path: '/tools/json-formatter',
    component: () => import('./JsonFormatterView.vue'),
  },
] as const