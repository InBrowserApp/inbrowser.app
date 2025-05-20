import type { ToolInfo } from '@/tools/interface'
import { meta } from './i18n'
import { Id } from '@vicons/carbon'

export const toolInfo: ToolInfo = {
  toolID: 'uuid-base64-hex-decimal-octal-binary-converter',
  meta,
  icon: Id,
  path: '/tools/uuid-base64-hex-decimal-octal-binary-converter',
  tags: ['uuid'],
  features: ['offline'],
} as const
