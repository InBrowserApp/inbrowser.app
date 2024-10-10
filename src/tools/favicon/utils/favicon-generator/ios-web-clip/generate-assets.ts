import { generateOutput } from './generate-output'
import type { iOSWebClipOptions } from './types'

export async function generateAssets(
  image: Blob | undefined,
  options: iOSWebClipOptions
): Promise<File[]> {
  const files: File[] = []
  const output = await generateOutput(image, options)
  files.push(
    new File([output], 'apple-touch-icon.png', {
      type: 'image/png'
    })
  )

  return files
}
