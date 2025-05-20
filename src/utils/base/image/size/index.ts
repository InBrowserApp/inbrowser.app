/**
 * Gets the dimensions (height and width) of an image from a Blob
 *
 * @param blob - The image Blob to get dimensions from
 * @returns Promise that resolves with the image height and width in pixels
 * @throws Error if the image fails to load
 *
 * @example
 * ```ts
 * const { height, width } = await getImageSize(imageBlob);
 * console.log(`Image dimensions: ${width}x${height}`);
 * ```
 */
export async function getImageSize(blob: Blob): Promise<{
  height: number
  width: number
}> {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = function () {
      resolve({
        height: img.height,
        width: img.width,
      })
      // remove the image from the DOM
      URL.revokeObjectURL(img.src)
      img.remove()
    }
    img.onerror = function () {
      reject(new Error('Failed to load image'))
    }
    img.src = URL.createObjectURL(blob)
  })
}
