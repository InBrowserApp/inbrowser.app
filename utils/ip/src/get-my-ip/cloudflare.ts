import { isIPv4, isIPv6 } from 'is-ip'

export const serverName = 'Cloudflare'

export async function getMyIPUniversal(options?: RequestInit): Promise<string> {
  const api = 'https://cloudflare.com/cdn-cgi/trace'
  const response = await fetch(api, options)
  const data = await response.text()
  const ip = data
    .split('\n')
    .filter((line) => line.startsWith('ip='))[0]!
    .split('=')[1]!
  if (!isIPv4(ip) && !isIPv6(ip)) {
    throw new Error(`Invalid IP: ${ip}`)
  }

  return ip
}

export async function getMyIPv4(options?: RequestInit): Promise<string> {
  const ip = await getMyIPUniversal(options)
  if (!isIPv4(ip)) {
    throw new Error(`Invalid IPv4: ${ip}`)
  }

  return ip
}

export async function getMyIPv6(options?: RequestInit): Promise<string> {
  const ip = await getMyIPUniversal(options)
  if (!isIPv6(ip)) {
    throw new Error(`Invalid IPv4: ${ip}`)
  }

  return ip
}

export const getMyIP = {
  ipv4: getMyIPv4,
  ipv6: getMyIPv6,
  name: serverName,
}

export default getMyIP
