import IPSB from './ip.sb'
import geojsIo from './geojs.io'
import cloudflareDoh from './cloudflare-doh'
import googleDoh from './google-doh'
import geojsIoPtr from './geojs.io-ptr'
import type { IPInfo } from './types'

export type { IPInfo } from './types'

type IPInfoProviderFunction = (ip: string, options?: RequestInit) => Promise<IPInfo>

export type IPInfoProvider = {
  name: string
  getIPInfo: IPInfoProviderFunction
}

export const IPInfoProviders: IPInfoProvider[] = [
  geojsIo,
  IPSB,
  cloudflareDoh,
  googleDoh,
  geojsIoPtr
]
