<template>
  <div>
    <n-h1 prefix="bar" align-text>{{ t('name') }}</n-h1>
    <n-p>{{ t('description') }}</n-p>
    <n-h2 prefix="bar" align-text>UUID</n-h2>
    <n-p>
      <UUIDInput v-model:uuid="uuid" />
    </n-p>

    <UUIDDecoderResult :uuid="uuid" />

    <WhatIsNilUUID />
  </div>
</template>

<script lang="ts" setup>
import { meta } from './i18n'
import { useI18n } from 'vue-i18n'
import { NH1, NP, NH2 } from 'naive-ui'
import { useViewHead } from '@/tools/composables/use-view-head'
import WhatIsNilUUID from './WhatIsUUID.vue'
import UUIDInput from '@/components/base/input/uuid/UUIDInput.vue'
import UUIDDecoderResult from './UUIDDecoderResult.vue'
import { useStorage } from '@vueuse/core'
import type { UUID } from '@/utils/base/uuid'

const { t } = useI18n({
  messages: meta,
})

const uuid = useStorage<UUID>('tools:uuid-decoder:uuid', crypto.randomUUID())

useViewHead(t)
</script>
