export function randomMACAddress(): string {
  const buffer = new Uint8Array(6)
  crypto.getRandomValues(buffer)

  // Set the locally administered bit (bit 1 of first byte) to 1
  // and ensure unicast (bit 0 of first byte) is 0
  buffer[0] = (buffer[0] & 0xfe) | 0x02

  return Array.from(buffer)
    .map((byte) => byte.toString(16).padStart(2, '0'))
    .join(':')
    .toLocaleUpperCase()
}
