import OptimizeWorker from './optimize-png.worker.raw?worker'
import type { OptimiseOptions } from '@jsquash/oxipng/meta'
import WASM_MODULE_URL from '@jsquash/oxipng/codec/pkg/squoosh_oxipng_bg.wasm?url'

/**
 * Optimizes a PNG image using the oxipng WASM module in a Web Worker.
 * The optimization is performed in a separate thread to avoid blocking the main thread.
 *
 * The oxipng optimizer can significantly reduce PNG file sizes while preserving quality
 * by performing lossless compression optimizations like:
 * - Trying different compression levels
 * - Optimizing color palettes
 * - Removing unnecessary alpha channels
 * - Reducing bit depth when possible
 *
 * @param blob - The PNG image Blob to optimize
 * @param options - Optional optimization settings:
 *   - level: Optimization level (0-6), higher = better compression but slower
 *   - interlace: Whether to use PNG interlacing
 *   - optimiseAlpha: Whether to optimize alpha channels
 * @returns Promise that resolves with the optimized PNG image as a Blob
 * @throws Error if the optimization fails or if the worker encounters an error
 *
 * @example
 * ```ts
 * // Basic usage
 * const optimizedPNG = await optimizePNG(pngBlob);
 *
 * // With custom options
 * const optimizedPNG = await optimizePNG(pngBlob, {
 *   level: 4,
 *   interlace: false,
 *   optimiseAlpha: true
 * });
 * ```
 */
export async function optimizePNG(blob: Blob, options?: OptimiseOptions) {
  const worker = new OptimizeWorker()
  const optimizedBlob = await new Promise<Blob>((resolve, reject) => {
    worker.onmessage = (event) => {
      resolve(event.data)
    }
    worker.onerror = (event) => {
      reject(event.error)
    }
    worker.postMessage({ wasmURL: WASM_MODULE_URL, blob, options })
  })

  return optimizedBlob
}
