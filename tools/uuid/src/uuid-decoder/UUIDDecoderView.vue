<template>
  <ToolDefaultPageLayout :info="toolInfo">
    <ToolSectionHeader>UUID</ToolSectionHeader>
    <ToolSection>
      <UUIDInput v-model:uuid="uuid" />
    </ToolSection>

    <UUIDDecoderResult :uuid="uuid" />

    <WhatIsUUID />
  </ToolDefaultPageLayout>
</template>

<script lang="ts" setup>
import * as toolInfo from './infos'
import WhatIsUUID from '../descriptions/WhatIsUUID.vue'
import UUIDDecoderResult from './UUIDDecoderResult.vue'
import { useStorage } from '@vueuse/core'
import type { UUID } from '@utils/uuid'
import { useRoute } from 'vue-router'
import { validate } from 'uuid'
import { computed } from 'vue'
import { watch } from 'vue'
import { ToolSection, ToolSectionHeader } from '@shared/ui/tool'
import { UUIDInput } from '@shared/ui/domain/uuid'
import { ToolDefaultPageLayout } from '@shared/ui/tool'

const route = useRoute()
const uuidFromPath = route.params.uuid
const validatedUUID = computed<UUID | undefined>(() => {
  const uuid = Array.isArray(uuidFromPath) ? uuidFromPath?.[0] : uuidFromPath
  if (validate(uuid)) {
    return uuid as UUID
  } else {
    return undefined
  }
})

const uuid = useStorage<UUID>('tools:uuid-decoder:uuid', crypto.randomUUID())

watch(
  validatedUUID,
  (uuid_) => {
    if (uuid_) {
      uuid.value = uuid_
    }
  },
  { immediate: true },
)
</script>
