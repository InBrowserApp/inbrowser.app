<template>
  <n-h1 prefix="bar" align-text>{{ t('title', { query: searchQuery }) }}</n-h1>
  <n-p>
    <ToolsGrid :tools="toolsResults" />
  </n-p>
</template>

<script setup lang="ts">
import { NH1, NP } from 'naive-ui'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import { useSearchTools } from '@registry/tools/search'
import { useHead } from '@unhead/vue'
import { ToolsGrid } from '@shared/ui/tool'

const route = useRoute()
const searchQuery = computed<string>(() => {
  const querys = route.query.query
  // if querys is an array, return the first item
  if (Array.isArray(querys)) {
    return querys[0] ?? ''
  }
  return querys ?? ''
})

const { t } = useI18n()

const { toolsResults } = useSearchTools(searchQuery)

useHead({
  title: searchQuery.value + ' - InBrowser.App',
  meta: [{ name: 'description', content: t('description', { query: searchQuery.value }) }],
})
</script>

<i18n lang="json">
{
  "en": {
    "title": "Search Tools - {query}"
  },
  "zh": {
    "title": "搜索工具 - {query}"
  },
  "zh-CN": {
    "title": "搜索工具 - {query}"
  },
  "zh-TW": {
    "title": "搜索工具 - {query}"
  },
  "zh-HK": {
    "title": "搜索工具 - {query}"
  },
  "es": {
    "title": "Buscar herramientas - {query}"
  },
  "fr": {
    "title": "Rechercher des outils - {query}"
  },
  "de": {
    "title": "Werkzeuge suchen - {query}"
  },
  "it": {
    "title": "Cerca strumenti - {query}"
  },
  "ja": {
    "title": "ツールを検索 - {query}"
  },
  "ko": {
    "title": "도구 검색 - {query}"
  },
  "ru": {
    "title": "Поиск инструментов - {query}"
  },
  "pt": {
    "title": "Pesquisar ferramentas - {query}"
  },
  "ar": {
    "title": "البحث عن الأدوات - {query}"
  },
  "hi": {
    "title": "उपकरण खोजें - {query}"
  },
  "tr": {
    "title": "Araçları ara - {query}"
  },
  "nl": {
    "title": "Zoek tools - {query}"
  },
  "sv": {
    "title": "Sök verktyg - {query}"
  },
  "pl": {
    "title": "Szukaj narzędzi - {query}"
  },
  "vi": {
    "title": "Tìm kiếm công cụ - {query}"
  },
  "th": {
    "title": "ค้นหาอุปกรณ์ - {query}"
  },
  "id": {
    "title": "Cari alat - {query}"
  },
  "he": {
    "title": "חיפוש כלים - {query}"
  },
  "ms": {
    "title": "Cari alat - {query}"
  },
  "no": {
    "title": "Søk verktøy - {query}"
  }
}
</i18n>
