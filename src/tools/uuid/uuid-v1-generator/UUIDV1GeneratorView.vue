<template>
  <div>
    <n-h1 prefix="bar" align-text>{{ t('name') }}</n-h1>
    <n-p>{{ t('description') }}</n-p>
    <n-h2 prefix="bar" align-text>UUID v1</n-h2>
    <n-p>
      <UUIDDisplay :uuid="uuid" />
    </n-p>

    <n-p>
      <RegenerateButton @click="regenerateUUID" />
      <n-divider vertical />
      <CopyToClipboardButton :content="uuid" />
    </n-p>

    <ConfigHeader />
    <n-p>
      <MACAddressInputFormItem v-model:address="macAddress" />
      <ClockSeqInput v-model:clockSeq="clockSeq" />
    </n-p>

    <WhatIsUUIDv1 />

    <RelatedTools :tools="relatedTools" hide="uuid-v1-generator" />
  </div>
</template>

<script lang="ts" setup>
import { meta } from './i18n'
import { useI18n } from 'vue-i18n'
import { NH1, NP, NH2, NDivider } from 'naive-ui'
import { useViewHead } from '@/tools/composables/use-view-head'
import CopyToClipboardButton from '@/components/base/buttons/CopyToClipboardButton.vue'
import { ref, watch } from 'vue'
import UUIDDisplay from '@/components/base/display/uuid/UUIDDisplay.vue'
import RegenerateButton from '@/components/base/buttons/RegenerateButton.vue'
import WhatIsUUIDv1 from '../descriptions/WhatIsUUIDv1.vue'
import MACAddressInputFormItem from '@/components/base/input/mac-address/MACAddressInputFormItem.vue'
import { randomMACAddress, parseMACAddressToArrayBuffer } from '@/utils/base/mac-address'
import ClockSeqInput from './ClockSeqInput.vue'
import type { UUIDv1 } from '@/utils/base/uuid'
import { useStorage } from '@vueuse/core'
import { relatedTools } from '../related-tools'
import RelatedTools from '@/components/tools/tool/RelatedTools.vue'
import ConfigHeader from '@/components/layouts/headers/ConfigHeader.vue'

import { v1 as uuidV1 } from 'uuid'

const { t } = useI18n({
  messages: meta,
})

const macAddress = useStorage<string>('tools:uuid-v1-generator:mac-address', randomMACAddress())
const clockSeq = useStorage<number>(
  'tools:uuid-v1-generator:clock-seq',
  Math.floor(Math.random() * 0x3fff),
)

const getUUIDv1 = (): UUIDv1 =>
  uuidV1({
    node: new Uint8Array(parseMACAddressToArrayBuffer(macAddress.value)),
    clockseq: clockSeq.value,
  }) as UUIDv1

const uuid = ref<UUIDv1>(getUUIDv1())

useViewHead(t)

function regenerateUUID() {
  uuid.value = getUUIDv1()
}

watch(macAddress, () => {
  regenerateUUID()
})

watch(clockSeq, () => {
  regenerateUUID()
})
</script>
