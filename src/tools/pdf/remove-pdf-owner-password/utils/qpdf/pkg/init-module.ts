import Module from '@jspawn/qpdf-wasm/qpdf.js'
import WASM_URL from '@jspawn/qpdf-wasm/qpdf.wasm?url'

export async function initQPDFModule() {
  const mod = await Module({
    locateFile: () => WASM_URL
  })
  return mod
}
