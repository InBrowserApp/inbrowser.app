<template>
  <n-grid cols="1 s:2" responsive="screen" :x-gap="12" :y-gap="12">
    <n-form-item-gi :label="t('wifi-ssid')" :show-feedback="false">
      <n-input v-model:value="model.ssid" :placeholder="t('wifi-ssid-ph')" />
    </n-form-item-gi>
    <n-form-item-gi :label="t('wifi-auth')" :show-feedback="false">
      <n-select v-model:value="model.auth" :options="wifiAuthOptions" />
    </n-form-item-gi>
    <n-form-item-gi :label="t('wifi-password')" :show-feedback="false">
      <n-input v-model:value="model.password" :placeholder="t('wifi-password-ph')" />
    </n-form-item-gi>
    <n-form-item-gi :label="t('wifi-hidden')" :show-feedback="false">
      <n-switch v-model:value="model.hidden" />
    </n-form-item-gi>
  </n-grid>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { NFormItemGi, NGrid, NInput, NSelect, NSwitch } from 'naive-ui'

export type WifiModel = {
  ssid: string
  auth: 'WPA' | 'WEP' | 'nopass'
  password: string
  hidden: boolean
}

const model = defineModel<WifiModel>({ required: true })
const { t } = useI18n()

const wifiAuthOptions = computed(() => [
  { label: 'WPA/WPA2', value: 'WPA' },
  { label: 'WEP', value: 'WEP' },
  { label: t('wifi-no-pass'), value: 'nopass' },
])
</script>

