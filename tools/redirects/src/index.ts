import type { ToolInfo } from '@shared/tools'
import * as lookScannedToolInfo from './lookscanned.io'
import * as tldrInBrowserAppToolInfo from './tldr.inbrowser.app'
import * as authenticatorInBrowserAppToolInfo from './authenticator.inbrowser.app'
import * as macAddressInBrowserAppToolInfo from './macaddress.inbrowser.app'
import * as squooshAppToolInfo from './squoosh.app'

export const tools: ToolInfo[] = [
  lookScannedToolInfo,
  tldrInBrowserAppToolInfo,
  authenticatorInBrowserAppToolInfo,
  macAddressInBrowserAppToolInfo,
  squooshAppToolInfo,
]
