import type { RouteRecordRaw } from 'vue-router'

const prefix = '/tools/favicon'

export const routes: RouteRecordRaw[] = [
  {
    path: prefix,
    name: 'tools-favicon',
    component: () => import('./views/FaviconHomeView.vue')
  },
  {
    path: prefix + '/favicon-generator',
    name: 'tools-favicon-favicon-generator',
    component: () => import('./views/FaviconGeneratorView.vue')
  }
]
