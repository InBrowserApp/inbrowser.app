import OptimizeWorker from './optimize-png.worker?worker'
import WASM_MODULE_URL from '@jsquash/oxipng/codec/pkg/squoosh_oxipng_bg.wasm?url'

export async function optimizePNG(blob: Blob) {
  const worker = new OptimizeWorker()
  const optimizedBlob = await new Promise<Blob>((resolve, reject) => {
    worker.onmessage = (event) => {
      resolve(event.data)
    }
    worker.onerror = (event) => {
      reject(event.error)
    }
    worker.postMessage([WASM_MODULE_URL, blob])
  })

  return optimizedBlob
}
