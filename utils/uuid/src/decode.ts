import { validate, version as uuidVersion } from 'uuid'
import type { UUID, UUIDv1 } from './types'
import * as convert from './convert'

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
  /** The base64 representation of the UUID */
  base64: string
  /** The integer representation of the UUID */
  integer: bigint
  /** The octal representation of the UUID */
  octal: string
  /** The binary representation of the UUID */
  binary: string
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
export function decode(uuid_: string): DecodeResult {
  if (!validate(uuid_)) {
    throw new Error('Invalid UUID')
  }

  const uuid = uuid_ as UUID
  const version = uuidVersion(uuid)
  const variant = getVariant(uuid)
  const base64 = convert.uuidToBase64(uuid)
  const integer = convert.uuidToInteger(uuid)
  const octal = convert.uuidToOctal(uuid)
  const binary = convert.uuidToBinary(uuid)

  const result: DecodeResult = {
    uuid,
    version,
    variant,
    base64,
    integer,
    octal,
    binary,
  }

  if (version === 1) {
    const v1uuid = uuid as UUIDv1
    result.macAddress = extractMacAddressFromUUIDv1(v1uuid)
    result.timestamp = extractTimeFromUUIDv1(v1uuid)
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
 * Gets the variant of a UUID
 * @param uuid - The UUID string
 * @returns The variant number (0, 1, 2, or 3)
 */
export function getVariant(uuid: UUID): number {
  const uuidBytes = uuid.split('-').join('')
  const variantByte = parseInt(uuidBytes[16]!, 16)

  if (variantByte >= 8 && variantByte <= 11) {
    return 1
  } else if (variantByte === 12 || variantByte === 13) {
    return 2
  } else if (variantByte === 14 || variantByte === 15) {
    return 3
  }
  return 0
}

/**
 * Extracts the MAC address from a version 1 UUID
 * @param uuid - The version 1 UUID
 * @returns The MAC address in format "XX:XX:XX:XX:XX:XX"
 */
function extractMacAddressFromUUIDv1(uuid: UUIDv1) {
  return uuid
    .split('-')[4]!
    .toUpperCase()
    .match(/.{1,2}/g)
    ?.join(':')
}

/**
 * Extracts the timestamp from a version 1 UUID
 * @param uuid - The version 1 UUID
 * @returns The timestamp in milliseconds since Unix epoch
 */
function extractTimeFromUUIDv1(uuid: UUIDv1) {
  const uuidParts = uuid.split('-')
  const timeStr = [uuidParts[2]!.substring(1), uuidParts[1], uuidParts[0]].join('')
  const timeInt = BigInt('0x' + timeStr)
  const unixTime = Number((timeInt - 122192928000000000n) / 10000n)
  return unixTime
}
