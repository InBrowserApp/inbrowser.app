import type { IPInfo } from './types'

export const name = 'geojs.io'

interface APIResult {
  organization_name: string
  country_code: string
  country_code3: string
  continent_code: string
  latitude: string
  longitude: string
  accuracy: number
  asn: number
  timezone: string
  organization: string
  ip: string
  country: string
  area_code: string
}

export async function getIPInfo(ip: string, options?: RequestInit): Promise<IPInfo> {
  const response = await fetch(`https://get.geojs.io/v1/ip/geo/${ip}.json`, options)
  const data: APIResult = await response.json()
  return {
    ...data,
    latitude: Number(data.latitude),
    longitude: Number(data.longitude),
    asn_organization: data.organization_name,
  }
}

export default {
  name,
  getIPInfo,
}
