import type { RouteRecordRaw } from 'vue-router'

export const routes: RouteRecordRaw[] = [
  {
    name: 'basic-auth-decoder',
    path: '/tools/basic-auth-decoder',
    component: () => import('./BasicAuthDecoderView.vue'),
  },
]
