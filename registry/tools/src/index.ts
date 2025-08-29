import type { ToolInfo, ToolRoute } from '@shared/tools'
export type { ToolInfo, ToolRoute }
import { toolInfo as faviconAssetsGeneratorToolInfo } from '@tools/favicon-assets-generator'
import { tools as uuidTools } from '@tools/uuid'
import { toolInfo as removePDFOwnerPasswordToolInfo } from '@tools/remove-pdf-owner-password'
import { toolInfo as unicodePunycodeConverterToolInfo } from '@tools/unicode-punycode-converter'
import { toolInfo as dnsLookupToolInfo } from '@tools/dns-lookup'
import { toolInfo as reverseIPLookupToolInfo } from '@tools/reverse-ip-lookup'
import { toolInfo as myIPAddressToolInfo } from '@tools/my-ip-address'
import { tools as redirectsTools } from '@tools/redirects'
import { toolInfo as ipInfoLookupToolInfo } from '@tools/ip-info-lookup'
import { toolInfo as cidrParserToolInfo } from '@tools/cidr-parser'
import { toolInfo as cidrsMergerExcluderToolInfo } from '@tools/cidrs-merger-excluder'
import { toolInfo as ipRangeToCIDRToolInfo } from '@tools/ip-range-to-cidr'
import { toolInfo as ipCidrNormalizerToolInfo } from '@tools/ip-cidr-normalizer'
import { toolInfo as macToIPv6LinkLocalToolInfo } from '@tools/mac-to-ipv6-link-local'
import { toolInfo as ipv6ToMacToolInfo } from '@tools/ipv6-to-mac'
import { toolInfo as currentNetworkTimeToolInfo } from '@tools/current-network-time'
import { toolInfo as pngOptimizerToolInfo } from '@tools/png-optimizer'
import { toolInfo as networkToolsToolInfo } from '@tools/network-tools'
import { toolInfo as pdfToolsToolInfo } from '@tools/pdf-tools'
import { toolInfo as imageToolsToolInfo } from '@tools/image-tools'
import { toolInfo as sha256HashTextOrFileToolInfo } from '@tools/sha256-hash-text-or-file'
import { toolInfo as sha384HashTextOrFileToolInfo } from '@tools/sha384-hash-text-or-file'
import { toolInfo as sha512HashTextOrFileToolInfo } from '@tools/sha512-hash-text-or-file'
import { toolInfo as sha1HashTextOrFileToolInfo } from '@tools/sha1-hash-text-or-file'
import { toolInfo as md5HashTextOrFileToolInfo } from '@tools/md5-hash-text-or-file'
import { toolInfo as ripemd160HashTextOrFileToolInfo } from '@tools/ripemd160-hash-text-or-file'
import { toolInfo as keccakHashTextOrFileToolInfo } from '@tools/keccak-hash-text-or-file'
import { toolInfo as bcryptHashPasswordToolInfo } from '@tools/bcrypt-hash-password'
import { toolInfo as bcryptHashPasswordVerifierToolInfo } from '@tools/bcrypt-hash-password-verifier'
import { toolInfo as hashToolsToolInfo } from '@tools/hash-tools'
import { toolInfo as sriHashGeneratorToolInfo } from '@tools/sri-hash-generator'
import { toolInfo as crcChecksumCalculatorToolInfo } from '@tools/crc-checksum-calculator'
import { toolInfo as xxhashXxh32HashTextOrFileToolInfo } from '@tools/xxhash-xxh32-hash-text-or-file'
import { toolInfo as xxhashXxh64HashTextOrFileToolInfo } from '@tools/xxhash-xxh64-hash-text-or-file'
import { toolInfo as blake2bHashTextOrFileToolInfo } from '@tools/blake2b-hash-text-or-file'
import { toolInfo as blake2sHashTextOrFileToolInfo } from '@tools/blake2s-hash-text-or-file'
import { toolInfo as urlComponentEncoderDecoderToolInfo } from '@tools/url-component-encoder-decoder'
import { toolInfo as urlParserBuilderToolInfo } from '@tools/url-parser-builder'
import { toolInfo as basicAuthGeneratorToolInfo } from '@tools/basic-auth-generator'
import { toolInfo as basicAuthDecoderToolInfo } from '@tools/basic-auth-decoder'

export const tools: ToolInfo[] = [
  // Network Tools
  cidrParserToolInfo,
  cidrsMergerExcluderToolInfo,
  currentNetworkTimeToolInfo,
  dnsLookupToolInfo,
  ipCidrNormalizerToolInfo,
  ipInfoLookupToolInfo,
  ipRangeToCIDRToolInfo,
  ipv6ToMacToolInfo,
  macToIPv6LinkLocalToolInfo,
  myIPAddressToolInfo,
  reverseIPLookupToolInfo,
  networkToolsToolInfo,
  unicodePunycodeConverterToolInfo,

  // UUID/ID Tools
  ...uuidTools,

  // Image Tools
  imageToolsToolInfo,
  faviconAssetsGeneratorToolInfo,
  pngOptimizerToolInfo,

  // PDF Tools
  pdfToolsToolInfo,
  removePDFOwnerPasswordToolInfo,

  // Hash Tools
  sha256HashTextOrFileToolInfo,
  sha384HashTextOrFileToolInfo,
  sha512HashTextOrFileToolInfo,
  sha1HashTextOrFileToolInfo,
  md5HashTextOrFileToolInfo,
  ripemd160HashTextOrFileToolInfo,
  keccakHashTextOrFileToolInfo,
  bcryptHashPasswordToolInfo,
  bcryptHashPasswordVerifierToolInfo,
  hashToolsToolInfo,
  sriHashGeneratorToolInfo,
  crcChecksumCalculatorToolInfo,
  xxhashXxh32HashTextOrFileToolInfo,
  xxhashXxh64HashTextOrFileToolInfo,
  blake2bHashTextOrFileToolInfo,
  blake2sHashTextOrFileToolInfo,

  // Web Tools
  urlComponentEncoderDecoderToolInfo,
  urlParserBuilderToolInfo,
  basicAuthGeneratorToolInfo,
  basicAuthDecoderToolInfo,

  // Other Tools
  ...redirectsTools,
]
