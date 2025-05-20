import type { ToolInfo, ToolRoute } from '@/tools/interface'
export type { ToolInfo, ToolRoute }
import { tools as uuidTools } from './uuid'
import { tools as faviconTools } from './favicon'

export const tools: ToolInfo[] = [...uuidTools, ...faviconTools]
