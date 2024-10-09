export function parseMACAddress(address: string): Array<number> {
  // remove characters that are not hex digits
  const hexDigits = address.replace(/[^0-9a-fA-F]/g, '')
  // split into groups of two characters
  const hexPairs = hexDigits.match(/.{1,2}/g) || []
  // convert each pair to a number
  const numbers = hexPairs.map((pair) => parseInt(pair, 16))
  return numbers
}
