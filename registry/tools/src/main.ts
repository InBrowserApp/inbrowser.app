import type { ToolInfo, ToolRoute } from '@shared/tools'
export type { ToolInfo, ToolRoute }
import { toolInfo as networkToolsToolInfo } from '@tools/network-tools'
import { toolInfo as uuidToolsToolInfo } from '@tools/uuid/uuid-tools'
import { toolInfo as pdfToolsToolInfo } from '@tools/pdf-tools'
import { toolInfo as imageToolsToolInfo } from '@tools/image-tools'
import * as tldrToolInfo from '@tools/redirects/tldr.inbrowser.app'
import * as authenticatorToolInfo from '@tools/redirects/authenticator.inbrowser.app'
import { toolInfo as hashToolsToolInfo } from '@tools/hash-tools'

export const tools: ToolInfo[] = [
  hashToolsToolInfo,
  networkToolsToolInfo,
  uuidToolsToolInfo,
  pdfToolsToolInfo,
  imageToolsToolInfo,
  tldrToolInfo,
  authenticatorToolInfo,
]
