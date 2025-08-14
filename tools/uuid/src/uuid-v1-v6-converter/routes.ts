import type { ToolRoute } from '@shared/tools'

export const routes: ToolRoute[] = [
  {
    name: 'uuid-v1-v6-converter',
    path: '/tools/uuid-v1-v6-converter',
    component: () => import('./UUIDV1V6ConverterView.vue'),
  },
] as const
