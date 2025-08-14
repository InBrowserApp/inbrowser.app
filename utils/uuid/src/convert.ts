import { parse as parseUUID } from 'uuid'
import type { UUID } from './types'

/**
 * Converts a UUID to base64 string
 * @param uuid - The UUID string to convert
 * @returns The base64 encoded string
 */
export function uuidToBase64(uuid: UUID): string {
  const bytes = parseUUID(uuid)
  // Convert to base64 and remove padding
  // Convert the byte array to a binary string...
  let binary = ''
  for (let i = 0; i < bytes.length; i++) {
    binary += String.fromCharCode(bytes[i])
  }

  // …then Base64‐encode
  const base64 = btoa(binary)
  return base64
}

/**
 * Converts a UUID to a BigInt
 * @param uuid - The UUID string to convert
 * @returns The UUID as a BigInt
 */
export function uuidToInteger(uuid: UUID): bigint {
  // Remove hyphens and convert to BigInt
  const hexString = uuid.replace(/-/g, '')
  return BigInt('0x' + hexString)
}

/**
 * Converts a UUID to a decimal string
 * @param uuid - The UUID string to convert
 * @returns The UUID as a decimal string
 */
export function uuidToDecimal(uuid: UUID): string {
  // First convert to integer, then to decimal string
  const integer = uuidToInteger(uuid)
  return integer.toString()
}

/**
 * Converts a UUID to a hex string
 * @param uuid - The UUID string to convert
 * @returns The UUID as a hex string
 */
export function uuidToHex(uuid: UUID): string {
  // Remove hyphens to get pure hex string
  return uuid.replace(/-/g, '')
}

/**
 * Converts a UUID to an octal string
 * @param uuid - The UUID string to convert
 * @returns The UUID as an octal string
 */
export function uuidToOctal(uuid: UUID): string {
  // First convert to integer, then to octal
  const integer = uuidToInteger(uuid)
  return integer.toString(8)
}

/**
 * Converts a UUID to a binary string
 * @param uuid - The UUID string to convert
 * @returns The UUID as a binary string
 */
export function uuidToBinary(uuid: UUID): string {
  // First convert to integer, then to binary
  const integer = uuidToInteger(uuid)
  return integer.toString(2)
}

/**
 * Converts a base64 string to a UUID
 * @param base64 - The base64 string to convert
 * @returns The UUID string
 */
export function base64ToUUID(base64: string): UUID {
  // Convert base64 to binary string
  const binary = atob(base64)

  // Convert binary string to byte array
  const bytes = new Uint8Array(binary.length)
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i)
  }

  // Convert bytes to hex string
  let hexString = ''
  for (let i = 0; i < bytes.length; i++) {
    hexString += bytes[i].toString(16).padStart(2, '0')
  }

  // Add hyphens in the correct positions
  return `${hexString.slice(0, 8)}-${hexString.slice(8, 12)}-${hexString.slice(12, 16)}-${hexString.slice(16, 20)}-${hexString.slice(20)}`
}

/**
 * Converts a BigInt to a UUID
 * @param integer - The BigInt to convert
 * @returns The UUID string
 */
export function integerToUUID(integer: bigint): UUID {
  // Convert to hex string and pad with zeros
  const hexString = integer.toString(16).padStart(32, '0')
  // Add hyphens in the correct positions
  return `${hexString.slice(0, 8)}-${hexString.slice(8, 12)}-${hexString.slice(12, 16)}-${hexString.slice(16, 20)}-${hexString.slice(20)}`
}

/**
 * Converts a hex string to a UUID
 * @param hex - The hex string to convert
 * @returns The UUID string
 */
export function hexToUUID(hex: string): UUID {
  // Add hyphens in the correct positions
  return `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20)}`
}

/**
 * Converts an octal string to a UUID
 * @param octal - The octal string to convert
 * @returns The UUID string
 */
export function octalToUUID(octal: string): UUID {
  // Convert octal to BigInt, then to UUID
  const integer = BigInt('0o' + octal)
  return integerToUUID(integer)
}

/**
 * Converts a binary string to a UUID
 * @param binary - The binary string to convert
 * @returns The UUID string
 */
export function binaryToUUID(binary: string): UUID {
  // Convert binary to BigInt, then to UUID
  const integer = BigInt('0b' + binary)
  return integerToUUID(integer)
}

/**
 * Converts a decimal string to a UUID
 * @param decimal - The decimal string to convert
 * @returns The UUID string
 */
export function decimalToUUID(decimal: string): UUID {
  // Convert decimal to BigInt, then to UUID
  const integer = BigInt(decimal)
  return integerToUUID(integer)
}
