<template>
  <n-form-item :label="t('domain')" :rule="rule">
    <n-input v-model:value="domain" type="text" placeholder="example.com" />
  </n-form-item>
</template>

<script lang="ts" setup>
import { NInput, NFormItem, type FormItemRule } from 'naive-ui'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const domain = defineModel<string>('domain', { required: true })

const rule: FormItemRule = {
  trigger: ['blur', 'input', 'change'],
  validator: () => {
    if (!domain.value) {
      return new Error(t('domain-is-required'))
    }
    if (!domain.value.match(/^[a-z0-9-]+(\.[a-z0-9-]+)*\.[a-z]+$/i)) {
      return new Error(t('invalid-domain'))
    }
  },
}
</script>

<i18n lang="json">
{
  "en": {
    "domain": "Domain",
    "domain-is-required": "Domain is required",
    "invalid-domain": "Invalid domain"
  },
  "zh": {
    "domain": "域名",
    "domain-is-required": "域名是必填的",
    "invalid-domain": "输入的域名无效"
  },
  "zh-CN": {
    "domain": "域名",
    "domain-is-required": "域名是必填的",
    "invalid-domain": "输入的域名无效"
  },
  "zh-TW": {
    "domain": "網域",
    "domain-is-required": "網域為必填項目",
    "invalid-domain": "無效的網域"
  },
  "zh-HK": {
    "domain": "網域",
    "domain-is-required": "網域為必填項目",
    "invalid-domain": "無效的網域"
  },
  "es": {
    "domain": "Dominio",
    "domain-is-required": "El dominio es obligatorio",
    "invalid-domain": "Dominio inválido"
  },
  "fr": {
    "domain": "Domaine",
    "domain-is-required": "Le domaine est requis",
    "invalid-domain": "Domaine invalide"
  },
  "de": {
    "domain": "Domain",
    "domain-is-required": "Domain ist erforderlich",
    "invalid-domain": "Ungültige Domain"
  },
  "it": {
    "domain": "Dominio",
    "domain-is-required": "Il dominio è obbligatorio",
    "invalid-domain": "Dominio non valido"
  },
  "ja": {
    "domain": "ドメイン",
    "domain-is-required": "ドメインは必須です",
    "invalid-domain": "無効なドメイン"
  },
  "ko": {
    "domain": "도메인",
    "domain-is-required": "도메인은 필수입니다",
    "invalid-domain": "유효하지 않은 도메인"
  },
  "ru": {
    "domain": "Домен",
    "domain-is-required": "Домен обязателен",
    "invalid-domain": "Недействительный домен"
  },
  "pt": {
    "domain": "Domínio",
    "domain-is-required": "O domínio é obrigatório",
    "invalid-domain": "Domínio inválido"
  },
  "ar": {
    "domain": "النطاق",
    "domain-is-required": "النطاق مطلوب",
    "invalid-domain": "نطاق غير صالح"
  },
  "hi": {
    "domain": "डोमेन",
    "domain-is-required": "डोमेन आवश्यक है",
    "invalid-domain": "अमान्य डोमेन"
  },
  "tr": {
    "domain": "Alan Adı",
    "domain-is-required": "Alan adı gereklidir",
    "invalid-domain": "Geçersiz alan adı"
  },
  "nl": {
    "domain": "Domein",
    "domain-is-required": "Domein is vereist",
    "invalid-domain": "Ongeldig domein"
  },
  "sv": {
    "domain": "Domän",
    "domain-is-required": "Domän krävs",
    "invalid-domain": "Ogiltig domän"
  },
  "pl": {
    "domain": "Domena",
    "domain-is-required": "Domena jest wymagana",
    "invalid-domain": "Nieprawidłowa domena"
  },
  "vi": {
    "domain": "Tên miền",
    "domain-is-required": "Tên miền là bắt buộc",
    "invalid-domain": "Tên miền không hợp lệ"
  },
  "th": {
    "domain": "โดเมน",
    "domain-is-required": "โดเมนจำเป็นต้องระบุ",
    "invalid-domain": "โดเมนไม่ถูกต้อง"
  },
  "id": {
    "domain": "Domain",
    "domain-is-required": "Domain diperlukan",
    "invalid-domain": "Domain tidak valid"
  },
  "he": {
    "domain": "דומיין",
    "domain-is-required": "דומיין הוא שדה חובה",
    "invalid-domain": "דומיין לא תקין"
  },
  "ms": {
    "domain": "Domain",
    "domain-is-required": "Domain diperlukan",
    "invalid-domain": "Domain tidak sah"
  },
  "no": {
    "domain": "Domene",
    "domain-is-required": "Domene er påkrevd",
    "invalid-domain": "Ugyldig domene"
  }
}
</i18n>
