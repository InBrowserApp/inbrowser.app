<template>
  <CustomRouterLink :to="{ name: 'tools' }">
    {{ t('title') }}
  </CustomRouterLink>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
import { CustomRouterLink } from '../../../../base'

const { t } = useI18n()
</script>

<i18n lang="json">
{
  "en": {
    "title": "All Tools"
  },
  "zh": {
    "title": "所有工具"
  },
  "zh-CN": {
    "title": "所有工具"
  },
  "zh-TW": {
    "title": "所有工具"
  },
  "zh-HK": {
    "title": "所有工具"
  },
  "es": {
    "title": "Todas las herramientas"
  },
  "fr": {
    "title": "Tous les outils"
  },
  "de": {
    "title": "Alle Werkzeuge"
  },
  "it": {
    "title": "Tutti gli strumenti"
  },
  "ja": {
    "title": "すべてのツール"
  },
  "ko": {
    "title": "모든 도구"
  },
  "ru": {
    "title": "Все инструменты"
  },
  "pt": {
    "title": "Todas as ferramentas"
  },
  "ar": {
    "title": "جميع الأدوات"
  },
  "hi": {
    "title": "सभी उपकरण"
  },
  "tr": {
    "title": "Tüm Araçlar"
  },
  "nl": {
    "title": "Alle tools"
  },
  "sv": {
    "title": "Alla verktyg"
  },
  "pl": {
    "title": "Wszystkie narzędzia"
  },
  "vi": {
    "title": "Tất cả công cụ"
  },
  "th": {
    "title": "เครื่องมือทั้งหมด"
  },
  "id": {
    "title": "Semua Alat"
  },
  "he": {
    "title": "כל הכלים"
  },
  "ms": {
    "title": "Semua Alat"
  },
  "no": {
    "title": "Alle verktøy"
  }
}
</i18n>
