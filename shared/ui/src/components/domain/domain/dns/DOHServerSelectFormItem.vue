<template>
  <n-form-item :label="t('dnsServer')">
    <n-select v-model:value="value" :options="options" />
  </n-form-item>
</template>

<script lang="ts" setup>
import { NSelect, NFormItem } from 'naive-ui'
import { BUILTIN_DOH_SERVERS } from '@utils/dns'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const value = defineModel<string>('value', { required: true })

const options = BUILTIN_DOH_SERVERS.map((server) => ({
  label: server.label,
  value: server.url,
}))
</script>

<i18n lang="json">
{
  "en": {
    "dnsServer": "DNS over HTTPS (DoH) Server"
  },
  "zh": {
    "dnsServer": "DNS over HTTPS (DoH) 服务器"
  },
  "zh-CN": {
    "dnsServer": "DNS over HTTPS (DoH) 服务器"
  },
  "zh-TW": {
    "dnsServer": "DNS over HTTPS (DoH) 伺服器"
  },
  "zh-HK": {
    "dnsServer": "DNS over HTTPS (DoH) 伺服器"
  },
  "es": {
    "dnsServer": "Servidor DNS sobre HTTPS (DoH)"
  },
  "fr": {
    "dnsServer": "Serveur DNS sur HTTPS (DoH)"
  },
  "de": {
    "dnsServer": "DNS über HTTPS (DoH) Server"
  },
  "it": {
    "dnsServer": "Server DNS su HTTPS (DoH)"
  },
  "ja": {
    "dnsServer": "DNS over HTTPS (DoH) サーバー"
  },
  "ko": {
    "dnsServer": "DNS over HTTPS (DoH) 서버"
  },
  "ru": {
    "dnsServer": "DNS через HTTPS (DoH) сервер"
  },
  "pt": {
    "dnsServer": "Servidor DNS sobre HTTPS (DoH)"
  },
  "ar": {
    "dnsServer": "خادم DNS عبر HTTPS (DoH)"
  },
  "hi": {
    "dnsServer": "DNS over HTTPS (DoH) सर्वर"
  },
  "tr": {
    "dnsServer": "HTTPS üzerinden DNS (DoH) Sunucusu"
  },
  "nl": {
    "dnsServer": "DNS over HTTPS (DoH) Server"
  },
  "sv": {
    "dnsServer": "DNS över HTTPS (DoH) Server"
  },
  "pl": {
    "dnsServer": "Serwer DNS przez HTTPS (DoH)"
  },
  "vi": {
    "dnsServer": "Máy chủ DNS qua HTTPS (DoH)"
  },
  "th": {
    "dnsServer": "เซิร์ฟเวอร์ DNS ผ่าน HTTPS (DoH)"
  },
  "id": {
    "dnsServer": "Server DNS melalui HTTPS (DoH)"
  },
  "he": {
    "dnsServer": "שרת DNS דרך HTTPS (DoH)"
  },
  "ms": {
    "dnsServer": "Pelayan DNS melalui HTTPS (DoH)"
  },
  "no": {
    "dnsServer": "DNS over HTTPS (DoH) Server"
  }
}
</i18n>
