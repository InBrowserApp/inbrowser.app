export function ReverseIPDomain(ip: string): string {
  let reverseIPDomain = ''
  if (ip.includes(':')) {
    reverseIPDomain = toIPv6Arpa(ip)
  } else {
    reverseIPDomain = ip.split('.').reverse().join('.') + '.in-addr.arpa'
  }

  return reverseIPDomain
}

function toIPv6Arpa(ipv6: string): string {
  // Step 1: Expand the IPv6 address to its full form
  const expandedIPv6 = expandIPv6Address(ipv6)
  // Step 2: Remove the colons
  const noColons = expandedIPv6.replace(/:/g, '')
  // Step 3: Reverse the order of the characters
  const reversed = noColons.split('').reverse().join('')
  // Step 4: Insert dots between every character
  const dotted = reversed.split('').join('.')
  // Step 5: Append .ip6.arpa to the end
  const arpaFormat = dotted + '.ip6.arpa'

  return arpaFormat
}

function expandIPv6Address(address: string) {
  let fullAddress = ''
  const segments = address.split('::')
  if (segments.length === 2) {
    const segment1 = segments[0]!.split(':')
    const segment2 = segments[1]!.split(':')
    const missingZeroes = 8 - (segment1.length + segment2.length)
    fullAddress = segment1.join(':')
    for (let i = 0; i < missingZeroes; i++) {
      fullAddress += ':0000'
    }
    fullAddress += ':' + segment2.join(':')
  } else {
    fullAddress = address
  }
  const hextets = fullAddress.split(':')
  for (let i = 0; i < hextets.length; i++) {
    hextets[i] = ('0000' + hextets[i]).slice(-4)
  }
  return hextets.join(':')
}
