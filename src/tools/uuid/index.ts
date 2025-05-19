import type { ToolInfo } from '@/tools/interface'
import { toolInfo as uuidV4GeneratorToolInfo } from './uuid-v4-generator'
import { toolInfo as uuidV3GeneratorToolInfo } from './uuid-v3-generator'
import { toolInfo as uuidV1GeneratorToolInfo } from './uuid-v1-generator'

export const tools: ToolInfo[] = [
  uuidV1GeneratorToolInfo,
  uuidV3GeneratorToolInfo,
  uuidV4GeneratorToolInfo,
]
