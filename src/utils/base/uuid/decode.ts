import { validate, version as uuidVersion } from 'uuid'
import type { UUID } from '.'

/**
 * Represents the decoded information from a UUID
 */
interface DecodeResult {
  /** The original UUID string */
  uuid: UUID
  /** The UUID version (1, 3, 4, or 5) */
  version: number
  /** The UUID variant (0-3) */
  variant: number
  /** The hashing algorithm used for v3/v5 UUIDs */
  algorithm?: 'sha1' | 'md5'
  /** The MAC address for v1 UUIDs */
  macAddress?: string
  /** The timestamp for v1 UUIDs in milliseconds since Unix epoch */
  timestamp?: number
}

/**
 * Decodes a UUID string into its components
 * @param uuid - The UUID string to decode
 * @returns A DecodeResult object containing the decoded UUID information
 * @throws Error if the UUID is invalid
 */
export function decode(uuid: string): DecodeResult {
  if (!validate(uuid)) {
    throw new Error('Invalid UUID')
  }

  const version = uuidVersion(uuid)

  const uuidBytes = uuid.split('-').join('')
  const variantByte = parseInt(uuidBytes[16], 16)
  let variant = 0
  if (variantByte >= 8 && variantByte <= 11) {
    variant = 1
  } else if (variantByte === 12 || variantByte === 13) {
    variant = 2
  } else if (variantByte === 14 || variantByte === 15) {
    variant = 3
  }

  const result: DecodeResult = {
    uuid: uuid as UUID,
    version,
    variant,
  }

  if (version === 1) {
    const { macAddress, timestamp } = decodeV1(uuid)
    result.macAddress = macAddress
    result.timestamp = timestamp
  }

  if (version === 3) {
    result.algorithm = 'md5'
  }

  if (version === 5) {
    result.algorithm = 'sha1'
  }

  return result
}

/**
 * Decodes a version 1 UUID into its MAC address and timestamp
 * @param uuid - The version 1 UUID to decode
 * @returns Object containing the MAC address and timestamp
 */
export function decodeV1(uuid: string) {
  return {
    macAddress: extractMacAddressFromUUIDv1(uuid),
    timestamp: extractTimeFromUUIDv1(uuid),
  }
}

/**
 * Extracts the MAC address from a version 1 UUID
 * @param uuid - The version 1 UUID
 * @returns The MAC address in format "XX:XX:XX:XX:XX:XX"
 */
function extractMacAddressFromUUIDv1(uuid: string) {
  return uuid
    .split('-')[4]
    .toUpperCase()
    .match(/.{1,2}/g)
    ?.join(':')
}

/**
 * Extracts the timestamp from a version 1 UUID
 * @param uuid - The version 1 UUID
 * @returns The timestamp in milliseconds since Unix epoch
 */
function extractTimeFromUUIDv1(uuid: string) {
  const uuidParts = uuid.split('-')
  const timeStr = [uuidParts[2].substring(1), uuidParts[1], uuidParts[0]].join('')
  const timeInt = BigInt('0x' + timeStr)
  const unixTime = Number((timeInt - 122192928000000000n) / 10000n)
  return unixTime
}
