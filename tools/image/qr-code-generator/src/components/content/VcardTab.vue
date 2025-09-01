<template>
  <n-grid cols="1 s:2" responsive="screen" :x-gap="12" :y-gap="12">
    <n-form-item-gi :label="t('vcard-first')" :show-feedback="false">
      <n-input v-model:value="model.firstName" :placeholder="t('vcard-first')" />
    </n-form-item-gi>
    <n-form-item-gi :label="t('vcard-last')" :show-feedback="false">
      <n-input v-model:value="model.lastName" :placeholder="t('vcard-last')" />
    </n-form-item-gi>
    <n-form-item-gi :label="t('vcard-org')" :show-feedback="false">
      <n-input v-model:value="model.organization" :placeholder="t('vcard-org')" />
    </n-form-item-gi>
    <n-form-item-gi :label="t('vcard-title')" :show-feedback="false">
      <n-input v-model:value="model.title" :placeholder="t('vcard-title')" />
    </n-form-item-gi>
    <n-form-item-gi :label="t('vcard-phone')" :show-feedback="false">
      <n-input v-model:value="model.phone" :placeholder="t('vcard-phone')" />
    </n-form-item-gi>
    <n-form-item-gi :label="t('vcard-email')" :show-feedback="false">
      <n-input v-model:value="model.email" :placeholder="t('vcard-email')" />
    </n-form-item-gi>
    <n-form-item-gi :label="t('vcard-website')" :show-feedback="false">
      <n-input v-model:value="model.url" :placeholder="t('vcard-website')" />
    </n-form-item-gi>
    <n-form-item-gi :label="t('vcard-address')" :show-feedback="false">
      <n-input v-model:value="model.address" :placeholder="t('vcard-address')" />
    </n-form-item-gi>
  </n-grid>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { NFormItemGi, NGrid, NInput } from 'naive-ui'

export type VcardModel = {
  firstName: string
  lastName: string
  organization: string
  title: string
  phone: string
  email: string
  url: string
  address: string
}

const model = defineModel<VcardModel>({ required: true })
const { t } = useI18n()
</script>

