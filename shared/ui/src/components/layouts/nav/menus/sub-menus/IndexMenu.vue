<template>
  <CustomRouterLink :to="{ name: 'home' }">
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
    "title": "Home"
  },
  "zh": {
    "title": "首页"
  },
  "zh-CN": {
    "title": "首页"
  },
  "zh-TW": {
    "title": "首頁"
  },
  "zh-HK": {
    "title": "首頁"
  },
  "es": {
    "title": "Inicio"
  },
  "fr": {
    "title": "Accueil"
  },
  "de": {
    "title": "Startseite"
  },
  "it": {
    "title": "Home"
  },
  "ja": {
    "title": "ホーム"
  },
  "ko": {
    "title": "홈"
  },
  "ru": {
    "title": "Главная"
  },
  "pt": {
    "title": "Início"
  },
  "ar": {
    "title": "الرئيسية"
  },
  "hi": {
    "title": "होम"
  },
  "tr": {
    "title": "Ana Sayfa"
  },
  "nl": {
    "title": "Home"
  },
  "sv": {
    "title": "Hem"
  },
  "pl": {
    "title": "Strona główna"
  },
  "vi": {
    "title": "Trang chủ"
  },
  "th": {
    "title": "หน้าแรก"
  },
  "id": {
    "title": "Beranda"
  },
  "he": {
    "title": "בית"
  },
  "ms": {
    "title": "Laman Utama"
  },
  "no": {
    "title": "Hjem"
  }
}
</i18n>
