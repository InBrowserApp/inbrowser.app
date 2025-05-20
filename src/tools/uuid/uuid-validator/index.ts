import type { ToolInfo } from '@/tools/interface'
import { meta } from './i18n'
import { Id } from '@vicons/carbon'

export const toolInfo: ToolInfo = {
  toolID: 'uuid-validator',
  meta,
  icon: Id,
  path: '/tools/uuid-validator',
  tags: ['uuid'],
  features: ['offline'],
} as const
