<template>
  <n-form-item :label="t('mac_address')">
    <MACAddressInput v-model:address="address" />
  </n-form-item>
</template>

<script setup lang="ts">
import { NFormItem } from 'naive-ui'
import MACAddressInput from './MACAddressInput.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const address = defineModel<string>('address', { required: true })
</script>

<i18n lang="json">
{
  "en": {
    "mac_address": "MAC Address"
  },
  "zh": {
    "mac_address": "MAC 地址"
  },
  "zh-CN": {
    "mac_address": "MAC 地址"
  },
  "zh-TW": {
    "mac_address": "MAC 位址"
  },
  "zh-HK": {
    "mac_address": "MAC 位址"
  },
  "es": {
    "mac_address": "Dirección MAC"
  },
  "fr": {
    "mac_address": "Adresse MAC"
  },
  "de": {
    "mac_address": "MAC-Adresse"
  },
  "it": {
    "mac_address": "Indirizzo MAC"
  },
  "ja": {
    "mac_address": "MAC アドレス"
  },
  "ko": {
    "mac_address": "MAC 주소"
  },
  "ru": {
    "mac_address": "MAC-адрес"
  },
  "pt": {
    "mac_address": "Endereço MAC"
  },
  "ar": {
    "mac_address": "عنوان MAC"
  },
  "hi": {
    "mac_address": "MAC पता"
  },
  "tr": {
    "mac_address": "MAC Adresi"
  },
  "nl": {
    "mac_address": "MAC-adres"
  },
  "sv": {
    "mac_address": "MAC-adress"
  },
  "pl": {
    "mac_address": "Adres MAC"
  },
  "vi": {
    "mac_address": "Địa chỉ MAC"
  },
  "th": {
    "mac_address": "ที่อยู่ MAC"
  },
  "id": {
    "mac_address": "Alamat MAC"
  },
  "he": {
    "mac_address": "כתובת MAC"
  },
  "ms": {
    "mac_address": "Alamat MAC"
  },
  "no": {
    "mac_address": "MAC-adresse"
  }
}
</i18n>
