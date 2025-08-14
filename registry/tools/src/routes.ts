import type { ToolRoute } from '@shared/tools'
import { routes as faviconAssetsGeneratorRoutes } from '@tools/favicon-assets-generator/routes'
import { routes as uuidRoutes } from '@tools/uuid/routes'
import { routes as removePDFOwnerPasswordRoutes } from '@tools/remove-pdf-owner-password/routes'
import { routes as unicodePunycodeConverterRoutes } from '@tools/unicode-punycode-converter/routes'
import { routes as dnsLookupRoutes } from '@tools/dns-lookup/routes'
import { routes as reverseIPLookupRoutes } from '@tools/reverse-ip-lookup/routes'
import { routes as myIPAddressRoutes } from '@tools/my-ip-address/routes'
import { routes as ipInfoLookupRoutes } from '@tools/ip-info-lookup/routes'
import { routes as cidrParserRoutes } from '@tools/cidr-parser/routes'
import { routes as cidrsMergerExcluderRoutes } from '@tools/cidrs-merger-excluder/routes'
import { routes as ipRangeToCIDRRoutes } from '@tools/ip-range-to-cidr/routes'
import { routes as ipCidrNormalizerRoutes } from '@tools/ip-cidr-normalizer/routes'
import { routes as macToIPv6LinkLocalRoutes } from '@tools/mac-to-ipv6-link-local/routes'
import { routes as ipv6ToMacRoutes } from '@tools/ipv6-to-mac/routes'
import { routes as currentNetworkTimeRoutes } from '@tools/current-network-time/routes'
import { routes as pngOptimizerRoutes } from '@tools/png-optimizer/routes'
import { routes as networkToolsRoutes } from '@tools/network-tools/routes'
import { routes as pdfToolsRoutes } from '@tools/pdf-tools/routes'
import { routes as imageToolsRoutes } from '@tools/image-tools/routes'
import { routes as sha256HashTextOrFileRoutes } from '@tools/sha256-hash-text-or-file/routes'
import { routes as sha384HashTextOrFileRoutes } from '@tools/sha384-hash-text-or-file/routes'
import { routes as sha512HashTextOrFileRoutes } from '@tools/sha512-hash-text-or-file/routes'
import { routes as sha1HashTextOrFileRoutes } from '@tools/sha1-hash-text-or-file/routes'
import { routes as md5HashTextOrFileRoutes } from '@tools/md5-hash-text-or-file/routes'
import { routes as ripemd160HashTextOrFileRoutes } from '@tools/ripemd160-hash-text-or-file/routes'
import { routes as keccakHashTextOrFileRoutes } from '@tools/keccak-hash-text-or-file/routes'
import { routes as bcryptHashPasswordRoutes } from '@tools/bcrypt-hash-password/routes'
import { routes as bcryptHashPasswordVerifierRoutes } from '@tools/bcrypt-hash-password-verifier/routes'
import { routes as hashToolsRoutes } from '@tools/hash-tools/routes'
import { routes as sriHashGeneratorRoutes } from '@tools/sri-hash-generator/routes'
import { routes as crcChecksumCalculatorRoutes } from '@tools/crc-checksum-calculator/routes'
import { routes as xxhashXxh32HashTextOrFileRoutes } from '@tools/xxhash-xxh32-hash-text-or-file/routes'
import { routes as xxhashXxh64HashTextOrFileRoutes } from '@tools/xxhash-xxh64-hash-text-or-file/routes'
import { routes as blake2bHashTextOrFileRoutes } from '@tools/blake2b-hash-text-or-file/routes'
import { routes as blake2sHashTextOrFileRoutes } from '@tools/blake2s-hash-text-or-file/routes'
import { routes as urlComponentEncoderDecoderRoutes } from '@tools/url-component-encoder-decoder/routes'
import { routes as urlParserBuilderRoutes } from '@tools/url-parser-builder/routes'

export const routes: ToolRoute[] = [
  ...faviconAssetsGeneratorRoutes,
  ...uuidRoutes,
  ...removePDFOwnerPasswordRoutes,
  ...unicodePunycodeConverterRoutes,
  ...dnsLookupRoutes,
  ...reverseIPLookupRoutes,
  ...myIPAddressRoutes,
  ...ipInfoLookupRoutes,
  ...cidrParserRoutes,
  ...cidrsMergerExcluderRoutes,
  ...ipRangeToCIDRRoutes,
  ...ipCidrNormalizerRoutes,
  ...macToIPv6LinkLocalRoutes,
  ...ipv6ToMacRoutes,
  ...currentNetworkTimeRoutes,
  ...pngOptimizerRoutes,
  ...networkToolsRoutes,
  ...pdfToolsRoutes,
  ...imageToolsRoutes,
  ...sha256HashTextOrFileRoutes,
  ...sha384HashTextOrFileRoutes,
  ...sha512HashTextOrFileRoutes,
  ...sha1HashTextOrFileRoutes,
  ...md5HashTextOrFileRoutes,
  ...ripemd160HashTextOrFileRoutes,
  ...keccakHashTextOrFileRoutes,
  ...bcryptHashPasswordRoutes,
  ...bcryptHashPasswordVerifierRoutes,
  ...hashToolsRoutes,
  ...sriHashGeneratorRoutes,
  ...crcChecksumCalculatorRoutes,
  ...xxhashXxh32HashTextOrFileRoutes,
  ...xxhashXxh64HashTextOrFileRoutes,
  ...blake2bHashTextOrFileRoutes,
  ...blake2sHashTextOrFileRoutes,
  ...urlComponentEncoderDecoderRoutes,
  ...urlParserBuilderRoutes,
]
