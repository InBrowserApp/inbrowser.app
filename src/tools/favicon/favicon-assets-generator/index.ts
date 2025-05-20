import type { ToolInfo } from '@/tools/interface'
import { meta } from './i18n'
import { Icons20Regular as icon } from '@vicons/fluent'

export const toolInfo: ToolInfo = {
  toolID: 'favicon-assets-generator',
  meta,
  icon,
  path: '/tools/favicon-assets-generator',
  tags: ['favicon', 'icon', 'web'],
  features: ['offline'],
} as const
