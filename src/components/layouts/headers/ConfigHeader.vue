<template>
  <n-h2 prefix="bar" align-text>{{ t('config') }}</n-h2>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
import { NH2 } from 'naive-ui'

const { t } = useI18n()
</script>

<i18n lang="json">
{
  "en": {
    "config": "Configuration"
  },
  "zh": {
    "config": "配置"
  },
  "zh-CN": {
    "config": "配置"
  },
  "zh-TW": {
    "config": "配置"
  },
  "zh-HK": {
    "config": "配置"
  },
  "es": {
    "config": "Configuración"
  },
  "fr": {
    "config": "Configuration"
  },
  "de": {
    "config": "Konfiguration"
  },
  "it": {
    "config": "Configurazione"
  },
  "ja": {
    "config": "設定"
  },
  "ko": {
    "config": "설정"
  },
  "ru": {
    "config": "Конфигурация"
  },
  "pt": {
    "config": "Configuração"
  },
  "ar": {
    "config": "الإعدادات"
  },
  "hi": {
    "config": "कॉन्फ़िगरेशन"
  },
  "tr": {
    "config": "Yapılandırma"
  },
  "nl": {
    "config": "Configuratie"
  },
  "sv": {
    "config": "Konfiguration"
  },
  "pl": {
    "config": "Konfiguracja"
  },
  "vi": {
    "config": "Cấu hình"
  },
  "th": {
    "config": "การกำหนดค่า"
  },
  "id": {
    "config": "Konfigurasi"
  },
  "he": {
    "config": "הגדרות"
  },
  "ms": {
    "config": "Konfigurasi"
  },
  "no": {
    "config": "Konfigurasjon"
  }
}
</i18n>
