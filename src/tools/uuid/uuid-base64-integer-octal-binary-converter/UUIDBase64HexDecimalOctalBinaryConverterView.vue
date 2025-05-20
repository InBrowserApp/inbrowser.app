<template>
  <div>
    <n-h1 prefix="bar" align-text>{{ t('name') }}</n-h1>
    <n-p>{{ t('description') }}</n-p>

    <n-grid cols="1 600:2" :x-gap="30" :y-gap="30">
      <!-- UUID -->
      <n-grid-item>
        <n-h2 prefix="bar" align-text>UUID</n-h2>
        <n-p>
          <UUIDInput
            v-model:uuid="uuid"
            :show-random="true"
            placeholder="c1ed67f0-34bd-11f0-b3fe-02d71e841f4f"
          />
        </n-p>
        <n-p>
          <CopyToClipboardButton :content="uuid" />
        </n-p>
      </n-grid-item>

      <!-- Base64 -->
      <n-grid-item>
        <n-h2 prefix="bar" align-text>
          <BaseLabel base="base64" />
        </n-h2>
        <n-p>
          <n-input v-model:value="base64" placeholder="we1n8DS9EfCz/gLXHoQfTw==" />
        </n-p>
        <n-p>
          <CopyToClipboardButton :content="base64" />
        </n-p>
      </n-grid-item>

      <!-- Hex -->
      <n-grid-item>
        <n-h2 prefix="bar" align-text>
          <BaseLabel base="hex" />
        </n-h2>
        <n-p>
          <n-input v-model:value="hex" placeholder="c1ed67f034bd11f0b3fe02d71e841f4f" />
        </n-p>
        <n-p>
          <CopyToClipboardButton :content="hex" />
        </n-p>
      </n-grid-item>

      <!-- Decimal -->
      <n-grid-item>
        <n-h2 prefix="bar" align-text>
          <BaseLabel base="decimal" />
        </n-h2>
        <n-p>
          <n-input v-model:value="decimal" placeholder="257773685661231489374926881343358115663" />
        </n-p>
        <n-p>
          <CopyToClipboardButton :content="decimal" />
        </n-p>
      </n-grid-item>

      <!-- Octal -->
      <n-grid-item>
        <n-h2 prefix="bar" align-text>
          <BaseLabel base="octal" />
        </n-h2>
        <n-p>
          <n-input
            v-model:value="octal"
            placeholder="3017326376015136421741317760055343641017517"
          />
        </n-p>
        <n-p>
          <CopyToClipboardButton :content="octal" />
        </n-p>
      </n-grid-item>

      <!-- Binary -->
      <n-grid-item>
        <n-h2 prefix="bar" align-text>
          <BaseLabel base="binary" />
        </n-h2>
        <n-p>
          <n-input
            v-model:value="binary"
            placeholder="11000001111011010110011111110000001101001011110100010001111100001011001111111110000000101101011100011110100001000001111101001111"
          />
        </n-p>
        <n-p>
          <CopyToClipboardButton :content="binary" />
        </n-p>
      </n-grid-item>
    </n-grid>

    <WhatIsUUID />
    <RelatedTools :tools="relatedTools" hide="uuid-base64-integer-octal-converter" />
  </div>
</template>

<script lang="ts" setup>
import { meta } from './i18n'
import { useI18n } from 'vue-i18n'
import { NH1, NP, NH2, NInput } from 'naive-ui'
import { useViewHead } from '@/tools/composables/use-view-head'
import { ref, watch } from 'vue'
import WhatIsUUID from '../descriptions/WhatIsUUID.vue'
import type { UUID } from '@/utils/base/uuid'
import { relatedTools } from '../related-tools'
import RelatedTools from '@/components/tools/tool/RelatedTools.vue'
import UUIDInput from '@/components/base/input/uuid/UUIDInput.vue'
import CopyToClipboardButton from '@/components/base/buttons/CopyToClipboardButton.vue'
import * as uuidConvert from '@/utils/base/uuid/convert'
import BaseLabel from '@/components/base/display/base/BaseLabel.vue'
import { NGrid, NGridItem } from 'naive-ui'

const { t } = useI18n({
  messages: meta,
})

const uuid = ref<UUID | ''>(crypto.randomUUID())
const base64 = ref<string>('')
const decimal = ref<string>('')
const octal = ref<string>('')
const binary = ref<string>('')
const hex = ref<string>('')

useViewHead(t)

watch(
  uuid,
  () => {
    if (uuid.value === '') {
      base64.value = ''
      decimal.value = ''
      octal.value = ''
      binary.value = ''
      hex.value = ''
      return
    } else {
      base64.value = uuidConvert.uuidToBase64(uuid.value)
      decimal.value = uuidConvert.uuidToInteger(uuid.value).toString()
      octal.value = uuidConvert.uuidToOctal(uuid.value)
      binary.value = uuidConvert.uuidToBinary(uuid.value)
      hex.value = uuidConvert.uuidToHex(uuid.value)
    }
  },
  { immediate: true },
)

watch(decimal, () => {
  if (decimal.value === '') {
    uuid.value = ''
    return
  }
  uuid.value = uuidConvert.integerToUUID(BigInt(decimal.value))
})

watch(base64, () => {
  if (base64.value === '') {
    uuid.value = ''
    return
  }
  uuid.value = uuidConvert.base64ToUUID(base64.value)
})

watch(octal, () => {
  if (octal.value === '') {
    uuid.value = ''
    return
  }
  uuid.value = uuidConvert.octalToUUID(octal.value)
})

watch(binary, () => {
  if (binary.value === '') {
    uuid.value = ''
    return
  }
  uuid.value = uuidConvert.binaryToUUID(binary.value)
})

watch(hex, () => {
  if (hex.value === '') {
    uuid.value = ''
    return
  }
  uuid.value = uuidConvert.hexToUUID(hex.value)
})
</script>
