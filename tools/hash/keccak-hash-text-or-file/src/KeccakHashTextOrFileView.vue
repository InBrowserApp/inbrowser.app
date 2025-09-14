<template>
  <ToolDefaultPageLayout :info="toolInfo">
    <ToolSectionHeader>
      {{ t('output-length') }}
    </ToolSectionHeader>
    <ToolSection>
      <n-select v-model:value="length" :options="options" />
    </ToolSection>
    <HashTextOrFileTemplate :hash="hashFunction" />
    <WhatIsKeccak />
  </ToolDefaultPageLayout>
</template>

<script setup lang="ts">
import * as toolInfo from './info'
import { ToolDefaultPageLayout, ToolSection, ToolSectionHeader } from '@shared/ui/tool'
import { HashTextOrFileTemplate } from '@tools/hash-text-or-file-template'
import WhatIsKeccak from './WhatIsKeccak.vue'
import Keccak from 'crypto-js/sha3'
import WordArray from 'crypto-js/lib-typedarrays'
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { NSelect } from 'naive-ui'

const { t } = useI18n()

const options = [
  {
    label: '224',
    value: 224,
  },
  {
    label: '256',
    value: 256,
  },
  {
    label: '384',
    value: 384,
  },
  {
    label: '512',
    value: 512,
  },
]

const length = ref<224 | 256 | 384 | 512>(256)

const hashFunction = computed(() => {
  return async (blob: Blob): Promise<ArrayBuffer> => {
    const outputLength = length.value
    const arrayBuffer = await blob.arrayBuffer()
    // Convert ArrayBuffer to WordArray for crypto-js
    const wordArray = WordArray.create(arrayBuffer)
    const hash = Keccak(wordArray, { outputLength })
    // Convert Keccak WordArray to ArrayBuffer more efficiently
    const hashBytes = new Uint8Array(hash.sigBytes)
    for (let i = 0; i < hash.sigBytes; i++) {
      hashBytes[i] = (hash.words[i >>> 2]! >>> (24 - (i % 4) * 8)) & 0xff
    }
    return hashBytes.buffer
  }
})
</script>

<i18n lang="json">
{
  "en": {
    "output-length": "Output Length"
  },
  "zh": {
    "output-length": "输出长度"
  },
  "zh-CN": {
    "output-length": "输出长度"
  },
  "zh-TW": {
    "output-length": "輸出長度"
  },
  "zh-HK": {
    "output-length": "輸出長度"
  },
  "es": {
    "output-length": "Longitud de Salida"
  },
  "fr": {
    "output-length": "Longueur de Sortie"
  },
  "de": {
    "output-length": "Ausgabelänge"
  },
  "it": {
    "output-length": "Lunghezza di Output"
  },
  "ja": {
    "output-length": "出力長"
  },
  "ko": {
    "output-length": "출력 길이"
  },
  "ru": {
    "output-length": "Длина Вывода"
  },
  "pt": {
    "output-length": "Comprimento de Saída"
  },
  "ar": {
    "output-length": "طول الإخراج"
  },
  "hi": {
    "output-length": "आउटपुट लंबाई"
  },
  "tr": {
    "output-length": "Çıktı Uzunluğu"
  },
  "nl": {
    "output-length": "Uitvoerlengte"
  },
  "sv": {
    "output-length": "Utdatalängd"
  },
  "pl": {
    "output-length": "Długość Wyjścia"
  },
  "vi": {
    "output-length": "Độ Dài Đầu Ra"
  },
  "th": {
    "output-length": "ความยาวเอาต์พุต"
  },
  "id": {
    "output-length": "Panjang Output"
  },
  "he": {
    "output-length": "אורך פלט"
  },
  "ms": {
    "output-length": "Panjang Output"
  },
  "no": {
    "output-length": "Utdatalengde"
  }
}
</i18n>
