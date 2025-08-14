import type { iOSWebClipOptions } from './types'
import { getImageSize } from '@utils/image'
import { optimizePNG } from '@utils/image'

export async function generateOutput(
  image: Blob | undefined,
  options: iOSWebClipOptions,
): Promise<Blob> {
  const blob = image ?? options?.image
  if (blob === undefined) {
    throw new Error('image is undefined')
  }

  const { height, width } = await getImageSize(blob)

  const imageMaxSize = Math.max(height, width)

  // Create a new canvas element
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')
  if (!ctx) {
    console.error('Canvas context is null')
    throw new Error('Canvas context is null')
  }

  // Set the canvas to be a square with the size of the larger dimension of the image
  const size = 180
  canvas.width = size
  canvas.height = size

  // fill the background with the specified color
  ctx.fillStyle = options.backgroundColor
  ctx.fillRect(0, 0, size, size)

  const drawImagePromise = new Promise<void>((resolve, reject) => {
    // Create a new image element
    const img = new Image()
    img.src = URL.createObjectURL(blob)

    // Draw the image on the center of canvas when it loads
    img.onload = () => {
      const marginPx = ((options.margin / 2) * size) / 100

      // center and add margin
      const marginXStart = marginPx
      const marginYStart = marginPx
      const scaledWidthOrHeight = size - marginPx * 2

      const scale = scaledWidthOrHeight / imageMaxSize

      const scaledWidth = width * scale
      const scaledHeight = height * scale

      const x = Math.round(marginXStart + (scaledWidthOrHeight - scaledWidth) / 2)
      const y = Math.round(marginYStart + (scaledWidthOrHeight - scaledHeight) / 2)

      ctx.drawImage(img, x, y, scaledWidth, scaledHeight)

      resolve()
    }

    img.onerror = () => {
      reject(new Error('Image failed to load'))
    }
  })

  await drawImagePromise

  // Convert the canvas image to a blob
  const newBlob = await new Promise<Blob>((resolve, reject) => {
    canvas.toBlob((blob) => {
      if (blob) {
        resolve(blob)
      } else {
        reject(new Error('Image conversion to Blob failed'))
      }
    })
  })

  canvas.remove()

  const optimizedBlob = await optimizePNG(newBlob)
  return optimizedBlob
}
