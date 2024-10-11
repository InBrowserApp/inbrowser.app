import { generatePWAPNG } from './generate-pwa-png'
import { generatePWAMaskablePNG } from './generate-pwa-maskable-png'
import type { PWAOptions } from './types'

export async function generateAssets(
  image: Blob | undefined,
  options: PWAOptions
): Promise<File[]> {
  const files: File[] = []
  const blobs = await Promise.all([
    generatePWAPNG(image, options, 192),
    generatePWAPNG(image, options, 512),
    generatePWAMaskablePNG(image, options, 192),
    generatePWAMaskablePNG(image, options, 512)
  ])

  files.push(
    new File([blobs[0]], 'pwa-192x192.png', {
      type: 'image/png'
    })
  )

  files.push(
    new File([blobs[1]], 'pwa-512x512.png', {
      type: 'image/png'
    })
  )

  files.push(
    new File([blobs[2]], 'pwa-maskable-192x192.png', {
      type: 'image/png'
    })
  )

  files.push(
    new File([blobs[3]], 'pwa-maskable-512x512.png', {
      type: 'image/png'
    })
  )

  return files
}
