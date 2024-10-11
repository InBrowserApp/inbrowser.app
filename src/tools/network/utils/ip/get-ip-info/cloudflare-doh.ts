import type { IPInfo } from './types'
import { ReverseIPDomain } from './reverse-ip-domain'

const name = 'cloudflare-doh'
const doh_url = 'https://cloudflare-dns.com/dns-query'

export async function getIPInfo(ip: string): Promise<IPInfo> {
  const domain = ReverseIPDomain(ip)
  const url = new URL(doh_url)
  url.search = new URLSearchParams({
    name: domain,
    type: 'PTR'
  }).toString()
  const response = await fetch(url.toString(), {
    method: 'GET',
    headers: {
      Accept: 'application/dns-json'
    }
  })

  if (!response.ok) {
    throw new Error(`HTTP error: ${response.status}`)
  }

  const data = await response.json()
  const hostname = data.Answer[0].data
  if (typeof hostname === 'string') {
    return { hostname }
  } else {
    throw new Error(`Invalid response: ${JSON.stringify(data)}`)
  }
}

export default {
  name,
  getIPInfo
}
