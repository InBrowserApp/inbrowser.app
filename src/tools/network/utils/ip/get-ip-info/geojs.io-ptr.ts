import type { IPInfo } from './types'

export const name = 'geojs.io-ptr'

interface APIResult {
  ptr: string
}

export async function getIPInfo(ip: string, options?: RequestInit): Promise<IPInfo> {
  const response = await fetch(`https://get.geojs.io/v1/dns/ptr/${ip}.json`, options)
  const data: APIResult = await response.json()
  if (data.ptr === 'Failed to get PTR record') {
    throw new Error('Failed to get PTR record')
  }

  return {
    hostname: data.ptr
  }
}

export default {
  name,
  getIPInfo
}
