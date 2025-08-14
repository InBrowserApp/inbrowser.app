import type { ToolRoute } from '@shared/tools'

export const routes: ToolRoute[] = [
  {
    name: 'uuid-decoder',
    path: '/tools/uuid-decoder',
    component: () => import('./UUIDDecoderView.vue'),
  },
  {
    name: 'uuid-decoder-uuid',
    path: '/tools/uuid-decoder/:uuid',
    component: () => import('./UUIDDecoderView.vue'),
  },
] as const
