<template>
  <ToolDefaultPageLayout :info="toolInfo">
    <ToolSectionHeader>ULID</ToolSectionHeader>
    <ToolSection>
      <ULIDDisplay :ulid="ulid" />
    </ToolSection>

    <ToolSection>
      <RegenerateButton @click="regenerateULID" />
      <n-divider vertical />
      <CopyToClipboardButton :content="ulid" />
    </ToolSection>

    <WhatIsULID />
  </ToolDefaultPageLayout>
</template>

<script lang="ts" setup>
import * as toolInfo from './infos'
import { NDivider } from 'naive-ui'
import { ref } from 'vue'
import WhatIsULID from '../descriptions/WhatIsULID.vue'
import { CopyToClipboardButton, RegenerateButton } from '@shared/ui/base'
import { ToolSectionHeader, ToolSection } from '@shared/ui/tool'
import { ToolDefaultPageLayout } from '@shared/ui/tool'
import { ulid as generateULID } from 'ulid'
import ULIDDisplay from './components/ULIDDisplay.vue'

const ulid = ref<string>(generateULID())

function regenerateULID() {
  ulid.value = generateULID()
}
</script>
