<template>
  <ToolDefaultPageLayout :info="toolInfo">
    <HashTextOrFileTemplate :hash="hashFunction" />
    <WhatIsRIPEMD160 />
  </ToolDefaultPageLayout>
</template>

<script setup lang="ts">
import * as toolInfo from './info'
import { ToolDefaultPageLayout } from '@shared/ui/tool'
import { HashTextOrFileTemplate } from '@tools/hash-text-or-file-template'
import WhatIsRIPEMD160 from './WhatIsRIPEMD160.vue'
import RIPEMD160 from 'crypto-js/ripemd160'
import WordArray from 'crypto-js/lib-typedarrays'

async function hashFunction(blob: Blob): Promise<ArrayBuffer> {
  const arrayBuffer = await blob.arrayBuffer()
  // Convert ArrayBuffer to WordArray for crypto-js
  const wordArray = WordArray.create(arrayBuffer)
  const hash = RIPEMD160(wordArray)
  // Convert RIPEMD160 WordArray to ArrayBuffer more efficiently
  const hashBytes = new Uint8Array(hash.sigBytes)
  for (let i = 0; i < hash.sigBytes; i++) {
    hashBytes[i] = (hash.words[i >>> 2]! >>> (24 - (i % 4) * 8)) & 0xff
  }
  return hashBytes.buffer
}
</script>
