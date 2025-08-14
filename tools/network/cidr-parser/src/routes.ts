import type { ToolRoute } from '@shared/tools'

export const routes: ToolRoute[] = [
  {
    name: 'cidr-parser',
    path: '/tools/cidr-parser',
    component: () => import('./CIDRParserView.vue'),
  },
] as const
