import IPSB from './ip.sb'
import GEOJSIO from './geojs.io'
import Cloudflare from './cloudflare'
import IPIFY from './ipify.org'

type getIPFunction = (options?: { signal: AbortSignal }) => Promise<string>
interface GetMyIPProvider {
  ipv4?: getIPFunction
  ipv6?: getIPFunction
  name: string
}

export const getMyIPProviders: GetMyIPProvider[] = [IPSB, GEOJSIO, Cloudflare, IPIFY]

export const getMyIPv4 = async (): Promise<string> => {
  const controller = new AbortController()
  const signal = controller.signal
  const ipv4Functions = getMyIPProviders
    .filter((provider) => provider.ipv4)
    .map((provider) => provider.ipv4) as getIPFunction[]
  const response = await Promise.any(ipv4Functions.map((func) => func({ signal })))
  controller.abort()
  return response
}

export const getMyIPv6 = async (): Promise<string> => {
  const controller = new AbortController()
  const signal = controller.signal
  const ipv6Functions = getMyIPProviders
    .filter((provider) => provider.ipv6)
    .map((provider) => provider.ipv6) as getIPFunction[]
  const response = await Promise.any(ipv6Functions.map((func) => func({ signal })))
  controller.abort()
  return response
}
