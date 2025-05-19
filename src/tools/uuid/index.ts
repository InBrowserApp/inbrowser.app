import type { ToolInfo } from '@/tools/interface'
import { toolInfo as uuidV4GeneratorToolInfo } from './uuid-v4-generator'
import { toolInfo as uuidV3GeneratorToolInfo } from './uuid-v3-generator'
import { toolInfo as uuidV1GeneratorToolInfo } from './uuid-v1-generator'
import { toolInfo as uuidV5GeneratorToolInfo } from './uuid-v5-generator'
import { toolInfo as uuidV6GeneratorToolInfo } from './uuid-v6-generator'
import { toolInfo as uuidNilGeneratorToolInfo } from './uuid-nil-generator'
import { toolInfo as uuidDecoderToolInfo } from './uuid-decoder'
import { toolInfo as uuidToolsToolInfo } from './uuid-tools'

export const tools: ToolInfo[] = [
  uuidV1GeneratorToolInfo,
  uuidV3GeneratorToolInfo,
  uuidV4GeneratorToolInfo,
  uuidV5GeneratorToolInfo,
  uuidV6GeneratorToolInfo,
  uuidNilGeneratorToolInfo,
  uuidDecoderToolInfo,
  uuidToolsToolInfo,
]
