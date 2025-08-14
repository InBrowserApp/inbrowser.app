import type { DesktopBrowserOptions } from './types'
import { generateFaviconPNG } from './generate-favicon-png'
import { PngIcoConverter } from '@utils/image'

export async function generateFaviconICO(
  blob: Blob,
  options: DesktopBrowserOptions,
): Promise<Blob> {
  const pngs = await Promise.all([
    generateFaviconPNG(blob, options, 48),
    generateFaviconPNG(blob, options, 32),
    generateFaviconPNG(blob, options, 16),
  ])

  const inputs = pngs.map((png) => ({
    png,
  }))

  const converter = new PngIcoConverter()

  const resultBlob = await converter.convertToBlobAsync(inputs)
  return resultBlob
}
