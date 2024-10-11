export async function getImageSize(blob: Blob): Promise<{
  height: number
  width: number
}> {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = function () {
      resolve({
        height: img.height,
        width: img.width
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
