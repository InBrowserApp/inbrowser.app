import Module from '@jspawn/qpdf-wasm/qpdf.js'
import WASM_URL from '@jspawn/qpdf-wasm/qpdf.wasm?url'

export async function removeOwnerPassword(blob: Blob): Promise<Blob> {
  const mod = await Module({
    locateFile: () => WASM_URL,
  })
  const working = '/working'
  mod.FS.mkdir(working)

  const input = `${working}/input.pdf`

  mod.FS.mount(
    mod.WORKERFS,
    {
      blobs: [{ name: 'input.pdf', data: blob }],
    },
    working,
  )

  const output = `/output.pdf`

  const args = ['--decrypt', input, output]

  const result = await mod.callMain(args)

  if (result !== 0) {
    throw new Error('Failed to remove owner password')
  }

  const outputBuffer: Uint8Array = mod.FS.readFile(output, {
    encoding: 'binary',
  })

  const resultBlob = new Blob([outputBuffer], { type: 'application/pdf' })

  return resultBlob
}
