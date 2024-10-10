import { generateFaviconICO } from './generate-favicon-ico'
import { generateFaviconPNG } from './generate-favicon-png'
import { generateFaviconSVG } from './generate-favicon-svg'

import type { DesktopBrowserOptions } from './types'

export async function generateAssets(
  image_: Blob | undefined,
  options: DesktopBrowserOptions
): Promise<File[]> {
  const image = options?.image ?? image_
  if (image === undefined) {
    throw new Error('image is undefined')
  }

  if (image.type === 'image/svg+xml' && options.original) {
    const files: File[] = []
    const blobs = await Promise.all([
      generateFaviconICO(image, options),
      generateFaviconSVG(image, options)
    ])

    files.push(
      new File([blobs[0]], 'favicon.ico', {
        type: 'image/x-icon'
      })
    )

    files.push(
      new File([blobs[1]], 'favicon.svg', {
        type: 'image/svg+xml'
      })
    )

    return files
  } else {
    const files: File[] = []
    const blobs = await Promise.all([
      generateFaviconICO(image, options),
      generateFaviconPNG(image, options, 32),
      generateFaviconPNG(image, options, 16)
    ])

    files.push(new File([blobs[0]], 'favicon.ico', { type: 'image/x-icon' }))
    files.push(new File([blobs[1]], 'favicon-32x32.png', { type: 'image/png' }))
    files.push(new File([blobs[2]], 'favicon-16x16.png', { type: 'image/png' }))

    return files
  }
}
