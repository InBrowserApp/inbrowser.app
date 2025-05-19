import type { ToolRoute } from '@/tools/interface'
import { routes as uuidV4GeneratorRoutes } from './uuid-v4-generator/routes'
import { routes as uuidV1GeneratorRoutes } from './uuid-v1-generator/routes'
import { routes as uuidV3GeneratorRoutes } from './uuid-v3-generator/routes'

export const routes: ToolRoute[] = [
  ...uuidV4GeneratorRoutes,
  ...uuidV1GeneratorRoutes,
  ...uuidV3GeneratorRoutes,
]
