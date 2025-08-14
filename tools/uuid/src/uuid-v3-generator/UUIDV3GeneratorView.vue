<template>
  <ToolDefaultPageLayout :info="toolInfo">
    <ToolSectionHeader>UUID v3</ToolSectionHeader>
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

    <WhatIsUUIDv3 />
  </ToolDefaultPageLayout>
</template>

<script lang="ts" setup>
import * as toolInfo from './infos'
import { UUIDDisplay } from '@shared/ui/domain/uuid'
import { CopyToClipboardButton } from '@shared/ui/base'
import { computed } from 'vue'
import WhatIsUUIDv3 from '../descriptions/WhatIsUUIDv3.vue'
import NamespaceInput from './NamespaceInput.vue'
import NameInput from './NameInput.vue'
import { useStorage } from '@vueuse/core'
import type { UUID, UUIDv3 } from '@utils/uuid'
import { ToolConfigHeader, ToolSectionHeader, ToolSection } from '@shared/ui/tool'
import { ToolDefaultPageLayout } from '@shared/ui/tool'

import { v3 as uuidV3 } from 'uuid'

const namespace = useStorage<UUID>(
  'tools:uuid-v3-generator:namespace',
  '6ba7b810-9dad-11d1-80b4-00c04fd430c8',
)
const name = useStorage<string>('tools:uuid-v3-generator:name', 'example.com')

const uuid = computed<UUIDv3>(() => uuidV3(name.value, namespace.value) as UUIDv3)
</script>
