<template>
  <n-descriptions
    label-placement="left"
    bordered
    :column="1"
    content-style="width: 100%"
    class="decode-detail-result"
  >
    <n-descriptions-item label="UUID">
      <n-text code>{{ result.uuid }}</n-text>
    </n-descriptions-item>
    <n-descriptions-item :label="t('version')">
      <VersionDisplay :version="result.version" />
    </n-descriptions-item>
    <n-descriptions-item :label="t('variant')">
      <VariantDisplay :variant="result.variant" />
    </n-descriptions-item>
    <n-descriptions-item label="Base64">
      <n-text code>{{ result.base64 }}</n-text>
    </n-descriptions-item>
    <n-descriptions-item :label="t('integer')">
      <n-text code>{{ result.integer }}</n-text>
    </n-descriptions-item>
    <n-descriptions-item :label="t('algorithm')" v-if="result.algorithm">
      {{ t('algorithm.' + result.algorithm) }}
    </n-descriptions-item>
    <n-descriptions-item :label="t('macAddress')" v-if="result.macAddress">
      <n-text code>{{ result.macAddress }}</n-text>
    </n-descriptions-item>
    <n-descriptions-item :label="t('timestamp')" v-if="result.timestamp">
      <n-text code>{{ result.timestamp }}</n-text>
      (<n-time :time="result.timestamp" />, <n-time :time="result.timestamp" type="relative" />)
    </n-descriptions-item>
  </n-descriptions>
</template>

<script setup lang="ts">
import { NDescriptions, NDescriptionsItem, NText, NTime } from 'naive-ui'
import VersionDisplay from './VersionDisplay.vue'
import VariantDisplay from './VariantDisplay.vue'
import { useI18n } from 'vue-i18n'
import type { UUID } from '@/utils/base/uuid'

const { t } = useI18n()

defineProps<{
  result: {
    uuid: UUID
    version: number
    variant: number
    base64: string
    integer: bigint
    algorithm?: 'sha1' | 'md5'
    macAddress?: string
    timestamp?: number
  }
}>()
</script>

<style scoped>
.decode-detail-result :deep(.n-descriptions-table-header) {
  white-space: nowrap;
}
</style>

