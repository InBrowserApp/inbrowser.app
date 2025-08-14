import type { GeneralInfoOptions } from '../general-info'
import type { DesktopBrowserOptions } from '../desktop-browser'
import type { PWAOptions } from '../pwa'
import type { iOSWebClipOptions } from '../ios-web-clip'
import { generateAssets as generateiOSAssets } from '../ios-web-clip'
import { generateAssets as generatePWAAssets } from '../pwa'
import { generateAssets as generateDesktopBrowserAssets } from '../desktop-browser'
import { generateAssets as generateGeneralAssets } from '../general-info'

export interface GenerateAssetsOptions {
  generalInfo: GeneralInfoOptions
  desktopBrowser: DesktopBrowserOptions
  pwa: PWAOptions
  iosWebClip: iOSWebClipOptions
}

export async function generateAssets(
  image: Blob | undefined,
  options: GenerateAssetsOptions,
): Promise<Blob> {
  const zipJSPromise = import('@zip.js/zip.js')

  const files: File[] = []

  const filesList = await Promise.all([
    generateiOSAssets(image, options.iosWebClip),
    generatePWAAssets(image, options.pwa),
    generateDesktopBrowserAssets(image, options.desktopBrowser),
    generateGeneralAssets(options.generalInfo),
  ])

  for (const asset of filesList) {
    files.push(...asset)
  }

  const { BlobReader, BlobWriter, ZipWriter } = await zipJSPromise

  const zipFileWriter = new BlobWriter()

  const zipWriter = new ZipWriter(zipFileWriter)
  for (const file of files) {
    await zipWriter.add(file.name, new BlobReader(file))
  }

  await zipWriter.close()
  const zipFileBlob = await zipFileWriter.getData()
  return zipFileBlob
}
