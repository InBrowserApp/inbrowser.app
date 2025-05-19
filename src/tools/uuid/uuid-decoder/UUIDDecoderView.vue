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
import { useRoute } from 'vue-router'
import { validate } from 'uuid'
import { computed } from 'vue'
import { watch } from 'vue'

const { t } = useI18n({
  messages: meta,
})

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

useViewHead(t)
</script>