<i18n lang="json">
{
  "en": {
    "version": "Version",
    "variant": "Variant",
    "algorithm": "Algorithm",
    "macAddress": "MAC Address",
    "timestamp": "Timestamp",
    "algorithm.sha1": "SHA1",
    "algorithm.md5": "MD5",
    "integer": "Integer"
  },
  "zh": {
    "version": "版本",
    "variant": "变体",
    "algorithm": "算法",
    "macAddress": "MAC 地址",
    "timestamp": "时间戳",
    "integer": "整数"
  },
  "zh-CN": {
    "version": "版本",
    "variant": "变体",
    "algorithm": "算法",
    "macAddress": "MAC 地址",
    "timestamp": "时间戳",
    "integer": "整数"
  },
  "zh-TW": {
    "version": "版本",
    "variant": "變體",
    "algorithm": "演算法",
    "macAddress": "MAC 位址",
    "timestamp": "時間戳",
    "integer": "整數"
  },
  "zh-HK": {
    "version": "版本",
    "variant": "變體",
    "algorithm": "演算法",
    "macAddress": "MAC 位址",
    "timestamp": "時間戳",
    "integer": "整數"
  },
  "es": {
    "version": "Versión",
    "variant": "Variante",
    "algorithm": "Algoritmo",
    "macAddress": "Dirección MAC",
    "timestamp": "Marca de tiempo",
    "integer": "Entero"
  },
  "fr": {
    "version": "Version",
    "variant": "Variante",
    "algorithm": "Algorithme",
    "macAddress": "Adresse MAC",
    "timestamp": "Horodatage",
    "integer": "Entier"
  },
  "de": {
    "version": "Version",
    "variant": "Variante",
    "algorithm": "Algorithmus",
    "macAddress": "MAC-Adresse",
    "timestamp": "Zeitstempel",
    "integer": "Ganzzahl"
  },
  "it": {
    "version": "Versione",
    "variant": "Variante",
    "algorithm": "Algoritmo",
    "macAddress": "Indirizzo MAC",
    "timestamp": "Timestamp",
    "integer": "Intero"
  },
  "ja": {
    "version": "バージョン",
    "variant": "バリアント",
    "algorithm": "アルゴリズム",
    "macAddress": "MAC アドレス",
    "timestamp": "タイムスタンプ",
    "integer": "整数"
  },
  "ko": {
    "version": "버전",
    "variant": "변형",
    "algorithm": "알고리즘",
    "macAddress": "MAC 주소",
    "timestamp": "타임스탬프",
    "integer": "정수"
  },
  "ru": {
    "version": "Версия",
    "variant": "Вариант",
    "algorithm": "Алгоритм",
    "macAddress": "MAC-адрес",
    "timestamp": "Временная метка",
    "integer": "Целое число"
  },
  "pt": {
    "version": "Versão",
    "variant": "Variante",
    "algorithm": "Algoritmo",
    "macAddress": "Endereço MAC",
    "timestamp": "Timestamp",
    "integer": "Inteiro"
  },
  "ar": {
    "version": "الإصدار",
    "variant": "المتغير",
    "algorithm": "الخوارزمية",
    "macAddress": "عنوان MAC",
    "timestamp": "الطابع الزمني",
    "integer": "عدد صحيح"
  },
  "hi": {
    "version": "संस्करण",
    "variant": "वेरिएंट",
    "algorithm": "एल्गोरिथम",
    "macAddress": "MAC पता",
    "timestamp": "टाइमस्टैम्प",
    "integer": "पूर्णांक"
  },
  "tr": {
    "version": "Sürüm",
    "variant": "Varyant",
    "algorithm": "Algoritma",
    "macAddress": "MAC Adresi",
    "timestamp": "Zaman damgası",
    "integer": "Tamsayı"
  },
  "nl": {
    "version": "Versie",
    "variant": "Variant",
    "algorithm": "Algoritme",
    "macAddress": "MAC-adres",
    "timestamp": "Tijdstempel",
    "integer": "Geheel getal"
  },
  "sv": {
    "version": "Version",
    "variant": "Variant",
    "algorithm": "Algoritm",
    "macAddress": "MAC-adress",
    "timestamp": "Tidsstämpel",
    "integer": "Heltal"
  },
  "pl": {
    "version": "Wersja",
    "variant": "Wariant",
    "algorithm": "Algorytm",
    "macAddress": "Adres MAC",
    "timestamp": "Znacznik czasu",
    "integer": "Liczba całkowita"
  },
  "vi": {
    "version": "Phiên bản",
    "variant": "Biến thể",
    "algorithm": "Thuật toán",
    "macAddress": "Địa chỉ MAC",
    "timestamp": "Dấu thời gian",
    "integer": "Số nguyên"
  },
  "th": {
    "version": "เวอร์ชัน",
    "variant": "ตัวแปร",
    "algorithm": "อัลกอริทึม",
    "macAddress": "ที่อยู่ MAC",
    "timestamp": "การประทับเวลา",
    "integer": "จำนวนเต็ม"
  },
  "id": {
    "version": "Versi",
    "variant": "Varian",
    "algorithm": "Algoritma",
    "macAddress": "Alamat MAC",
    "timestamp": "Timestamp",
    "integer": "Bilangan bulat"
  },
  "he": {
    "version": "גרסה",
    "variant": "וריאנט",
    "algorithm": "אלגוריתם",
    "macAddress": "כתובת MAC",
    "timestamp": "חותמת זמן",
    "integer": "מספר שלם"
  },
  "ms": {
    "version": "Versi",
    "variant": "Varian",
    "algorithm": "Algoritma",
    "macAddress": "Alamat MAC",
    "timestamp": "Cop masa",
    "integer": "Integer"
  },
  "no": {
    "version": "Versjon",
    "variant": "Variant",
    "algorithm": "Algoritme",
    "macAddress": "MAC-adresse",
    "timestamp": "Tidsstempel",
    "integer": "Heltall"
  }
}
</i18n>
