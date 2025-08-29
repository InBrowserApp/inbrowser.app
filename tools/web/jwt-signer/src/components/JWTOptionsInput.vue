<template>
  <n-grid :cols="1" :x-gap="12" :y-gap="12">
    <n-form-item-gi :label="t('secret')" :show-feedback="false">
      <n-input
        v-model:value="secret"
        :placeholder="t('secret')"
        type="password"
        show-password-on="click"
      />
    </n-form-item-gi>
    <n-form-item-gi :label="t('alg')" :show-feedback="false">
      <n-select v-model:value="alg" :options="algOptions" />
    </n-form-item-gi>
  </n-grid>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { NInput, NGrid, NSelect, NFormItemGi } from 'naive-ui'

const { t } = useI18n()
const secret = defineModel<string>('secret', { required: true })
const alg = defineModel<AlgorithmType>('alg', { required: true })

type AlgorithmType =
  | 'HS256'
  | 'HS384'
  | 'HS512'
  | 'RS256'
  | 'RS384'
  | 'RS512'
  | 'PS256'
  | 'PS384'
  | 'PS512'
  | 'ES256'
  | 'ES384'
  | 'ES512'
  | 'EdDSA'

const algOptions = [
  { label: 'HS256', value: 'HS256' },
  { label: 'HS384', value: 'HS384' },
  { label: 'HS512', value: 'HS512' },
  { label: 'RS256', value: 'RS256' },
  { label: 'RS384', value: 'RS384' },
  { label: 'RS512', value: 'RS512' },
  { label: 'PS256', value: 'PS256' },
  { label: 'PS384', value: 'PS384' },
  { label: 'PS512', value: 'PS512' },
  { label: 'ES256', value: 'ES256' },
  { label: 'ES384', value: 'ES384' },
  { label: 'ES512', value: 'ES512' },
  { label: 'EdDSA', value: 'EdDSA' },
]
</script>

<i18n lang="json">
{
  "en": {
    "alg": "Algorithm",
    "secret": "Secret"
  },
  "zh": {
    "alg": "算法",
    "secret": "密钥"
  },
  "zh-CN": {
    "alg": "算法",
    "secret": "密钥"
  },
  "zh-TW": {
    "alg": "演算法",
    "secret": "金鑰"
  },
  "zh-HK": {
    "alg": "演算法",
    "secret": "金鑰"
  },
  "es": {
    "alg": "Algoritmo",
    "secret": "Secreto"
  },
  "fr": {
    "alg": "Algorithme",
    "secret": "Secret"
  },
  "de": {
    "alg": "Algorithmus",
    "secret": "Geheimnis"
  },
  "it": {
    "alg": "Algoritmo",
    "secret": "Segreto"
  },
  "ja": {
    "alg": "アルゴリズム",
    "secret": "シークレット"
  },
  "ko": {
    "alg": "알고리즘",
    "secret": "시크릿"
  },
  "ru": {
    "alg": "Алгоритм",
    "secret": "Секрет"
  },
  "pt": {
    "alg": "Algoritmo",
    "secret": "Segredo"
  },
  "ar": {
    "alg": "الخوارزمية",
    "secret": "المفتاح السري"
  },
  "hi": {
    "alg": "एल्गोरिथ्म",
    "secret": "सीक्रेट"
  },
  "tr": {
    "alg": "Algoritma",
    "secret": "Gizli Anahtar"
  },
  "nl": {
    "alg": "Algoritme",
    "secret": "Geheim"
  },
  "sv": {
    "alg": "Algoritm",
    "secret": "Hemlighet"
  },
  "pl": {
    "alg": "Algorytm",
    "secret": "Sekret"
  },
  "vi": {
    "alg": "Thuật toán",
    "secret": "Bí mật"
  },
  "th": {
    "alg": "อัลกอริทึม",
    "secret": "คีย์ลับ"
  },
  "id": {
    "alg": "Algoritma",
    "secret": "Rahasia"
  },
  "he": {
    "alg": "אלגוריתם",
    "secret": "סוד"
  },
  "ms": {
    "alg": "Algoritma",
    "secret": "Rahsia"
  },
  "no": {
    "alg": "Algoritme",
    "secret": "Hemmelighet"
  }
}
</i18n>
