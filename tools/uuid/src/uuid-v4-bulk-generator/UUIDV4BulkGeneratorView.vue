<template>
  <ToolDefaultPageLayout :info="toolInfo">
    <ToolSectionHeader>UUID v4</ToolSectionHeader>
    <ToolSection>
      <n-virtual-list style="max-height: 240px" :item-size="18" :items="items" item-resizable>
        <template #default="{ item }">
          <div :key="item.key">
            <n-text code>{{ item.value }}</n-text>
          </div>
        </template>
      </n-virtual-list>
    </ToolSection>

    <ToolSection>
      <RegenerateButton @click="regenerateUUIDs" />
      <n-divider vertical />
      <CopyToClipboardButton :content="uuids.join('\n')" />
      <n-divider vertical />
      <UUIDsDownloadButton :uuids="uuids" />
    </ToolSection>

    <ToolConfigHeader />
    <ToolSection>
      <SizeInput v-model:size="size" />
    </ToolSection>

    <WhatIsUUIDv4 />
  </ToolDefaultPageLayout>
</template>

<script lang="ts" setup>
import * as toolInfo from './infos'
import { NDivider, NVirtualList, NText } from 'naive-ui'
import { CopyToClipboardButton, RegenerateButton } from '@shared/ui/base'
import { ref } from 'vue'
import WhatIsUUIDv4 from '../descriptions/WhatIsUUIDv4.vue'
import type { UUIDv4 } from '@utils/uuid'
import { useStorage } from '@vueuse/core'
import { computed } from 'vue'
import { ToolConfigHeader, ToolSectionHeader, ToolSection } from '@shared/ui/tool'
import SizeInput from './SizeInput.vue'
import { watch } from 'vue'
import UUIDsDownloadButton from '../buttons/UUIDsDownloadButton.vue'
import { ToolDefaultPageLayout } from '@shared/ui/tool'

const size = useStorage('tools:uuid-v4-bulk-generator:size', 100)
const uuids = ref<UUIDv4[]>(Array.from({ length: size.value }, () => crypto.randomUUID() as UUIDv4))

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
