<template>
  <RouterLink :to="path">
    {{ t('label') }}
  </RouterLink>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
import { useSiteLanguagePath } from '@/locale'

const { t } = useI18n()

const { path } = useSiteLanguagePath({ name: 'tools' })
</script>

<i18n lang="json">
{
  "en": {
    "label": "All Tools"
  },
  "zh": {
    "label": "所有工具"
  },
  "zh-CN": {
    "label": "所有工具"
  },
  "zh-TW": {
    "label": "所有工具"
  },
  "zh-HK": {
    "label": "所有工具"
  },
  "ru": {
    "label": "Все инструменты"
  },
  "fr": {
    "label": "Tous les outils"
  },
  "ja": {
    "label": "すべてのツール"
  },
  "es": {
    "label": "Todas las herramientas"
  },
  "de": {
    "label": "Alle Werkzeuge"
  },
  "pt": {
    "label": "Todas as ferramentas"
  },
  "ko": {
    "label": "모든 도구"
  },
  "it": {
    "label": "Tutti gli strumenti"
  },
  "ar": {
    "label": "جميع الأدوات"
  },
  "hi": {
    "label": "सभी उपकरण"
  },
  "tr": {
    "label": "Tüm Araçlar"
  },
  "nl": {
    "label": "Alle tools"
  },
  "sv": {
    "label": "Alla verktyg"
  },
  "pl": {
    "label": "Wszystkie narzędzia"
  },
  "vi": {
    "label": "Tất cả công cụ"
  },
  "th": {
    "label": "เครื่องมือทั้งหมด"
  },
  "id": {
    "label": "Semua Alat"
  },
  "he": {
    "label": "כל הכלים"
  },
  "ms": {
    "label": "Semua Alat"
  },
  "no": {
    "label": "Alle verktøy"
  }
}
</i18n>
