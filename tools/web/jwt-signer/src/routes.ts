import type { RouteRecordRaw } from 'vue-router'

export const routes: RouteRecordRaw[] = [
  {
    name: 'jwt-signer',
    path: '/tools/jwt-signer',
    component: () => import('./JWTSignerView.vue'),
  },
]
