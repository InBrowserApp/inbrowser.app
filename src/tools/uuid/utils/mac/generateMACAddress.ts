export function generateMACAddress(): string {
  const macAddress = 'XX:XX:XX:XX:XX:XX'.replace(/X/g, function () {
    return '0123456789ABCDEF'.charAt(Math.floor(Math.random() * 16))
  })

  return macAddress
}
