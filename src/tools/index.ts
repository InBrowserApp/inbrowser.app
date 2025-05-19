import type { ToolInfo } from '@/tools/interface'
export type { ToolInfo }
import { uuidTools } from './uuid'

export const tools: ToolInfo[] = [...uuidTools]
