<template>
  <n-form-item :label="t('tel-phone')" :show-feedback="false">
    <n-input v-model:value="model" :placeholder="t('tel-phone-ph')" />
  </n-form-item>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { NFormItem, NInput } from 'naive-ui'

const model = defineModel<string>({ required: true })
const { t } = useI18n()
</script>

<i18n lang="json">
{
  "en": {
    "tel-phone": "Phone",
    "tel-phone-ph": "+1 555 0100"
  },
  "zh": { "tel-phone": "电话", "tel-phone-ph": "+86 138 0000 0000" },
  "zh-CN": { "tel-phone": "电话", "tel-phone-ph": "+86 138 0000 0000" },
  "zh-TW": { "tel-phone": "電話", "tel-phone-ph": "+886 912 345 678" },
  "zh-HK": { "tel-phone": "電話", "tel-phone-ph": "+852 6123 4567" },
  "es": { "tel-phone": "Teléfono", "tel-phone-ph": "+34 612 345 678" },
  "fr": { "tel-phone": "Téléphone", "tel-phone-ph": "+33 6 12 34 56 78" },
  "de": { "tel-phone": "Telefon", "tel-phone-ph": "+49 151 234567" },
  "it": { "tel-phone": "Telefono", "tel-phone-ph": "+39 333 123 4567" },
  "ja": { "tel-phone": "電話", "tel-phone-ph": "+81 90 1234 5678" },
  "ko": { "tel-phone": "전화", "tel-phone-ph": "+82 10-1234-5678" },
  "ru": { "tel-phone": "Телефон", "tel-phone-ph": "+7 912 123-45-67" },
  "pt": { "tel-phone": "Telefone", "tel-phone-ph": "+55 11 91234-5678" },
  "ar": { "tel-phone": "هاتف", "tel-phone-ph": "+966 50 123 4567" },
  "hi": { "tel-phone": "फोन", "tel-phone-ph": "+91 98765 43210" },
  "tr": { "tel-phone": "Telefon", "tel-phone-ph": "+90 532 123 45 67" },
  "nl": { "tel-phone": "Telefoon", "tel-phone-ph": "+31 6 12345678" },
  "sv": { "tel-phone": "Telefon", "tel-phone-ph": "+46 70 123 45 67" },
  "pl": { "tel-phone": "Telefon", "tel-phone-ph": "+48 600 123 456" },
  "vi": { "tel-phone": "Điện thoại", "tel-phone-ph": "+84 912 345 678" },
  "th": { "tel-phone": "โทรศัพท์", "tel-phone-ph": "+66 81 234 5678" },
  "id": { "tel-phone": "Telepon", "tel-phone-ph": "+62 812-3456-7890" },
  "he": { "tel-phone": "טלפון", "tel-phone-ph": "+972 50-123-4567" },
  "ms": { "tel-phone": "Telefon", "tel-phone-ph": "+60 12-345 6789" },
  "no": { "tel-phone": "Telefon", "tel-phone-ph": "+47 912 34 567" }
}
</i18n>
