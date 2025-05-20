<template>
  <TheDeveloperSay />

  <n-h2 prefix="bar" align-text>{{ t('base.all_tools') }}</n-h2>
  <n-p>
    <ToolsGrid :tools="allTools" />
  </n-p>
</template>

<script setup lang="ts">
import { NH2, NP } from 'naive-ui'
import { useI18n } from 'vue-i18n'
import TheDeveloperSay from '@/components/miscellaneous/the-developer-says/TheDeveloperSay.vue'
import { useHead } from '@unhead/vue'
import ToolsGrid from '@/components/tools/tool/ToolsGrid.vue'
import { tools as allTools } from '@/tools'

const { t } = useI18n()

useHead({
  title: 'InBrowser.App',
})
</script>
