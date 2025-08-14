<template>
  <ToolDefaultPageLayout :info="toolInfo">
    <ToolSectionHeader>UUID v7</ToolSectionHeader>
    <ToolSection>
      <UUIDDisplay :uuid="uuid" />
    </ToolSection>

    <ToolSection>
      <RegenerateButton @click="regenerateUUID" />
      <n-divider vertical />
      <CopyToClipboardButton :content="uuid" />
    </ToolSection>

    <WhatIsUUIDv7 />
  </ToolDefaultPageLayout>
</template>

<script lang="ts" setup>
import * as toolInfo from './infos'
import { NDivider } from 'naive-ui'
import { ref } from 'vue'
import WhatIsUUIDv7 from '../descriptions/WhatIsUUIDv7.vue'
import type { UUIDv7 } from '@utils/uuid'
import { CopyToClipboardButton, RegenerateButton } from '@shared/ui/base'
import { ToolSectionHeader, ToolSection } from '@shared/ui/tool'
import { UUIDDisplay } from '@shared/ui/domain/uuid'

import { v7 as uuidv7 } from 'uuid'
import { ToolDefaultPageLayout } from '@shared/ui/tool'

const uuid = ref<UUIDv7>(uuidv7() as UUIDv7)

function regenerateUUID() {
  uuid.value = uuidv7() as UUIDv7
}
</script>
