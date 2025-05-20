<template>
  <div>
    <n-h1 prefix="bar" align-text>{{ t('name') }}</n-h1>
    <n-p>{{ t('description') }}</n-p>
    <n-p>
      <ToolsGrid :tools="relatedTools" hide="uuid-tools" />
    </n-p>

    <WhatIsUUID />
  </div>
</template>

<script lang="ts" setup>
import { meta } from './i18n'
import { useI18n } from 'vue-i18n'
import { NH1, NP } from 'naive-ui'
import { useViewHead } from '@/tools/composables/use-view-head'
import ToolsGrid from '@/components/tools/tool/ToolsGrid.vue'
import { relatedTools } from '../related-tools'
import WhatIsUUID from '../descriptions/WhatIsUUID.vue'

const { t } = useI18n({
  messages: meta,
})

useViewHead(t)
</script>
