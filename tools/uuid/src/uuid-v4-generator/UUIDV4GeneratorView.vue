<template>
  <ToolDefaultPageLayout :info="toolInfo">
    <ToolSectionHeader>UUID v4</ToolSectionHeader>
    <ToolSection>
      <UUIDDisplay :uuid="uuid" />
    </ToolSection>

    <ToolSection>
      <RegenerateButton @click="regenerateUUID" />
      <n-divider vertical />
      <CopyToClipboardButton :content="uuid" />
    </ToolSection>

    <WhatIsUUIDv4 />
  </ToolDefaultPageLayout>
</template>

<script lang="ts" setup>
import * as toolInfo from './infos'
import { NDivider } from 'naive-ui'
import { ref } from 'vue'
import WhatIsUUIDv4 from '../descriptions/WhatIsUUIDv4.vue'
import type { UUIDv4 } from '@utils/uuid'
import { ToolSectionHeader, ToolSection } from '@shared/ui/tool'
import { CopyToClipboardButton, RegenerateButton } from '@shared/ui/base'
import { UUIDDisplay } from '@shared/ui/domain/uuid'
import { ToolDefaultPageLayout } from '@shared/ui/tool'

const uuid = ref<UUIDv4>(crypto.randomUUID() as UUIDv4)

function regenerateUUID() {
  uuid.value = crypto.randomUUID() as UUIDv4
}
</script>
