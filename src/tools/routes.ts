import type { ToolRoute } from '@/tools/interface'
import { routes as uuidRoutes } from './uuid/routes'
import { routes as faviconRoutes } from './favicon/favicon-assets-generator/routes'

export const routes: ToolRoute[] = [...uuidRoutes, ...faviconRoutes]
