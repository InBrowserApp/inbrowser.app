/**
 * Parses a MAC address string into an array of numbers.
 *
 * @param address - The MAC address string to parse. Can contain any separators (e.g. ':', '-', '.')
 * @returns An array of 6 numbers representing the MAC address bytes
 * @example
 * parseMACAddressToNumber('00:11:22:33:44:55') // returns [0, 17, 34, 51, 68, 85]
 * parseMACAddressToNumber('00-11-22-33-44-55') // returns [0, 17, 34, 51, 68, 85]
 * parseMACAddressToNumber('001122334455') // returns [0, 17, 34, 51, 68, 85]
 */
export function parseMACAddressToNumber(address: string): Array<number> {
  // remove characters that are not hex digits
  const hexDigits = address.replace(/[^0-9a-fA-F]/g, '')
  // split into groups of two characters
  const hexPairs = hexDigits.match(/.{1,2}/g) || []
  // convert each pair to a number
  const numbers = hexPairs.map((pair) => parseInt(pair, 16))
  return numbers
}

/**
 * Parses a MAC address string into an ArrayBuffer.
 *
 * @param address - The MAC address string to parse. Can contain any separators (e.g. ':', '-', '.')
 * @returns An ArrayBuffer containing the MAC address bytes
 * @example
 * parseMACAddressToArrayBuffer('00:11:22:33:44:55') // returns ArrayBuffer with bytes [0, 17, 34, 51, 68, 85]
 * parseMACAddressToArrayBuffer('00-11-22-33-44-55') // returns ArrayBuffer with bytes [0, 17, 34, 51, 68, 85]
 * parseMACAddressToArrayBuffer('001122334455') // returns ArrayBuffer with bytes [0, 17, 34, 51, 68, 85]
 */
export function parseMACAddressToArrayBuffer(address: string): ArrayBuffer {
  const numbers = parseMACAddressToNumber(address)
  const buffer = new ArrayBuffer(6)
  const view = new Uint8Array(buffer)
  numbers.forEach((num, index) => {
    view[index] = num
  })
  return buffer
}
