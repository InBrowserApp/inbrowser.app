import RemoveOwnerPasswordWorker from './remove-owner-password.worker.ts?worker'

export async function removeOwnerPassword(blob: Blob): Promise<Blob> {
  if (!window.Worker) {
    throw new Error('Web Worker is not supported')
  }

  const worker = new RemoveOwnerPasswordWorker()

  return new Promise<Blob>((resolve, reject) => {
    worker.onmessage = (e: MessageEvent<Blob>) => {
      worker.terminate()
      resolve(e.data)
    }

    worker.onerror = (e: ErrorEvent) => {
      reject(e.error)
    }

    worker.postMessage(blob)
  })
}
