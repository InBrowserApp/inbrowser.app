import type { RouteRecordRaw } from 'vue-router'
import { route as RemoveOwnerPasswordRoute } from './remove-owner-password'
import { routes as PDFToolsRoutes } from './pdf-tools'

export const routes: RouteRecordRaw[] = [PDFToolsRoutes, RemoveOwnerPasswordRoute]
