import type { ToolInfo } from '@/tools/interface'
import { meta } from './i18n'
import { Id } from '@vicons/carbon'

export const toolInfo: ToolInfo = {
  toolID: 'favicon-assets-generator',
  meta,
  icon: Id,
  path: '/tools/favicon-assets-generator',
  tags: ['favicon', 'icon', 'web'],
  features: ['offline'],
} as const
