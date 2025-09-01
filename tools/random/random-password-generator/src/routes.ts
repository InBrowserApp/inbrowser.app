import type { RouteRecordRaw } from 'vue-router'

export const routes: RouteRecordRaw[] = [
  {
    name: 'random-password-generator',
    path: '/tools/random/password-generator',
    component: () => import('./RandomPasswordGeneratorView.vue'),
  },
]
