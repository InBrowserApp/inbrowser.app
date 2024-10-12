import optimiseRaw, { init } from '@jsquash/oxipng/optimise'

onmessage = async function (event: MessageEvent) {
  const [wasmURL, blob] = event.data

  await init(wasmURL)

  const arraybuffer = await blob.arrayBuffer()
  const optimisedArrayBuffer = await optimiseRaw(arraybuffer)
  const optimisedBlob = new Blob([optimisedArrayBuffer], {
    type: blob.type
  })

  this.postMessage(optimisedBlob)
}
