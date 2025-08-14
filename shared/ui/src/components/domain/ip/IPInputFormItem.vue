<template>
  <n-form-item :label="t('ip')" :rule="rule">
    <n-input v-model:value="ip" type="text" placeholder="8.8.8.8" />
  </n-form-item>
</template>

<script lang="ts" setup>
import { NInput, NFormItem, type FormItemRule } from 'naive-ui'
import { useI18n } from 'vue-i18n'
import { isIP } from 'is-ip'

const { t } = useI18n()
const ip = defineModel<string>('ip', {
  required: true,
})

const rule: FormItemRule = {
  trigger: ['blur', 'input', 'change'],
  validator: () => {
    if (!ip.value) {
      return new Error(t('ip-is-required'))
    }

    if (isIP(ip.value)) {
      return true
    } else {
      return new Error(t('invalid-ip'))
    }
  },
}
</script>

<i18n lang="json">
{
  "en": {
    "ip": "IP",
    "ip-is-required": "IP address is required",
    "invalid-ip": "Invalid IP address"
  },
  "zh": {
    "ip": "IP 地址",
    "ip-is-required": "IP 地址是必填的",
    "invalid-ip": "输入的 IP 地址无效"
  },
  "zh-CN": {
    "ip": "IP 地址",
    "ip-is-required": "IP 地址是必填的",
    "invalid-ip": "输入的 IP 地址无效"
  },
  "zh-TW": {
    "ip": "IP 位址",
    "ip-is-required": "IP 位址為必填項目",
    "invalid-ip": "無效的 IP 位址"
  },
  "zh-HK": {
    "ip": "IP 位址",
    "ip-is-required": "IP 位址為必填項目",
    "invalid-ip": "無效的 IP 位址"
  },
  "es": {
    "ip": "IP",
    "ip-is-required": "La dirección IP es obligatoria",
    "invalid-ip": "Dirección IP inválida"
  },
  "fr": {
    "ip": "IP",
    "ip-is-required": "L'adresse IP est requise",
    "invalid-ip": "Adresse IP invalide"
  },
  "de": {
    "ip": "IP",
    "ip-is-required": "IP-Adresse ist erforderlich",
    "invalid-ip": "Ungültige IP-Adresse"
  },
  "it": {
    "ip": "IP",
    "ip-is-required": "L'indirizzo IP è obbligatorio",
    "invalid-ip": "Indirizzo IP non valido"
  },
  "ja": {
    "ip": "IP アドレス",
    "ip-is-required": "IP アドレスは必須です",
    "invalid-ip": "無効な IP アドレス"
  },
  "ko": {
    "ip": "IP 주소",
    "ip-is-required": "IP 주소는 필수입니다",
    "invalid-ip": "유효하지 않은 IP 주소"
  },
  "ru": {
    "ip": "IP",
    "ip-is-required": "IP-адрес обязателен",
    "invalid-ip": "Недействительный IP-адрес"
  },
  "pt": {
    "ip": "IP",
    "ip-is-required": "O endereço IP é obrigatório",
    "invalid-ip": "Endereço IP inválido"
  },
  "ar": {
    "ip": "عنوان IP",
    "ip-is-required": "عنوان IP مطلوب",
    "invalid-ip": "عنوان IP غير صالح"
  },
  "hi": {
    "ip": "IP पता",
    "ip-is-required": "IP पता आवश्यक है",
    "invalid-ip": "अमान्य IP पता"
  },
  "tr": {
    "ip": "IP",
    "ip-is-required": "IP adresi gereklidir",
    "invalid-ip": "Geçersiz IP adresi"
  },
  "nl": {
    "ip": "IP",
    "ip-is-required": "IP-adres is vereist",
    "invalid-ip": "Ongeldig IP-adres"
  },
  "sv": {
    "ip": "IP",
    "ip-is-required": "IP-adress krävs",
    "invalid-ip": "Ogiltig IP-adress"
  },
  "pl": {
    "ip": "IP",
    "ip-is-required": "Adres IP jest wymagany",
    "invalid-ip": "Nieprawidłowy adres IP"
  },
  "vi": {
    "ip": "Địa chỉ IP",
    "ip-is-required": "Địa chỉ IP là bắt buộc",
    "invalid-ip": "Địa chỉ IP không hợp lệ"
  },
  "th": {
    "ip": "ที่อยู่ IP",
    "ip-is-required": "ที่อยู่ IP จำเป็นต้องระบุ",
    "invalid-ip": "ที่อยู่ IP ไม่ถูกต้อง"
  },
  "id": {
    "ip": "Alamat IP",
    "ip-is-required": "Alamat IP diperlukan",
    "invalid-ip": "Alamat IP tidak valid"
  },
  "he": {
    "ip": "כתובת IP",
    "ip-is-required": "כתובת IP היא שדה חובה",
    "invalid-ip": "כתובת IP לא תקינה"
  },
  "ms": {
    "ip": "Alamat IP",
    "ip-is-required": "Alamat IP diperlukan",
    "invalid-ip": "Alamat IP tidak sah"
  },
  "no": {
    "ip": "IP-adresse",
    "ip-is-required": "IP-adresse er påkrevd",
    "invalid-ip": "Ugyldig IP-adresse"
  }
}
</i18n>
