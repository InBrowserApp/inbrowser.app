<template>
  <ToolDefaultPageLayout :info="toolInfo">
    <n-grid cols="1 600:2" :x-gap="30" :y-gap="30">
      <!-- UUID -->
      <n-grid-item>
        <ToolSectionHeader>UUID</ToolSectionHeader>
        <ToolSection>
          <UUIDInput
            v-model:uuid="uuid"
            :show-random="true"
            placeholder="c1ed67f0-34bd-11f0-b3fe-02d71e841f4f"
          />
        </ToolSection>
        <ToolSection>
          <CopyToClipboardButton :content="uuid" />
        </ToolSection>
      </n-grid-item>

      <!-- Base64 -->
      <n-grid-item>
        <ToolSectionHeader>
          <BaseLabel base="base64" />
        </ToolSectionHeader>
        <ToolSection>
          <n-input v-model:value="base64" placeholder="we1n8DS9EfCz/gLXHoQfTw==" />
        </ToolSection>
        <ToolSection>
          <CopyToClipboardButton :content="base64" />
        </ToolSection>
      </n-grid-item>

      <!-- Hex -->
      <n-grid-item>
        <ToolSectionHeader>
          <BaseLabel base="hex" />
        </ToolSectionHeader>
        <ToolSection>
          <n-input v-model:value="hex" placeholder="c1ed67f034bd11f0b3fe02d71e841f4f" />
        </ToolSection>
        <ToolSection>
          <CopyToClipboardButton :content="hex" />
        </ToolSection>
      </n-grid-item>

      <!-- Decimal -->
      <n-grid-item>
        <ToolSectionHeader>
          <BaseLabel base="decimal" />
        </ToolSectionHeader>
        <ToolSection>
          <n-input v-model:value="decimal" placeholder="257773685661231489374926881343358115663" />
        </ToolSection>
        <ToolSection>
          <CopyToClipboardButton :content="decimal" />
        </ToolSection>
      </n-grid-item>

      <!-- Octal -->
      <n-grid-item>
        <ToolSectionHeader>
          <BaseLabel base="octal" />
        </ToolSectionHeader>
        <ToolSection>
          <n-input
            v-model:value="octal"
            placeholder="3017326376015136421741317760055343641017517"
          />
        </ToolSection>
        <ToolSection>
          <CopyToClipboardButton :content="octal" />
        </ToolSection>
      </n-grid-item>

      <!-- Binary -->
      <n-grid-item>
        <ToolSectionHeader>
          <BaseLabel base="binary" />
        </ToolSectionHeader>
        <ToolSection>
          <n-input
            v-model:value="binary"
            placeholder="11000001111011010110011111110000001101001011110100010001111100001011001111111110000000101101011100011110100001000001111101001111"
          />
        </ToolSection>
        <ToolSection>
          <CopyToClipboardButton :content="binary" />
        </ToolSection>
      </n-grid-item>
    </n-grid>

    <WhatIsUUID />
  </ToolDefaultPageLayout>
</template>

<script lang="ts" setup>
import * as toolInfo from './infos'
import { NInput } from 'naive-ui'
import { ref, watch } from 'vue'
import WhatIsUUID from '../descriptions/WhatIsUUID.vue'
import type { UUID } from '@utils/uuid'
import { UUIDInput } from '@shared/ui/domain/uuid'
import { BaseLabel } from '@shared/ui/domain/base'
import { CopyToClipboardButton } from '@shared/ui/base'
import * as uuidConvert from '@utils/uuid/convert'
import { NGrid, NGridItem } from 'naive-ui'
import { ToolSectionHeader, ToolSection } from '@shared/ui/tool'
import { ToolDefaultPageLayout } from '@shared/ui/tool'

const uuid = ref<UUID | ''>(crypto.randomUUID())
const base64 = ref<string>('')
const decimal = ref<string>('')
const octal = ref<string>('')
const binary = ref<string>('')
const hex = ref<string>('')

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
