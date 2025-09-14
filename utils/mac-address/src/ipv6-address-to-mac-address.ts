export function ipv6AddressToMacAddress(ipv6: string): string {
  try {
    const hextets = expandIPv6(ipv6)
    if (hextets.length !== 8) {
      return ''
    }

    // Interface Identifier is the last 64 bits (last 4 hextets => 8 bytes)
    const interfaceIdHextets = hextets.slice(4)

    const interfaceIdBytes: number[] = interfaceIdHextets.flatMap((h) => {
      const high = parseInt(h.slice(0, 2), 16)
      const low = parseInt(h.slice(2, 4), 16)
      return [high, low]
    })

    if (interfaceIdBytes.length !== 8) {
      return ''
    }

    // Must be an EUI-64 derived IID which contains ff:fe in the middle
    if (interfaceIdBytes[3] !== 0xff || interfaceIdBytes[4] !== 0xfe) {
      return ''
    }

    // Recover the original MAC: remove ff:fe and flip the U/L bit back
    const macBytes = [
      interfaceIdBytes[0]! ^ 0x02,
      interfaceIdBytes[1]!,
      interfaceIdBytes[2]!,
      interfaceIdBytes[5]!,
      interfaceIdBytes[6]!,
      interfaceIdBytes[7]!,
    ]

    return macBytes
      .map((b) => b.toString(16).padStart(2, '0'))
      .join(':')
      .toUpperCase()
  } catch {
    return ''
  }
}

function expandIPv6(input: string): string[] {
  // Drop zone index if present (fe80::1%eth0)
  const percentIndex = input.indexOf('%')
  if (percentIndex !== -1) {
    input = input.slice(0, percentIndex)
  }

  // Normalize case
  input = input.trim()

  const doubleColonSplit = input.split('::')

  let headParts: string[] = []
  let tailParts: string[] = []

  if (doubleColonSplit.length === 1) {
    headParts = doubleColonSplit[0]!.split(':').filter(Boolean)
  } else if (doubleColonSplit.length === 2) {
    headParts = doubleColonSplit[0]!.length ? doubleColonSplit[0]!.split(':').filter(Boolean) : []
    tailParts = doubleColonSplit[1]!.length ? doubleColonSplit[1]!.split(':').filter(Boolean) : []
  } else {
    return []
  }

  // Handle embedded IPv4 (e.g., ::ffff:192.0.2.128)
  const replaceEmbeddedIPv4 = (parts: string[]): string[] => {
    if (parts.length === 0) return parts
    const last = parts[parts.length - 1]!
    if (/\./.test(last)) {
      const octets = last.split('.').map((n) => Number(n))
      if (octets.length === 4 && octets.every((n) => Number.isInteger(n) && n >= 0 && n <= 255)) {
        const h1 = ((octets[0]! << 8) | octets[1]!).toString(16)
        const h2 = ((octets[2]! << 8) | octets[3]!).toString(16)
        return parts.slice(0, -1).concat([h1, h2])
      }
    }
    return parts
  }

  headParts = replaceEmbeddedIPv4(headParts)
  tailParts = replaceEmbeddedIPv4(tailParts)

  if (doubleColonSplit.length === 1) {
    if (headParts.length !== 8) {
      return []
    }
    return headParts.map((h) => h.padStart(4, '0'))
  }

  const missing = 8 - (headParts.length + tailParts.length)
  if (missing < 0) {
    return []
  }

  const expanded = [...headParts, ...Array(missing).fill('0'), ...tailParts].map((h) =>
    h.padStart(4, '0'),
  )

  return expanded
}
