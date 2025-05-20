/**
 * Maximum allowed width/height for ICO images in pixels
 */
const MaxSize = 256 // 1 << 8

/**
 * Maximum number of images allowed in an ICO file
 */
const MaxFiles = 65536 // 1 << 16

/**
 * Size of the ICO file header in bytes
 */
const FileHeaderSize = 6

/**
 * Size of each image entry header in bytes
 */
const ImageHeaderSize = 16

/**
 * MIME type for ICO files
 */
const IcoMime = 'image/x-icon'

/**
 * Represents binary data that can be either an ArrayBuffer or Blob
 */
export type BinaryLike = ArrayBuffer | Blob

/**
 * Converts PNG images to ICO format
 */
export class PngIcoConverter {
  /**
   * Converts PNG images to an ICO file and returns it as a Blob
   * @param inputs Array of PNG images and their conversion options
   * @param mime MIME type for the output Blob
   * @returns Promise resolving to a Blob containing the ICO file
   */
  async convertToBlobAsync(inputs: IConvertInputItem[], mime = IcoMime) {
    const arr = await this.convertAsync(inputs)
    return new Blob([arr], {
      type: mime,
    })
  }

  /**
   * Converts PNG images to ICO format
   * @param inputs Array of PNG images and their conversion options
   * @returns Promise resolving to a Uint8Array containing the ICO file data
   * @throws {Error} If too many files are provided or if image dimensions are invalid
   */
  async convertAsync(inputs: IConvertInputItem[]) {
    const inLen = inputs.length
    if (inLen > MaxFiles) {
      throw new Error('TOO_MANY_FILES')
    }

    // File Format: https://en.wikipedia.org/wiki/ICO_(file_format)

    // File Header + Image Header + Image Content
    const headersLen = FileHeaderSize + ImageHeaderSize * inLen
    const totalLen = headersLen + this.sumInputLen(inputs)
    const arr = new Uint8Array(totalLen)

    // File Header
    arr.set([0, 0, 1, 0, ...this.to2Bytes(inLen)], 0)

    // Image Headers & Data
    let imgPos = headersLen
    for (let i = 0; i < inputs.length; i++) {
      const currPos = FileHeaderSize + ImageHeaderSize * i,
        input = inputs[i]

      const blob = this.toBlob(input.png),
        img = await this.loadImageAsync(blob),
        w = img.naturalWidth,
        h = img.naturalHeight

      if (!input.ignoreSize && (w > MaxSize || h > MaxSize)) {
        throw new Error('INVALID_SIZE')
      }

      // Header
      arr.set(
        [
          w > MaxSize ? 0 : w,
          h > MaxSize ? 0 : h,
          0,
          0,
          0,
          0,
          ...(input.bpp ? this.to2Bytes(input.bpp) : [0, 0]),
          ...this.to4Bytes(blob.size),
          ...this.to4Bytes(imgPos),
        ],
        currPos,
      )

      // Image
      const buffer = input.png instanceof ArrayBuffer ? input.png : await input.png.arrayBuffer()
      arr.set(new Uint8Array(buffer), imgPos)

      imgPos += blob.size
    }

    return arr
  }

  /**
   * Loads a PNG image from a Blob
   * @param png Blob containing PNG image data
   * @returns Promise resolving to an HTMLImageElement
   * @throws {Error} If image loading fails
   */
  protected loadImageAsync(png: Blob) {
    return new Promise<HTMLImageElement>((r, rej) => {
      const img = new Image()

      img.onload = () => r(img)

      img.onerror = () => rej('INVALID_IMAGE')

      img.src = URL.createObjectURL(png)
    })
  }

  /**
   * Converts BinaryLike input to a Blob
   * @param input Binary data to convert
   * @param type MIME type for the Blob
   * @returns Blob containing the input data
   */
  protected toBlob(input: BinaryLike, type = 'image/png') {
    return input instanceof Blob
      ? input
      : new Blob([input], {
          type,
        })
  }

  /**
   * Converts a number to a 2-byte array
   * @param n Number to convert
   * @returns Array of 2 bytes representing the number in little-endian format
   */
  protected to2Bytes(n: number): number[] {
    return [n & 255, (n >> 8) & 255]
  }

  /**
   * Converts a number to a 4-byte array
   * @param n Number to convert
   * @returns Array of 4 bytes representing the number in little-endian format
   */
  protected to4Bytes(n: number): number[] {
    return [n & 255, (n >> 8) & 255, (n >> 16) & 255, (n >> 24) & 255]
  }

  /**
   * Calculates the total size of all input PNG images
   * @param inputs Array of PNG images and their conversion options
   * @returns Total size in bytes
   */
  protected sumInputLen(inputs: IConvertInputItem[]) {
    let total = 0
    for (const i of inputs) {
      const png = i.png
      if (png instanceof Blob) {
        total += png.size
      } else {
        total += png.byteLength
      }
    }

    return total
  }
}

/**
 * Options for converting a PNG image to ICO format
 */
export interface IConvertInputItem {
  /**
   * PNG image data as either ArrayBuffer or Blob
   */
  png: BinaryLike

  /**
   * Bits per pixel (optional)
   */
  bpp?: number

  /**
   * Whether to ignore size restrictions (optional)
   */
  ignoreSize?: number
}
