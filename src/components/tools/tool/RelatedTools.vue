<template>
  <n-h2 prefix="bar" align-text>{{ t('related-tools') }}</n-h2>
  <n-p>
    <ToolsGrid :tools="tools" :hide="hide" />
  </n-p>
</template>

<script setup lang="ts">
import { NH2, NP } from 'naive-ui'
import ToolsGrid from './ToolsGrid.vue'
import type { ToolInfo } from '@/tools/interface'
import { useI18n } from 'vue-i18n'

defineProps<{
  tools: ToolInfo[]
  hide?: string[] | string // toolID[]
}>()

const { t } = useI18n()
</script>

<i18n lang="json">
{
  "en": {
    "related-tools": "Related Tools"
  },
  "zh": {
    "related-tools": "相关工具"
  },
  "zh-CN": {
    "related-tools": "相关工具"
  },
  "zh-TW": {
    "related-tools": "相关工具"
  },
  "zh-HK": {
    "related-tools": "相关工具"
  },
  "es": {
    "related-tools": "Herramientas relacionadas"
  },
  "fr": {
    "related-tools": "Outils connexes"
  },
  "de": {
    "related-tools": "Verwandte Werkzeuge"
  },
  "it": {
    "related-tools": "Strumenti correlati"
  },
  "ja": {
    "related-tools": "関連ツール"
  },
  "ko": {
    "related-tools": "관련 도구"
  },
  "ru": {
    "related-tools": "Связанные инструменты"
  },
  "pt": {
    "related-tools": "Ferramentas relacionadas"
  },
  "ar": {
    "related-tools": "الأدوات ذات الصلة"
  },
  "hi": {
    "related-tools": "संबंधित उपकरण"
  },
  "tr": {
    "related-tools": "İlgili Araçlar"
  },
  "nl": {
    "related-tools": "Gerelateerde hulpmiddelen"
  },
  "sv": {
    "related-tools": "Relaterade verktyg"
  },
  "pl": {
    "related-tools": "Powiązane narzędzia"
  },
  "vi": {
    "related-tools": "Công cụ liên quan"
  },
  "th": {
    "related-tools": "เครื่องมือที่เกี่ยวข้อง"
  },
  "id": {
    "related-tools": "Alat terkait"
  },
  "he": {
    "related-tools": "כלים קשורים"
  },
  "ms": {
    "related-tools": "Alat Berkaitan"
  },
  "no": {
    "related-tools": "Relaterte verktøy"
  }
}
</i18n>
