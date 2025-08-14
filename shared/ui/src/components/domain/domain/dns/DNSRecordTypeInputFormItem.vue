<template>
  <n-form-item :label="t('recordType')">
    <n-select v-model:value="types" :options="options" multiple />
  </n-form-item>
</template>

<script lang="ts" setup>
import { NSelect, NFormItem } from 'naive-ui'
import { DNSRecordTypes } from '@utils/dns'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const types = defineModel<string[]>('types', { required: true })

const options = computed(() => {
  const DNSRecordOptions = Object.entries(DNSRecordTypes).map(([label, value]) => ({
    label: `${label} / ${value}`,
    value: value,
  }))

  return DNSRecordOptions
})
</script>

<i18n lang="json">
{
  "en": {
    "recordType": "Record Type"
  },
  "zh": {
    "recordType": "记录类型"
  },
  "zh-CN": {
    "recordType": "记录类型"
  },
  "zh-TW": {
    "recordType": "記錄類型"
  },
  "zh-HK": {
    "recordType": "記錄類型"
  },
  "es": {
    "recordType": "Tipo de Registro"
  },
  "fr": {
    "recordType": "Type d'Enregistrement"
  },
  "de": {
    "recordType": "Datensatztyp"
  },
  "it": {
    "recordType": "Tipo di Record"
  },
  "ja": {
    "recordType": "レコードタイプ"
  },
  "ko": {
    "recordType": "레코드 유형"
  },
  "ru": {
    "recordType": "Тип записи"
  },
  "pt": {
    "recordType": "Tipo de Registro"
  },
  "ar": {
    "recordType": "نوع السجل"
  },
  "hi": {
    "recordType": "रिकॉर्ड प्रकार"
  },
  "tr": {
    "recordType": "Kayıt Türü"
  },
  "nl": {
    "recordType": "Record Type"
  },
  "sv": {
    "recordType": "Posttyp"
  },
  "pl": {
    "recordType": "Typ Rekordu"
  },
  "vi": {
    "recordType": "Loại Bản Ghi"
  },
  "th": {
    "recordType": "ประเภทบันทึก"
  },
  "id": {
    "recordType": "Jenis Rekord"
  },
  "he": {
    "recordType": "סוג רשומה"
  },
  "ms": {
    "recordType": "Jenis Rekod"
  },
  "no": {
    "recordType": "Posttype"
  }
}
</i18n>
