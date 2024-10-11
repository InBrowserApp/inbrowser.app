import type { RouteRecordRaw } from 'vue-router'
import { routes as uuidRoutes } from './uuid/routes'
import { route as removePDFOwnerPasswordRoute } from './remove-pdf-owner-password'
import { route as faviconGeneratorRoute } from './favicon-generator'
import { routes as networkRoutes } from './network/routes'

export const routes: RouteRecordRaw[] = [
  {
    path: '/tools',
    name: 'tools',
    component: () => import('./views/ToolsHomeView.vue')
  },
  ...uuidRoutes,
  removePDFOwnerPasswordRoute,
  faviconGeneratorRoute,
  ...networkRoutes
]
