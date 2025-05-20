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
