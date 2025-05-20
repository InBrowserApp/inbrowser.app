<template>
  <div>
    <n-h1 prefix="bar" align-text>{{ t('name') }}</n-h1>
    <n-p>{{ t('description') }}</n-p>
    <n-h2 prefix="bar" align-text>UUID v4</n-h2>
    <n-p>
      <n-virtual-list style="max-height: 240px" :item-size="18" :items="items" item-resizable>
        <template #default="{ item }">
          <div :key="item.key">
            <n-text code>{{ item.value }}</n-text>
          </div>
        </template>
      </n-virtual-list>
    </n-p>

    <n-p>
      <RegenerateButton @click="regenerateUUIDs" />
      <n-divider vertical />
      <CopyToClipboardButton :content="uuids.join('\n')" />
      <n-divider vertical />
      <UUIDsDownloadButton :uuids="uuids" />
    </n-p>

    <ConfigHeader />
    <n-p>
      <SizeInput v-model:size="size" />
    </n-p>

    <WhatIsUUIDv4 />

    <RelatedTools :tools="relatedTools" hide="uuid-v4-generator" />
  </div>
</template>

<script lang="ts" setup>
import { meta } from './i18n'
import { useI18n } from 'vue-i18n'
import { NH1, NP, NH2, NDivider, NVirtualList, NText } from 'naive-ui'
import { useViewHead } from '@/tools/composables/use-view-head'
import CopyToClipboardButton from '@/components/base/buttons/CopyToClipboardButton.vue'
import { ref } from 'vue'
import RegenerateButton from '@/components/base/buttons/RegenerateButton.vue'
import WhatIsUUIDv4 from '../descriptions/WhatIsUUIDv4.vue'
import type { UUIDv4 } from '@/utils/base/uuid'
import { relatedTools } from '../related-tools'
import RelatedTools from '@/components/tools/tool/RelatedTools.vue'
import { useStorage } from '@vueuse/core'
import { computed } from 'vue'
import ConfigHeader from '@/components/layouts/headers/ConfigHeader.vue'
import SizeInput from './SizeInput.vue'
import { watch } from 'vue'
import UUIDsDownloadButton from '../buttons/UUIDsDownloadButton.vue'

const { t } = useI18n({
  messages: meta,
})

const size = useStorage('tools:uuid-v4-bulk-generator:size', 100)
const uuids = ref<UUIDv4[]>(Array.from({ length: size.value }, () => crypto.randomUUID() as UUIDv4))

useViewHead(t)

function regenerateUUIDs() {
  uuids.value = Array.from({ length: size.value }, () => crypto.randomUUID() as UUIDv4)
}

watch(size, () => {
  regenerateUUIDs()
})

const items = computed(() => {
  return uuids.value.map((uuid) => ({
    key: uuid,
    value: uuid,
  }))
})
</script>
