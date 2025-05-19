<template>
  <div>
    <n-h1 prefix="bar" align-text>{{ t('name') }}</n-h1>
    <n-p>{{ t('description') }}</n-p>
    <n-h2 prefix="bar" align-text>UUID v1</n-h2>
    <n-p>
      <!-- TODO: require v1 uuid -->
      <UUIDInput
        v-model:uuid="v1uuid"
        :show-random="false"
        placeholder="c1ed67f0-34bd-11f0-b3fe-02d71e841f4f"
      />
    </n-p>
    <n-p>
      <CopyToClipboardButton :content="v1uuid" />
    </n-p>

    <n-h2 prefix="bar" align-text>UUID v6</n-h2>
    <n-p>
      <!-- TODO: require v6 uuid -->
      <UUIDInput
        v-model:uuid="v6uuid"
        :show-random="false"
        placeholder="1f034bdc-1ed6-67f0-b3fe-02d71e841f4f"
      />
    </n-p>
    <n-p>
      <CopyToClipboardButton :content="v1uuid" />
    </n-p>

    <WhatIsUUIDv1 />
    <WhatIsUUIDv6 />

    <RelatedTools :tools="relatedTools" hide="uuid-v1-v6-converter" />
  </div>
</template>

<script lang="ts" setup>
import { meta } from './i18n'
import { useI18n } from 'vue-i18n'
import { NH1, NP, NH2 } from 'naive-ui'
import { useViewHead } from '@/tools/composables/use-view-head'
import { ref, watch } from 'vue'
import WhatIsUUIDv1 from '../uuid-v1-generator/WhatIsUUIDv1.vue'
import WhatIsUUIDv6 from '../uuid-v6-generator/WhatIsUUIDv6.vue'
import type { UUIDv6 } from '@/utils/base/uuid'
import { relatedTools } from '../related-tools'
import RelatedTools from '@/components/tools/tool/RelatedTools.vue'
import type { UUIDv1 } from '@/utils/base/uuid'
import { v1ToV6, v6ToV1 } from 'uuid'
import UUIDInput from '@/components/base/input/uuid/UUIDInput.vue'
import CopyToClipboardButton from '@/components/base/buttons/CopyToClipboardButton.vue'

const { t } = useI18n({
  messages: meta,
})

const v1uuid = ref<UUIDv1 | ''>('')
const v6uuid = ref<UUIDv6 | ''>('')

useViewHead(t)

watch(v1uuid, () => {
  console.log('convert v1 to v6')
  v6uuid.value = v1ToV6(v1uuid.value) as UUIDv6
})

watch(v6uuid, () => {
  console.log('convert v6 to v1')
  v1uuid.value = v6ToV1(v6uuid.value) as UUIDv1
})
</script>
