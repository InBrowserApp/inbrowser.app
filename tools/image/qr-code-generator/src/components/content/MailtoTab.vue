<template>
  <n-grid cols="1 s:2" responsive="screen" :x-gap="12" :y-gap="12">
    <n-form-item-gi :label="t('mailto-to')" :show-feedback="false">
      <n-input v-model:value="model.to" placeholder="mail@example.com" />
    </n-form-item-gi>
    <n-form-item-gi :label="t('mailto-subject')" :show-feedback="false">
      <n-input v-model:value="model.subject" :placeholder="t('mailto-subject-ph')" />
    </n-form-item-gi>
    <n-form-item-gi :label="t('mailto-body')" :show-feedback="false">
      <n-input v-model:value="model.body" :placeholder="t('mailto-body-ph')" />
    </n-form-item-gi>
  </n-grid>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { NFormItemGi, NGrid, NInput } from 'naive-ui'

export type MailtoModel = { to: string; subject: string; body: string }

const model = defineModel<MailtoModel>({ required: true })
const { t } = useI18n()
</script>

<i18n lang="json">
{
  "en": {
    "mailto-to": "To",
    "mailto-subject": "Subject",
    "mailto-subject-ph": "Hello",
    "mailto-body": "Body",
    "mailto-body-ph": "Write your message..."
  },
  "zh": {
    "mailto-to": "收件人",
    "mailto-subject": "主题",
    "mailto-subject-ph": "你好",
    "mailto-body": "正文",
    "mailto-body-ph": "请输入内容..."
  },
  "zh-CN": {
    "mailto-to": "收件人",
    "mailto-subject": "主题",
    "mailto-subject-ph": "你好",
    "mailto-body": "正文",
    "mailto-body-ph": "请输入内容..."
  },
  "zh-TW": {
    "mailto-to": "收件者",
    "mailto-subject": "主旨",
    "mailto-subject-ph": "你好",
    "mailto-body": "內文",
    "mailto-body-ph": "請輸入內容..."
  },
  "zh-HK": {
    "mailto-to": "收件者",
    "mailto-subject": "主旨",
    "mailto-subject-ph": "你好",
    "mailto-body": "內容",
    "mailto-body-ph": "請輸入內容..."
  },
  "es": {
    "mailto-to": "Para",
    "mailto-subject": "Asunto",
    "mailto-subject-ph": "Hola",
    "mailto-body": "Cuerpo",
    "mailto-body-ph": "Escribe tu mensaje..."
  },
  "fr": {
    "mailto-to": "À",
    "mailto-subject": "Objet",
    "mailto-subject-ph": "Bonjour",
    "mailto-body": "Corps",
    "mailto-body-ph": "Écrivez votre message..."
  },
  "de": {
    "mailto-to": "An",
    "mailto-subject": "Betreff",
    "mailto-subject-ph": "Hallo",
    "mailto-body": "Nachricht",
    "mailto-body-ph": "Schreiben Sie Ihre Nachricht..."
  },
  "it": {
    "mailto-to": "A",
    "mailto-subject": "Oggetto",
    "mailto-subject-ph": "Ciao",
    "mailto-body": "Corpo",
    "mailto-body-ph": "Scrivi il tuo messaggio..."
  },
  "ja": {
    "mailto-to": "宛先",
    "mailto-subject": "件名",
    "mailto-subject-ph": "こんにちは",
    "mailto-body": "本文",
    "mailto-body-ph": "メッセージを入力..."
  },
  "ko": {
    "mailto-to": "받는 사람",
    "mailto-subject": "제목",
    "mailto-subject-ph": "안녕하세요",
    "mailto-body": "내용",
    "mailto-body-ph": "메시지를 입력하세요..."
  },
  "ru": {
    "mailto-to": "Кому",
    "mailto-subject": "Тема",
    "mailto-subject-ph": "Привет",
    "mailto-body": "Текст",
    "mailto-body-ph": "Введите сообщение..."
  },
  "pt": {
    "mailto-to": "Para",
    "mailto-subject": "Assunto",
    "mailto-subject-ph": "Olá",
    "mailto-body": "Corpo",
    "mailto-body-ph": "Escreva sua mensagem..."
  },
  "ar": {
    "mailto-to": "إلى",
    "mailto-subject": "الموضوع",
    "mailto-subject-ph": "مرحبًا",
    "mailto-body": "النص",
    "mailto-body-ph": "اكتب رسالتك..."
  },
  "hi": {
    "mailto-to": "प्राप्तकर्ता",
    "mailto-subject": "विषय",
    "mailto-subject-ph": "नमस्ते",
    "mailto-body": "संदेश",
    "mailto-body-ph": "अपना संदेश लिखें..."
  },
  "tr": {
    "mailto-to": "Kime",
    "mailto-subject": "Konu",
    "mailto-subject-ph": "Merhaba",
    "mailto-body": "Gövde",
    "mailto-body-ph": "Mesajınızı yazın..."
  },
  "nl": {
    "mailto-to": "Aan",
    "mailto-subject": "Onderwerp",
    "mailto-subject-ph": "Hallo",
    "mailto-body": "Bericht",
    "mailto-body-ph": "Schrijf je bericht..."
  },
  "sv": {
    "mailto-to": "Till",
    "mailto-subject": "Ämne",
    "mailto-subject-ph": "Hej",
    "mailto-body": "Meddelande",
    "mailto-body-ph": "Skriv ditt meddelande..."
  },
  "pl": {
    "mailto-to": "Do",
    "mailto-subject": "Temat",
    "mailto-subject-ph": "Cześć",
    "mailto-body": "Treść",
    "mailto-body-ph": "Napisz swoją wiadomość..."
  },
  "vi": {
    "mailto-to": "Tới",
    "mailto-subject": "Chủ đề",
    "mailto-subject-ph": "Xin chào",
    "mailto-body": "Nội dung",
    "mailto-body-ph": "Viết tin nhắn của bạn..."
  },
  "th": {
    "mailto-to": "ถึง",
    "mailto-subject": "หัวข้อ",
    "mailto-subject-ph": "สวัสดี",
    "mailto-body": "เนื้อหา",
    "mailto-body-ph": "พิมพ์ข้อความของคุณ..."
  },
  "id": {
    "mailto-to": "Kepada",
    "mailto-subject": "Subjek",
    "mailto-subject-ph": "Halo",
    "mailto-body": "Isi",
    "mailto-body-ph": "Tulis pesan Anda..."
  },
  "he": {
    "mailto-to": "אל",
    "mailto-subject": "נושא",
    "mailto-subject-ph": "שלום",
    "mailto-body": "תוכן",
    "mailto-body-ph": "כתוב את ההודעה שלך..."
  },
  "ms": {
    "mailto-to": "Kepada",
    "mailto-subject": "Perkara",
    "mailto-subject-ph": "Hai",
    "mailto-body": "Badan",
    "mailto-body-ph": "Tulis mesej anda..."
  },
  "no": {
    "mailto-to": "Til",
    "mailto-subject": "Emne",
    "mailto-subject-ph": "Hei",
    "mailto-body": "Melding",
    "mailto-body-ph": "Skriv meldingen din..."
  }
}
</i18n>
