import type { IPInfo } from './types'

export const name = 'ip.sb'

interface APIResult {
  organization: string
  longitude: number
  timezone: string
  isp: string
  offset: number
  asn: number
  asn_organization: string
  country: string
  ip: string
  latitude: number
  continent_code: string
  country_code: string
}

export async function getIPInfo(ip: string, options?: RequestInit): Promise<IPInfo> {
  const response = await fetch(`https://api.ip.sb/geoip/${ip}`, options)
  const data: APIResult = await response.json()
  return data
}

export default {
  name,
  getIPInfo
}
