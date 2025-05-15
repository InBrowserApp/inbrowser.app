<template>
  <RouterLink :to="path">
    {{ t('label') }}
  </RouterLink>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
import { useSiteLanguagePath } from '@/locale'

const { t } = useI18n()

const { path } = useSiteLanguagePath({ name: 'home' })
</script>

<i18n lang="json">
{
  "en": {
    "label": "Home"
  },
  "zh": {
    "label": "首页"
  },
  "zh-CN": {
    "label": "首页"
  },
  "zh-TW": {
    "label": "首頁"
  },
  "zh-HK": {
    "label": "主頁"
  },
  "ru": {
    "label": "Главная"
  },
  "fr": {
    "label": "Accueil"
  },
  "ja": {
    "label": "ホーム"
  },
  "es": {
    "label": "Inicio"
  },
  "de": {
    "label": "Startseite"
  },
  "pt": {
    "label": "Início"
  },
  "ko": {
    "label": "홈"
  },
  "it": {
    "label": "Home"
  },
  "ar": {
    "label": "الرئيسية"
  },
  "hi": {
    "label": "मुख्य पृष्ठ"
  },
  "tr": {
    "label": "Ana Sayfa"
  },
  "nl": {
    "label": "Startpagina"
  },
  "sv": {
    "label": "Startsida"
  },
  "pl": {
    "label": "Strona główna"
  },
  "vi": {
    "label": "Trang chủ"
  },
  "th": {
    "label": "หน้าแรก"
  },
  "id": {
    "label": "Beranda"
  },
  "he": {
    "label": "דף הבית"
  },
  "ms": {
    "label": "Laman Utama"
  },
  "no": {
    "label": "Hjem"
  }
}
</i18n>
