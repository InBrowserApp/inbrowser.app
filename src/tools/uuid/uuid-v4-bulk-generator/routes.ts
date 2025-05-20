import type { ToolRoute } from '@/tools/interface'

export const routes: ToolRoute[] = [
  {
    name: 'uuid-v4-bulk-generator',
    path: '/tools/uuid-v4-bulk-generator',
    component: () => import('./UUIDV4BulkGeneratorView.vue'),
  },
] as const
