import type { ToolRoute } from '@/tools/interface'
import { routes as uuidRoutes } from './uuid/routes'

export const routes: ToolRoute[] = [...uuidRoutes]
