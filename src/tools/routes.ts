import type { RouteRecordRaw } from 'vue-router'
import { routes as uuidRoutes } from './uuid/routes'
import { routes as networkRoutes } from './network/routes'
import { routes as pdfRoutes } from './pdf'
import { routes as faviconRoutes } from './favicon'

export const routes: RouteRecordRaw[] = [
  {
    path: '/tools',
    name: 'tools',
    component: () => import('./views/ToolsHomeView.vue')
  },
  ...uuidRoutes,
  ...pdfRoutes,
  ...faviconRoutes,
  ...networkRoutes
]
