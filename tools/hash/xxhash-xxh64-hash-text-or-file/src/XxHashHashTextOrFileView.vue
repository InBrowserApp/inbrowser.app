<template>
  <ToolDefaultPageLayout :info="toolInfo">
    <HashTextOrFileTemplate :hash="hashFunction" />
    <WhatIsXxHash />
  </ToolDefaultPageLayout>
</template>

<script setup lang="ts">
import * as toolInfo from './info'
import { ToolDefaultPageLayout } from '@shared/ui/tool'
import { HashTextOrFileTemplate } from '@tools/hash-text-or-file-template'
import WhatIsXxHash from './WhatIsXxHash.vue'
import xxhash from 'xxhash-wasm'

async function hashFunction(blob: Blob): Promise<ArrayBuffer> {
  const { create64 } = await xxhash()
  const stream = blob.stream()
  const reader = stream.getReader()
  const hasher = create64()

  try {
    while (true) {
      const { done, value } = await reader.read()
      if (done) break
      hasher.update(value)
    }
  } finally {
    reader.releaseLock()
  }

  const hash = hasher.digest()
  const buffer = new ArrayBuffer(8)
  const view = new DataView(buffer)
  view.setBigUint64(0, hash, false) // big-endian
  return buffer
}
</script>
