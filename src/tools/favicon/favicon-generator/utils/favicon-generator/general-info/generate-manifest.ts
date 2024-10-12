import type { GeneralInfoOptions } from './types'
import { normalizePath } from './normalize-path'

export function generateManifestText(options: GeneralInfoOptions): string {
  const manifest: any = {
    name: options.name,
    short_name: options.short_name,
    icons: [
      {
        src: normalizePath(options.path) + 'pwa-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any'
      },
      {
        src: normalizePath(options.path) + 'pwa-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any'
      },
      {
        src: normalizePath(options.path) + 'pwa-maskable-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable'
      },
      {
        src: normalizePath(options.path) + 'pwa-maskable-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable'
      }
    ],
    start_url: options.start_url,
    display: options.display,
    background_color: options.background_color,
    theme_color: options.theme_color
  }

  if (options.description !== '') {
    manifest['description'] = options.description
  }

  const json = JSON.stringify(manifest, null, 2)
  return json
}

export async function generateManifest(options: GeneralInfoOptions): Promise<Blob> {
  const json = generateManifestText(options)
  const blob = new Blob([json], { type: 'application/json' })
  return blob
}
