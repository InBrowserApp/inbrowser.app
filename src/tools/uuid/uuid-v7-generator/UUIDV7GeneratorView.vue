<template>
  <div>
    <n-h1 prefix="bar" align-text>{{ t('name') }}</n-h1>
    <n-p>{{ t('description') }}</n-p>
    <n-h2 prefix="bar" align-text>UUID v7</n-h2>
    <n-p>
      <UUIDDisplay :uuid="uuid" />
    </n-p>

    <n-p>
      <RegenerateButton @click="regenerateUUID" />
      <n-divider vertical />
      <CopyToClipboardButton :content="uuid" />
    </n-p>

    <WhatIsUUIDv7 />

    <RelatedTools :tools="relatedTools" hide="uuid-v7-generator" />
  </div>
</template>

<script lang="ts" setup>
import { meta } from './i18n'
import { useI18n } from 'vue-i18n'
import { NH1, NP, NH2, NDivider } from 'naive-ui'
import { useViewHead } from '@/tools/composables/use-view-head'
import CopyToClipboardButton from '@/components/base/buttons/CopyToClipboardButton.vue'
import { ref } from 'vue'
import UUIDDisplay from '@/components/base/display/uuid/UUIDDisplay.vue'
import RegenerateButton from '@/components/base/buttons/RegenerateButton.vue'
import WhatIsUUIDv7 from './WhatIsUUIDv7.vue'
import type { UUIDv7 } from '@/utils/base/uuid'
import { relatedTools } from '../related-tools'
import RelatedTools from '@/components/tools/tool/RelatedTools.vue'
import { v7 as uuidv7 } from 'uuid'

const { t } = useI18n({
  messages: meta,
})

const uuid = ref<UUIDv7>(uuidv7() as UUIDv7)

useViewHead(t)

function regenerateUUID() {
  uuid.value = uuidv7() as UUIDv7
}
</script>
