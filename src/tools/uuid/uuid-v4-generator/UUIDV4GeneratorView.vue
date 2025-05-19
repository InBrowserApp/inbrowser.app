<template>
  <div>
    <n-h1 prefix="bar" align-text>{{ t('name') }}</n-h1>
    <n-p>{{ t('description') }}</n-p>
    <n-h2 prefix="bar" align-text>UUID v4</n-h2>
    <n-p>
      <UUIDDisplay :uuid="uuid" />
    </n-p>

    <n-p>
      <RegenerateButton @click="regenerateUUID" />
      <n-divider vertical />
      <CopyToClipboardButton :content="uuid" />
    </n-p>

    <WhatIsUUIDv4 />
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
import WhatIsUUIDv4 from './WhatIsUUIDv4.vue'
import type { UUIDv4 } from '@/utils/base/uuid'

const { t } = useI18n({
  messages: meta,
})

const uuid = ref<UUIDv4>(crypto.randomUUID() as UUIDv4)

useViewHead(t)

function regenerateUUID() {
  uuid.value = crypto.randomUUID() as UUIDv4
}
</script>
