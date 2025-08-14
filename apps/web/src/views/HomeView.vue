<template>
  <TheDeveloperSay />

  <ToolSectionHeader>
    {{ t('search-tools') }}
  </ToolSectionHeader>
  <SearchAutoComplete />

  <ToolSectionHeader>
    {{ t('all-tools') }}
  </ToolSectionHeader>

  <ToolSection>
    <ToolsGrid :tools="tools" />
  </ToolSection>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import TheDeveloperSay from '../components/miscellaneous/the-developer-says/TheDeveloperSay.vue'
import { useHead } from '@unhead/vue'
import { ToolsGrid, ToolSectionHeader, ToolSection } from '@shared/ui/tool'
import { tools } from '@registry/tools/main'
import SearchAutoComplete from '../components/search/search-auto-complete/SearchAutoComplete.vue'

const { t } = useI18n()

useHead({
  title: 'InBrowser.App',
})
</script>

<i18n lang="json">
{
  "en": {
    "search-tools": "Search Tools",
    "all-tools": "All Tools"
  },
  "zh": {
    "search-tools": "搜索工具",
    "all-tools": "所有工具"
  },
  "zh-CN": {
    "search-tools": "搜索工具",
    "all-tools": "所有工具"
  },
  "zh-TW": {
    "search-tools": "搜尋工具",
    "all-tools": "所有工具"
  },
  "zh-HK": {
    "search-tools": "搜尋工具",
    "all-tools": "所有工具"
  },
  "es": {
    "search-tools": "Buscar herramientas",
    "all-tools": "Todas las herramientas"
  },
  "fr": {
    "search-tools": "Rechercher des outils",
    "all-tools": "Tous les outils"
  },
  "de": {
    "search-tools": "Werkzeuge suchen",
    "all-tools": "Alle Werkzeuge"
  },
  "it": {
    "search-tools": "Cerca strumenti",
    "all-tools": "Tutti gli strumenti"
  },
  "ja": {
    "search-tools": "ツール検索",
    "all-tools": "すべてのツール"
  },
  "ko": {
    "search-tools": "도구 검색",
    "all-tools": "모든 도구"
  },
  "ru": {
    "search-tools": "Поиск инструментов",
    "all-tools": "Все инструменты"
  },
  "pt": {
    "search-tools": "Pesquisar ferramentas",
    "all-tools": "Todas as ferramentas"
  },
  "ar": {
    "search-tools": "البحث عن الأدوات",
    "all-tools": "جميع الأدوات"
  },
  "hi": {
    "search-tools": "उपकरण खोजें",
    "all-tools": "सभी उपकरण"
  },
  "tr": {
    "search-tools": "Araçları Ara",
    "all-tools": "Tüm Araçlar"
  },
  "nl": {
    "search-tools": "Zoek tools",
    "all-tools": "Alle tools"
  },
  "sv": {
    "search-tools": "Sök verktyg",
    "all-tools": "Alla verktyg"
  },
  "pl": {
    "search-tools": "Szukaj narzędzi",
    "all-tools": "Wszystkie narzędzia"
  },
  "vi": {
    "search-tools": "Tìm kiếm công cụ",
    "all-tools": "Tất cả công cụ"
  },
  "th": {
    "search-tools": "ค้นหาเครื่องมือ",
    "all-tools": "เครื่องมือทั้งหมด"
  },
  "id": {
    "search-tools": "Cari Alat",
    "all-tools": "Semua Alat"
  },
  "he": {
    "search-tools": "חפש כלים",
    "all-tools": "כל הכלים"
  },
  "ms": {
    "search-tools": "Cari Alat",
    "all-tools": "Semua Alat"
  },
  "no": {
    "search-tools": "Søk verktøy",
    "all-tools": "Alle verktøy"
  }
}
</i18n>
