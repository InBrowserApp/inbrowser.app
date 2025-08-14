<template>
  <ToolDefaultPageLayout :info="toolInfo">
    <ToolSectionHeader>UUID v1</ToolSectionHeader>
    <ToolSection>
      <!-- TODO: require v1 uuid -->
      <UUIDInput
        v-model:uuid="v1uuid"
        :show-random="false"
        placeholder="c1ed67f0-34bd-11f0-b3fe-02d71e841f4f"
      />
    </ToolSection>
    <ToolSection>
      <CopyToClipboardButton :content="v1uuid" />
    </ToolSection>

    <ToolSectionHeader>UUID v6</ToolSectionHeader>
    <ToolSection>
      <!-- TODO: require v6 uuid -->
      <UUIDInput
        v-model:uuid="v6uuid"
        :show-random="false"
        placeholder="1f034bdc-1ed6-67f0-b3fe-02d71e841f4f"
      />
    </ToolSection>
    <ToolSection>
      <CopyToClipboardButton :content="v1uuid" />
    </ToolSection>

    <WhatIsUUIDv1 />
    <WhatIsUUIDv6 />
  </ToolDefaultPageLayout>
</template>

<script lang="ts" setup>
import * as toolInfo from './infos'
import { ref, watch } from 'vue'
import WhatIsUUIDv1 from '../descriptions/WhatIsUUIDv1.vue'
import WhatIsUUIDv6 from '../descriptions/WhatIsUUIDv6.vue'
import type { UUIDv6 } from '@utils/uuid'
import type { UUIDv1 } from '@utils/uuid'
import { v1ToV6, v6ToV1 } from 'uuid'
import { UUIDInput } from '@shared/ui/domain/uuid'
import { CopyToClipboardButton } from '@shared/ui/base'
import { ToolSectionHeader, ToolSection } from '@shared/ui/tool'
import { ToolDefaultPageLayout } from '@shared/ui/tool'

const v1uuid = ref<UUIDv1 | ''>('')
const v6uuid = ref<UUIDv6 | ''>('')

watch(v1uuid, () => {
  console.log('convert v1 to v6')
  v6uuid.value = v1ToV6(v1uuid.value) as UUIDv6
})

watch(v6uuid, () => {
  console.log('convert v6 to v1')
  v1uuid.value = v6ToV1(v6uuid.value) as UUIDv1
})
</script>
