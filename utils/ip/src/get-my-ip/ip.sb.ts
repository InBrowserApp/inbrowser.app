import { isIPv4, isIPv6 } from 'is-ip'

export const name = 'ip.sb'

export async function getMyIPv4(options?: RequestInit): Promise<string> {
  const api = 'https://api-ipv4.ip.sb/geoip'
  const response = await fetch(api, options)
  const data = await response.json()
  const ip = data.ip
  if (!isIPv4(ip)) {
    throw new Error(`Invalid IPv4: ${ip}`)
  }

  return ip
}

export async function getMyIPv6(options?: RequestInit): Promise<string> {
  const api = 'https://api-ipv6.ip.sb/geoip'
  const response = await fetch(api, options)
  const data = await response.json()
  const ip = data.ip
  if (!isIPv6(ip)) {
    throw new Error(`Invalid IPv4: ${ip}`)
  }

  return ip
}

export const getMyIP = {
  ipv4: getMyIPv4,
  ipv6: getMyIPv6,
  name: name,
}

export default getMyIP