<i18n lang="json">
{
  "en": {
    "vcard-first": "First name",
    "vcard-last": "Last name",
    "vcard-org": "Organization",
    "vcard-title": "Title",
    "vcard-phone": "Phone",
    "vcard-email": "Email",
    "vcard-website": "Website",
    "vcard-address": "Address"
  },
  "zh": {
    "vcard-first": "名",
    "vcard-last": "姓",
    "vcard-org": "组织",
    "vcard-title": "职位",
    "vcard-phone": "电话",
    "vcard-email": "邮箱",
    "vcard-website": "网站",
    "vcard-address": "地址"
  },
  "zh-CN": {
    "vcard-first": "名",
    "vcard-last": "姓",
    "vcard-org": "组织",
    "vcard-title": "职位",
    "vcard-phone": "电话",
    "vcard-email": "邮箱",
    "vcard-website": "网站",
    "vcard-address": "地址"
  },
  "zh-TW": {
    "vcard-first": "名",
    "vcard-last": "姓",
    "vcard-org": "組織",
    "vcard-title": "職稱",
    "vcard-phone": "電話",
    "vcard-email": "電子郵件",
    "vcard-website": "網站",
    "vcard-address": "地址"
  },
  "zh-HK": {
    "vcard-first": "名",
    "vcard-last": "姓",
    "vcard-org": "組織",
    "vcard-title": "職稱",
    "vcard-phone": "電話",
    "vcard-email": "電郵",
    "vcard-website": "網站",
    "vcard-address": "地址"
  },
  "es": {
    "vcard-first": "Nombre",
    "vcard-last": "Apellido",
    "vcard-org": "Organización",
    "vcard-title": "Cargo",
    "vcard-phone": "Teléfono",
    "vcard-email": "Correo",
    "vcard-website": "Sitio web",
    "vcard-address": "Dirección"
  },
  "fr": {
    "vcard-first": "Prénom",
    "vcard-last": "Nom",
    "vcard-org": "Organisation",
    "vcard-title": "Titre",
    "vcard-phone": "Téléphone",
    "vcard-email": "E‑mail",
    "vcard-website": "Site web",
    "vcard-address": "Adresse"
  },
  "de": {
    "vcard-first": "Vorname",
    "vcard-last": "Nachname",
    "vcard-org": "Organisation",
    "vcard-title": "Titel",
    "vcard-phone": "Telefon",
    "vcard-email": "E‑Mail",
    "vcard-website": "Webseite",
    "vcard-address": "Adresse"
  },
  "it": {
    "vcard-first": "Nome",
    "vcard-last": "Cognome",
    "vcard-org": "Organizzazione",
    "vcard-title": "Titolo",
    "vcard-phone": "Telefono",
    "vcard-email": "Email",
    "vcard-website": "Sito web",
    "vcard-address": "Indirizzo"
  },
  "ja": {
    "vcard-first": "名",
    "vcard-last": "姓",
    "vcard-org": "組織",
    "vcard-title": "役職",
    "vcard-phone": "電話",
    "vcard-email": "メール",
    "vcard-website": "ウェブサイト",
    "vcard-address": "住所"
  },
  "ko": {
    "vcard-first": "이름",
    "vcard-last": "성",
    "vcard-org": "조직",
    "vcard-title": "직함",
    "vcard-phone": "전화",
    "vcard-email": "이메일",
    "vcard-website": "웹사이트",
    "vcard-address": "주소"
  },
  "ru": {
    "vcard-first": "Имя",
    "vcard-last": "Фамилия",
    "vcard-org": "Организация",
    "vcard-title": "Должность",
    "vcard-phone": "Телефон",
    "vcard-email": "Email",
    "vcard-website": "Сайт",
    "vcard-address": "Адрес"
  },
  "pt": {
    "vcard-first": "Nome",
    "vcard-last": "Sobrenome",
    "vcard-org": "Organização",
    "vcard-title": "Cargo",
    "vcard-phone": "Telefone",
    "vcard-email": "Email",
    "vcard-website": "Site",
    "vcard-address": "Endereço"
  },
  "ar": {
    "vcard-first": "الاسم",
    "vcard-last": "الكنية",
    "vcard-org": "المنظمة",
    "vcard-title": "المنصب",
    "vcard-phone": "الهاتف",
    "vcard-email": "البريد",
    "vcard-website": "الموقع",
    "vcard-address": "العنوان"
  },
  "hi": {
    "vcard-first": "पहला नाम",
    "vcard-last": "अंतिम नाम",
    "vcard-org": "संस्था",
    "vcard-title": "पद",
    "vcard-phone": "फ़ोन",
    "vcard-email": "ईमेल",
    "vcard-website": "वेबसाइट",
    "vcard-address": "पता"
  },
  "tr": {
    "vcard-first": "Ad",
    "vcard-last": "Soyad",
    "vcard-org": "Kurum",
    "vcard-title": "Ünvan",
    "vcard-phone": "Telefon",
    "vcard-email": "E‑posta",
    "vcard-website": "Web sitesi",
    "vcard-address": "Adres"
  },
  "nl": {
    "vcard-first": "Voornaam",
    "vcard-last": "Achternaam",
    "vcard-org": "Organisatie",
    "vcard-title": "Functie",
    "vcard-phone": "Telefoon",
    "vcard-email": "E‑mail",
    "vcard-website": "Website",
    "vcard-address": "Adres"
  },
  "sv": {
    "vcard-first": "Förnamn",
    "vcard-last": "Efternamn",
    "vcard-org": "Organisation",
    "vcard-title": "Titel",
    "vcard-phone": "Telefon",
    "vcard-email": "E‑post",
    "vcard-website": "Webbplats",
    "vcard-address": "Adress"
  },
  "pl": {
    "vcard-first": "Imię",
    "vcard-last": "Nazwisko",
    "vcard-org": "Organizacja",
    "vcard-title": "Tytuł",
    "vcard-phone": "Telefon",
    "vcard-email": "Email",
    "vcard-website": "Strona www",
    "vcard-address": "Adres"
  },
  "vi": {
    "vcard-first": "Tên",
    "vcard-last": "Họ",
    "vcard-org": "Tổ chức",
    "vcard-title": "Chức danh",
    "vcard-phone": "Điện thoại",
    "vcard-email": "Email",
    "vcard-website": "Trang web",
    "vcard-address": "Địa chỉ"
  },
  "th": {
    "vcard-first": "ชื่อ",
    "vcard-last": "นามสกุล",
    "vcard-org": "องค์กร",
    "vcard-title": "ตำแหน่ง",
    "vcard-phone": "โทรศัพท์",
    "vcard-email": "อีเมล",
    "vcard-website": "เว็บไซต์",
    "vcard-address": "ที่อยู่"
  },
  "id": {
    "vcard-first": "Nama depan",
    "vcard-last": "Nama belakang",
    "vcard-org": "Organisasi",
    "vcard-title": "Jabatan",
    "vcard-phone": "Telepon",
    "vcard-email": "Email",
    "vcard-website": "Situs web",
    "vcard-address": "Alamat"
  },
  "he": {
    "vcard-first": "שם פרטי",
    "vcard-last": "שם משפחה",
    "vcard-org": "ארגון",
    "vcard-title": "תפקיד",
    "vcard-phone": "טלפון",
    "vcard-email": "אימייל",
    "vcard-website": "אתר",
    "vcard-address": "כתובת"
  },
  "ms": {
    "vcard-first": "Nama depan",
    "vcard-last": "Nama belakang",
    "vcard-org": "Organisasi",
    "vcard-title": "Jawatan",
    "vcard-phone": "Telefon",
    "vcard-email": "Emel",
    "vcard-website": "Laman web",
    "vcard-address": "Alamat"
  },
  "no": {
    "vcard-first": "Fornavn",
    "vcard-last": "Etternavn",
    "vcard-org": "Organisasjon",
    "vcard-title": "Tittel",
    "vcard-phone": "Telefon",
    "vcard-email": "E‑post",
    "vcard-website": "Nettsted",
    "vcard-address": "Adresse"
  }
}
</i18n>
