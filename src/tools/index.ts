import type { ToolInfo, ToolRoute } from '@/tools/interface'
export type { ToolInfo, ToolRoute }
import { tools as uuidTools } from './uuid'

export const tools: ToolInfo[] = [...uuidTools]
