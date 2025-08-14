<template>
  <n-form-item :label="t('size')" :show-feedback="false">
    <n-input-number v-model:value="size" :min="0" />
  </n-form-item>
</template>

<script setup lang="ts">
import { NFormItem, NInputNumber } from 'naive-ui'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const size = defineModel<number>('size', { required: true })
</script>

<i18n lang="json">
{
  "en": {
    "size": "Size"
  },
  "zh": {
    "size": "数量"
  },
  "zh-CN": {
    "size": "数量"
  },
  "zh-TW": {
    "size": "數量"
  },
  "zh-HK": {
    "size": "數量"
  },
  "es": {
    "size": "Cantidad"
  },
  "fr": {
    "size": "Quantité"
  },
  "de": {
    "size": "Menge"
  },
  "it": {
    "size": "Quantità"
  },
  "ja": {
    "size": "数量"
  },
  "ko": {
    "size": "수량"
  },
  "ru": {
    "size": "Количество"
  },
  "pt": {
    "size": "Quantidade"
  },
  "ar": {
    "size": "الكمية"
  },
  "hi": {
    "size": "मात्रा"
  },
  "tr": {
    "size": "Miktar"
  },
  "nl": {
    "size": "Aantal"
  },
  "sv": {
    "size": "Antal"
  },
  "pl": {
    "size": "Ilość"
  },
  "vi": {
    "size": "Số lượng"
  },
  "th": {
    "size": "จำนวน"
  },
  "id": {
    "size": "Jumlah"
  },
  "he": {
    "size": "כמות"
  },
  "ms": {
    "size": "Jumlah"
  },
  "no": {
    "size": "Antall"
  }
}
</i18n>
