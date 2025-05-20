// use the following code to build the worker
// esbuild --bundle --minify --sourcemap --target=es2018 --platform=node --outfile=src/tools/favicon/favicon-assets-generator/utils/image/optimize-png.worker.js src/tools/favicon/favicon-assets-generator/utils/image/optimize-png.worker.raw.ts
import optimiseRaw, { init } from '@jsquash/oxipng/optimise'

onmessage = async function (event: MessageEvent) {
  const [wasmURL, blob] = event.data

  await init(wasmURL)

  const arraybuffer = await blob.arrayBuffer()
  const optimisedArrayBuffer = await optimiseRaw(arraybuffer)
  const optimisedBlob = new Blob([optimisedArrayBuffer], {
    type: blob.type,
  })

  this.postMessage(optimisedBlob)
}
