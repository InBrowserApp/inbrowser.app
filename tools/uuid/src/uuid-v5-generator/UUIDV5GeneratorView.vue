<template>
  <ToolDefaultPageLayout :info="toolInfo">
    <ToolSectionHeader>UUID v5</ToolSectionHeader>
    <ToolSection>
      <UUIDDisplay :uuid="uuid" />
    </ToolSection>

    <ToolSection>
      <CopyToClipboardButton :content="uuid" />
    </ToolSection>

    <ToolConfigHeader />
    <ToolSection>
      <NamespaceInput v-model:namespace="namespace" />
      <NameInput v-model:name="name" />
    </ToolSection>

    <WhatIsUUIDv5 />
  </ToolDefaultPageLayout>
</template>

<script lang="ts" setup>
import * as toolInfo from './infos'
import { UUIDDisplay } from '@shared/ui/domain/uuid'
import { CopyToClipboardButton } from '@shared/ui/base'
import { computed } from 'vue'
import WhatIsUUIDv5 from '../descriptions/WhatIsUUIDv5.vue'
import NamespaceInput from '../uuid-v3-generator/NamespaceInput.vue'
import type { UUID, UUIDv5 } from '@utils/uuid'
import { useStorage } from '@vueuse/core'
import NameInput from '../uuid-v3-generator/NameInput.vue'

import { v5 as uuidV5 } from 'uuid'
import { ToolConfigHeader, ToolSectionHeader, ToolSection } from '@shared/ui/tool'
import { ToolDefaultPageLayout } from '@shared/ui/tool'

const namespace = useStorage<UUID>(
  'tools:uuid-v5-generator:namespace',
  '6ba7b810-9dad-11d1-80b4-00c04fd430c8',
)
const name = useStorage<string>('tools:uuid-v5-generator:name', 'example.com')

const uuid = computed<UUIDv5>(() => uuidV5(name.value, namespace.value) as UUIDv5)
</script>
