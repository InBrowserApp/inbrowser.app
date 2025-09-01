<template>
  <n-grid cols="1 s:2" responsive="screen" :x-gap="12" :y-gap="12">
    <n-form-item-gi :label="t('sms-phone')" :show-feedback="false">
      <n-input v-model:value="model.phone" :placeholder="t('sms-phone-ph')" />
    </n-form-item-gi>
    <n-form-item-gi :label="t('sms-message')" :show-feedback="false">
      <n-input v-model:value="model.message" :placeholder="t('sms-message-ph')" />
    </n-form-item-gi>
  </n-grid>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { NFormItemGi, NGrid, NInput } from 'naive-ui'

export type SmsModel = { phone: string; message: string }

const model = defineModel<SmsModel>({ required: true })
const { t } = useI18n()
</script>

<i18n lang="json">
{
  "en": {
    "sms-phone": "Phone",
    "sms-phone-ph": "+1 555 0100",
    "sms-message": "Message",
    "sms-message-ph": "Hello!"
  },
  "zh": {
    "sms-phone": "电话",
    "sms-phone-ph": "+86 138 0000 0000",
    "sms-message": "信息",
    "sms-message-ph": "你好！"
  },
  "zh-CN": {
    "sms-phone": "电话",
    "sms-phone-ph": "+86 138 0000 0000",
    "sms-message": "信息",
    "sms-message-ph": "你好！"
  },
  "zh-TW": {
    "sms-phone": "電話",
    "sms-phone-ph": "+886 912 345 678",
    "sms-message": "訊息",
    "sms-message-ph": "你好！"
  },
  "zh-HK": {
    "sms-phone": "電話",
    "sms-phone-ph": "+852 6123 4567",
    "sms-message": "訊息",
    "sms-message-ph": "你好！"
  },
  "es": {
    "sms-phone": "Teléfono",
    "sms-phone-ph": "+34 612 345 678",
    "sms-message": "Mensaje",
    "sms-message-ph": "¡Hola!"
  },
  "fr": {
    "sms-phone": "Téléphone",
    "sms-phone-ph": "+33 6 12 34 56 78",
    "sms-message": "Message",
    "sms-message-ph": "Bonjour !"
  },
  "de": {
    "sms-phone": "Telefon",
    "sms-phone-ph": "+49 151 234567",
    "sms-message": "Nachricht",
    "sms-message-ph": "Hallo!"
  },
  "it": {
    "sms-phone": "Telefono",
    "sms-phone-ph": "+39 333 123 4567",
    "sms-message": "Messaggio",
    "sms-message-ph": "Ciao!"
  },
  "ja": {
    "sms-phone": "電話",
    "sms-phone-ph": "+81 90 1234 5678",
    "sms-message": "メッセージ",
    "sms-message-ph": "こんにちは！"
  },
  "ko": {
    "sms-phone": "전화",
    "sms-phone-ph": "+82 10-1234-5678",
    "sms-message": "메시지",
    "sms-message-ph": "안녕하세요!"
  },
  "ru": {
    "sms-phone": "Телефон",
    "sms-phone-ph": "+7 912 123-45-67",
    "sms-message": "Сообщение",
    "sms-message-ph": "Привет!"
  },
  "pt": {
    "sms-phone": "Telefone",
    "sms-phone-ph": "+55 11 91234-5678",
    "sms-message": "Mensagem",
    "sms-message-ph": "Olá!"
  },
  "ar": {
    "sms-phone": "هاتف",
    "sms-phone-ph": "+966 50 123 4567",
    "sms-message": "رسالة",
    "sms-message-ph": "مرحبًا!"
  },
  "hi": {
    "sms-phone": "फोन",
    "sms-phone-ph": "+91 98765 43210",
    "sms-message": "संदेश",
    "sms-message-ph": "नमस्ते!"
  },
  "tr": {
    "sms-phone": "Telefon",
    "sms-phone-ph": "+90 532 123 45 67",
    "sms-message": "Mesaj",
    "sms-message-ph": "Merhaba!"
  },
  "nl": {
    "sms-phone": "Telefoon",
    "sms-phone-ph": "+31 6 12345678",
    "sms-message": "Bericht",
    "sms-message-ph": "Hallo!"
  },
  "sv": {
    "sms-phone": "Telefon",
    "sms-phone-ph": "+46 70 123 45 67",
    "sms-message": "Meddelande",
    "sms-message-ph": "Hej!"
  },
  "pl": {
    "sms-phone": "Telefon",
    "sms-phone-ph": "+48 600 123 456",
    "sms-message": "Wiadomość",
    "sms-message-ph": "Cześć!"
  },
  "vi": {
    "sms-phone": "Điện thoại",
    "sms-phone-ph": "+84 912 345 678",
    "sms-message": "Tin nhắn",
    "sms-message-ph": "Xin chào!"
  },
  "th": {
    "sms-phone": "โทรศัพท์",
    "sms-phone-ph": "+66 81 234 5678",
    "sms-message": "ข้อความ",
    "sms-message-ph": "สวัสดี!"
  },
  "id": {
    "sms-phone": "Telepon",
    "sms-phone-ph": "+62 812-3456-7890",
    "sms-message": "Pesan",
    "sms-message-ph": "Halo!"
  },
  "he": {
    "sms-phone": "טלפון",
    "sms-phone-ph": "+972 50-123-4567",
    "sms-message": "הודעה",
    "sms-message-ph": "שלום!"
  },
  "ms": {
    "sms-phone": "Telefon",
    "sms-phone-ph": "+60 12-345 6789",
    "sms-message": "Mesej",
    "sms-message-ph": "Hai!"
  },
  "no": {
    "sms-phone": "Telefon",
    "sms-phone-ph": "+47 912 34 567",
    "sms-message": "Melding",
    "sms-message-ph": "Hei!"
  }
}
</i18n>
