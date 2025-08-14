import { normalizeCidr } from 'cidr-tools'

export function macAddressToIPv6LinkLocalAddress(mac: string): string {
  // Remove any separators and convert MAC to array of bytes
  const bytes = mac.replace(/[:-]/g, '').match(/.{1,2}/g)

  if (!bytes || bytes.length !== 6) {
    throw new Error('Invalid MAC address format')
  }

  // Flip the 7th bit of the first byte (U/L bit)
  const firstByte = parseInt(bytes[0], 16)
  bytes[0] = ((firstByte ^ 0x02) & 0xff).toString(16).padStart(2, '0')

  // Insert ff:fe in the middle of the MAC address
  bytes.splice(3, 0, 'ff', 'fe')

  // Combine the bytes into two-byte pairs for IPv6 format
  const ipv6Pairs = []
  for (let i = 0; i < bytes.length; i += 2) {
    ipv6Pairs.push(bytes[i] + bytes[i + 1])
  }

  // Join the pairs with colons and format as IPv6 link-local
  const linkLocal = `fe80::${ipv6Pairs.join(':')}`

  const normalized = normalizeCidr(linkLocal).toString()

  return normalized
}
