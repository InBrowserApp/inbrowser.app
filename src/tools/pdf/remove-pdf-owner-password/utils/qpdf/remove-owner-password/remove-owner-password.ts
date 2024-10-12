import { initQPDFModule } from '../pkg/init-module'

export async function removeOwnerPassword(blob: Blob): Promise<Blob> {
  const mod = await initQPDFModule()
  const working = '/working'
  mod.FS.mkdir(working)

  const input = `${working}/input.pdf`

  mod.FS.mount(
    mod.WORKERFS,
    {
      blobs: [{ name: 'input.pdf', data: blob }]
    },
    working
  )

  const output = `/output.pdf`

  const args = ['--decrypt', input, output]

  const result = await mod.callMain(args)

  if (result !== 0) {
    throw new Error('Failed to remove owner password')
  }

  const outputBuffer: Uint8Array = mod.FS.readFile(output, {
    encoding: 'binary'
  })

  const resultBlob = new Blob([outputBuffer], { type: 'application/pdf' })

  return resultBlob
}
