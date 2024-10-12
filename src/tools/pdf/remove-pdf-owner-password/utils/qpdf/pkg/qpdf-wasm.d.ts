/// <reference types="emscripten" />

interface QPDFModule extends EmscriptenModule {
  WORKERFS: Emscripten.FileSystemType
  MEMFS: typeof MEMFS
  callMain: (args: string[]) => Promise<number>
  FS: typeof FS
}

declare module '@jspawn/qpdf-wasm/qpdf.js' {
  export default Module as EmscriptenModuleFactory<QPDFModule>
}
