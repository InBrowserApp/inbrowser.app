import type { ToolRoute } from '@/tools/interface'
import { routes as uuidV4GeneratorRoutes } from './uuid-v4-generator/routes'

export const routes: ToolRoute[] = [...uuidV4GeneratorRoutes]
