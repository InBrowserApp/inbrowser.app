<template>
  <n-form-item :label="t('name')">
    <n-input v-model:value="name" />
  </n-form-item>
</template>

<script setup lang="ts">
import { NFormItem, NInput } from 'naive-ui'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const name = defineModel<string>('name', { required: true })
</script>

<i18n lang="json">
{
  "en": {
    "name": "Name"
  },
  "zh": {
    "name": "名称"
  },
  "zh-CN": {
    "name": "名称"
  },
  "zh-TW": {
    "name": "名稱"
  },
  "zh-HK": {
    "name": "名稱"
  },
  "es": {
    "name": "Nombre"
  },
  "fr": {
    "name": "Nom"
  },
  "de": {
    "name": "Name"
  },
  "it": {
    "name": "Nome"
  },
  "ja": {
    "name": "名前"
  },
  "ko": {
    "name": "이름"
  },
  "ru": {
    "name": "Имя"
  },
  "pt": {
    "name": "Nome"
  },
  "ar": {
    "name": "الاسم"
  },
  "hi": {
    "name": "नाम"
  },
  "tr": {
    "name": "İsim"
  },
  "nl": {
    "name": "Naam"
  },
  "sv": {
    "name": "Namn"
  },
  "pl": {
    "name": "Nazwa"
  },
  "vi": {
    "name": "Tên"
  },
  "th": {
    "name": "ชื่อ"
  },
  "id": {
    "name": "Nama"
  },
  "he": {
    "name": "שם"
  },
  "ms": {
    "name": "Nama"
  },
  "no": {
    "name": "Navn"
  }
}
</i18n>
