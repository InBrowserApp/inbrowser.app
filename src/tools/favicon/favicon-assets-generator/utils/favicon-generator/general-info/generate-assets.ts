import { generateManifest } from './generate-manifest'
import type { GeneralInfoOptions } from './types'

export async function generateAssets(options: GeneralInfoOptions): Promise<File[]> {
  const files: File[] = []
  const output = await generateManifest(options)

  files.push(
    new File([output], 'site.webmanifest', {
      type: 'application/manifest+json',
    }),
  )

  return files
}
