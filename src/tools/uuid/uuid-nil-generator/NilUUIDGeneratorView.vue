<template>
  <div>
    <n-h1 prefix="bar" align-text>{{ t('name') }}</n-h1>
    <n-p>{{ t('description') }}</n-p>
    <n-h2 prefix="bar" align-text>Nil UUID</n-h2>
    <n-p>
      <UUIDDisplay :uuid="uuid" />
    </n-p>

    <n-p>
      <CopyToClipboardButton :content="uuid" />
    </n-p>

    <WhatIsNilUUID />
  </div>
</template>

<script lang="ts" setup>
import { meta } from './i18n'
import { useI18n } from 'vue-i18n'
import { NH1, NP, NH2 } from 'naive-ui'
import { useViewHead } from '@/tools/composables/use-view-head'
import CopyToClipboardButton from '@/components/base/buttons/CopyToClipboardButton.vue'
import UUIDDisplay from '@/components/base/display/uuid/UUIDDisplay.vue'
import WhatIsNilUUID from './WhatIsNilUUID.vue'

const { t } = useI18n({
  messages: meta,
})

const uuid = '00000000-0000-0000-0000-000000000000'

useViewHead(t)
</script>
