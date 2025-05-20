// use the following code to build the worker
// esbuild --bundle --minify --sourcemap --target=es2018 --platform=node --outfile=src/tools/favicon/favicon-assets-generator/utils/image/optimize-png.worker.js src/tools/favicon/favicon-assets-generator/utils/image/optimize-png.worker.raw.ts
import type { OptimiseOptions } from '@jsquash/oxipng/meta'
import optimiseRaw, { init } from '@jsquash/oxipng/optimise'

export interface OptimizePNGMessage {
  wasmURL: string
  blob: Blob
  options?: OptimiseOptions
}

onmessage = async function (event: MessageEvent) {
  const { wasmURL, blob, options } = event.data as OptimizePNGMessage

  await init(wasmURL)

  const arraybuffer = await blob.arrayBuffer()
  const optimisedArrayBuffer = await optimiseRaw(arraybuffer, options)
  const optimisedBlob = new Blob([optimisedArrayBuffer], {
    type: blob.type,
  })

  this.postMessage(optimisedBlob)
}
