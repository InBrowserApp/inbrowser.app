import optimiseRaw, { init } from '@jsquash/oxipng/optimise'
import WASM_MODULE_URL from '@jsquash/oxipng/codec/pkg/squoosh_oxipng_bg.wasm?url'

type OptimiseParams = Parameters<typeof optimiseRaw>
let initPromise: Promise<any> | null = null

export async function optimise(data: OptimiseParams[0], options?: OptimiseParams[1]) {
  if (initPromise === null) {
    initPromise = init(WASM_MODULE_URL)
  }

  await initPromise

  return optimiseRaw(data, options)
}
