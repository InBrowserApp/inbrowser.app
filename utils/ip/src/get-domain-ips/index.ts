import { makeDOHQuery, BUILTIN_DOH_SERVERS } from '@utils/dns'

export async function getDomainIPs(domain: string): Promise<string[]> {
  for (const server in BUILTIN_DOH_SERVERS) {
    try {
      const url = BUILTIN_DOH_SERVERS[server].url
      const AResponsePromise = makeDOHQuery(url, { name: domain, type: 'A' })
      const AAAAResponsePromise = makeDOHQuery(url, {
        name: domain,
        type: 'AAAA',
      })
      const [AResponse, AAAAResponse] = await Promise.all([AResponsePromise, AAAAResponsePromise])
      const ips = []
      if (AResponse.Answer) {
        ips.push(
          ...AResponse.Answer.filter((answer) => answer.type === 1).map((answer) => answer.data),
        )
      }
      if (AAAAResponse.Answer) {
        ips.push(
          ...AAAAResponse.Answer.filter((answer) => answer.type === 28).map(
            (answer) => answer.data,
          ),
        )
      }
      return ips
    } catch (e) {
      console.error(e)
    }
  }
  throw new Error('Failed to get domain IP.')
}
