import type { RouteRecordRaw } from 'vue-router'

export const routes: RouteRecordRaw[] = [
  {
    name: 'basic-auth-generator',
    path: '/tools/basic-auth-generator',
    component: () => import('./BasicAuthGeneratorView.vue'),
  },
]
