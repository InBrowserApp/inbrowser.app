import type { RouteRecordRaw } from 'vue-router'
import { route as faviconToolsRoute } from './favicon-tools'
import { route as faviconGeneratorRoute } from './favicon-generator'

export const routes: RouteRecordRaw[] = [faviconToolsRoute, faviconGeneratorRoute]