<i18n lang="json">
{
  "en": {
    "wifi-ssid": "SSID",
    "wifi-ssid-ph": "Network name",
    "wifi-auth": "Authentication",
    "wifi-password": "Password",
    "wifi-password-ph": "Network password",
    "wifi-hidden": "Hidden network",
    "wifi-no-pass": "No password"
  },
  "zh": {
    "wifi-ssid": "SSID",
    "wifi-ssid-ph": "网络名称",
    "wifi-auth": "认证方式",
    "wifi-password": "密码",
    "wifi-password-ph": "网络密码",
    "wifi-hidden": "隐藏网络",
    "wifi-no-pass": "无需密码"
  },
  "zh-CN": {
    "wifi-ssid": "SSID",
    "wifi-ssid-ph": "网络名称",
    "wifi-auth": "认证方式",
    "wifi-password": "密码",
    "wifi-password-ph": "网络密码",
    "wifi-hidden": "隐藏网络",
    "wifi-no-pass": "无需密码"
  },
  "zh-TW": {
    "wifi-ssid": "SSID",
    "wifi-ssid-ph": "網路名稱",
    "wifi-auth": "驗證方式",
    "wifi-password": "密碼",
    "wifi-password-ph": "網路密碼",
    "wifi-hidden": "隱藏網路",
    "wifi-no-pass": "無需密碼"
  },
  "zh-HK": {
    "wifi-ssid": "SSID",
    "wifi-ssid-ph": "網絡名稱",
    "wifi-auth": "驗證方式",
    "wifi-password": "密碼",
    "wifi-password-ph": "網絡密碼",
    "wifi-hidden": "隱藏網絡",
    "wifi-no-pass": "無需密碼"
  },
  "es": {
    "wifi-ssid": "SSID",
    "wifi-ssid-ph": "Nombre de la red",
    "wifi-auth": "Autenticación",
    "wifi-password": "Contraseña",
    "wifi-password-ph": "Contraseña de la red",
    "wifi-hidden": "Red oculta",
    "wifi-no-pass": "Sin contraseña"
  },
  "fr": {
    "wifi-ssid": "SSID",
    "wifi-ssid-ph": "Nom du réseau",
    "wifi-auth": "Authentification",
    "wifi-password": "Mot de passe",
    "wifi-password-ph": "Mot de passe du réseau",
    "wifi-hidden": "Réseau caché",
    "wifi-no-pass": "Sans mot de passe"
  },
  "de": {
    "wifi-ssid": "SSID",
    "wifi-ssid-ph": "Netzwerkname",
    "wifi-auth": "Authentifizierung",
    "wifi-password": "Passwort",
    "wifi-password-ph": "Netzwerkpasswort",
    "wifi-hidden": "Verstecktes Netzwerk",
    "wifi-no-pass": "Kein Passwort"
  },
  "it": {
    "wifi-ssid": "SSID",
    "wifi-ssid-ph": "Nome rete",
    "wifi-auth": "Autenticazione",
    "wifi-password": "Password",
    "wifi-password-ph": "Password di rete",
    "wifi-hidden": "Rete nascosta",
    "wifi-no-pass": "Nessuna password"
  },
  "ja": {
    "wifi-ssid": "SSID",
    "wifi-ssid-ph": "ネットワーク名",
    "wifi-auth": "認証方式",
    "wifi-password": "パスワード",
    "wifi-password-ph": "ネットワークのパスワード",
    "wifi-hidden": "非公開ネットワーク",
    "wifi-no-pass": "パスワード不要"
  },
  "ko": {
    "wifi-ssid": "SSID",
    "wifi-ssid-ph": "네트워크 이름",
    "wifi-auth": "인증 방식",
    "wifi-password": "비밀번호",
    "wifi-password-ph": "네트워크 비밀번호",
    "wifi-hidden": "숨김 네트워크",
    "wifi-no-pass": "비밀번호 없음"
  },
  "ru": {
    "wifi-ssid": "SSID",
    "wifi-ssid-ph": "Название сети",
    "wifi-auth": "Аутентификация",
    "wifi-password": "Пароль",
    "wifi-password-ph": "Пароль сети",
    "wifi-hidden": "Скрытая сеть",
    "wifi-no-pass": "Без пароля"
  },
  "pt": {
    "wifi-ssid": "SSID",
    "wifi-ssid-ph": "Nome da rede",
    "wifi-auth": "Autenticação",
    "wifi-password": "Senha",
    "wifi-password-ph": "Senha da rede",
    "wifi-hidden": "Rede oculta",
    "wifi-no-pass": "Sem senha"
  },
  "ar": {
    "wifi-ssid": "SSID",
    "wifi-ssid-ph": "اسم الشبكة",
    "wifi-auth": "المصادقة",
    "wifi-password": "كلمة المرور",
    "wifi-password-ph": "كلمة مرور الشبكة",
    "wifi-hidden": "شبكة مخفية",
    "wifi-no-pass": "بدون كلمة مرور"
  },
  "hi": {
    "wifi-ssid": "SSID",
    "wifi-ssid-ph": "नेटवर्क नाम",
    "wifi-auth": "प्रमाणीकरण",
    "wifi-password": "पासवर्ड",
    "wifi-password-ph": "नेटवर्क पासवर्ड",
    "wifi-hidden": "छुपा नेटवर्क",
    "wifi-no-pass": "पासवर्ड नहीं"
  },
  "tr": {
    "wifi-ssid": "SSID",
    "wifi-ssid-ph": "Ağ adı",
    "wifi-auth": "Kimlik doğrulama",
    "wifi-password": "Parola",
    "wifi-password-ph": "Ağ parolası",
    "wifi-hidden": "Gizli ağ",
    "wifi-no-pass": "Parola yok"
  },
  "nl": {
    "wifi-ssid": "SSID",
    "wifi-ssid-ph": "Netwerknaam",
    "wifi-auth": "Authenticatie",
    "wifi-password": "Wachtwoord",
    "wifi-password-ph": "Netwerkwachtwoord",
    "wifi-hidden": "Verborgen netwerk",
    "wifi-no-pass": "Geen wachtwoord"
  },
  "sv": {
    "wifi-ssid": "SSID",
    "wifi-ssid-ph": "Nätverksnamn",
    "wifi-auth": "Autentisering",
    "wifi-password": "Lösenord",
    "wifi-password-ph": "Nätverkslösenord",
    "wifi-hidden": "Dolt nätverk",
    "wifi-no-pass": "Inget lösenord"
  },
  "pl": {
    "wifi-ssid": "SSID",
    "wifi-ssid-ph": "Nazwa sieci",
    "wifi-auth": "Uwierzytelnianie",
    "wifi-password": "Hasło",
    "wifi-password-ph": "Hasło do sieci",
    "wifi-hidden": "Ukryta sieć",
    "wifi-no-pass": "Bez hasła"
  },
  "vi": {
    "wifi-ssid": "SSID",
    "wifi-ssid-ph": "Tên mạng",
    "wifi-auth": "Xác thực",
    "wifi-password": "Mật khẩu",
    "wifi-password-ph": "Mật khẩu mạng",
    "wifi-hidden": "Mạng ẩn",
    "wifi-no-pass": "Không mật khẩu"
  },
  "th": {
    "wifi-ssid": "SSID",
    "wifi-ssid-ph": "ชื่อเครือข่าย",
    "wifi-auth": "การยืนยันตัวตน",
    "wifi-password": "รหัสผ่าน",
    "wifi-password-ph": "รหัสผ่านเครือข่าย",
    "wifi-hidden": "เครือข่ายซ่อน",
    "wifi-no-pass": "ไม่มีรหัสผ่าน"
  },
  "id": {
    "wifi-ssid": "SSID",
    "wifi-ssid-ph": "Nama jaringan",
    "wifi-auth": "Autentikasi",
    "wifi-password": "Kata sandi",
    "wifi-password-ph": "Kata sandi jaringan",
    "wifi-hidden": "Jaringan tersembunyi",
    "wifi-no-pass": "Tanpa kata sandi"
  },
  "he": {
    "wifi-ssid": "SSID",
    "wifi-ssid-ph": "שם הרשת",
    "wifi-auth": "אימות",
    "wifi-password": "סיסמה",
    "wifi-password-ph": "סיסמת רשת",
    "wifi-hidden": "רשת מוסתרת",
    "wifi-no-pass": "ללא סיסמה"
  },
  "ms": {
    "wifi-ssid": "SSID",
    "wifi-ssid-ph": "Nama rangkaian",
    "wifi-auth": "Pengesahan",
    "wifi-password": "Kata laluan",
    "wifi-password-ph": "Kata laluan rangkaian",
    "wifi-hidden": "Rangkaian tersembunyi",
    "wifi-no-pass": "Tiada kata laluan"
  },
  "no": {
    "wifi-ssid": "SSID",
    "wifi-ssid-ph": "Nettverksnavn",
    "wifi-auth": "Autentisering",
    "wifi-password": "Passord",
    "wifi-password-ph": "Nettverkspassord",
    "wifi-hidden": "Skjult nettverk",
    "wifi-no-pass": "Ingen passord"
  }
}
</i18n>
