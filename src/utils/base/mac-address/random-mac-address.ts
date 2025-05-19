/**
 * Generates a random MAC address in the format XX:XX:XX:XX:XX:XX
 * where X is a random hexadecimal digit (0-9 or A-F)
 *
 * @returns {string} A randomly generated MAC address
 * @example
 * // Returns something like "1A:2B:3C:4D:5E:6F"
 * randomMACAddress()
 */
export function randomMACAddress(): string {
  const macAddress = 'XX:XX:XX:XX:XX:XX'.replace(/X/g, function () {
    return '0123456789ABCDEF'.charAt(Math.floor(Math.random() * 16))
  })

  return macAddress
}
