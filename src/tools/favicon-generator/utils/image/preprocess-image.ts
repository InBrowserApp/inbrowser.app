import { getImageSize } from './get-image-size'

export async function preprocessImage(blob: Blob): Promise<Blob> {
  const { height, width } = await getImageSize(blob)

  // Create a new canvas element
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')
  if (!ctx) {
    console.error('Canvas context is null')
    throw new Error('Canvas context is null')
  }

  // Set the canvas to be a square with the size of the larger dimension of the image
  const size = Math.max(height, width)
  canvas.width = size
  canvas.height = size

  const drawImagePromise = new Promise<void>((resolve, reject) => {
    // Create a new image element
    const img = new Image()
    img.src = URL.createObjectURL(blob)

    // Draw the image on the center of canvas when it loads
    img.onload = () => {
      const x = Math.round((size - width) / 2)
      const y = Math.round((size - height) / 2)
      ctx.drawImage(img, x, y)
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

  return newBlob
}
