<template>
  <div>
    <ToolSectionHeader>{{ t('credentials') }}</ToolSectionHeader>
    <ToolSection>
      <n-grid :cols="1" :x-gap="12" :y-gap="12">
        <n-gi>
          <n-input v-model:value="username" :placeholder="t('username')" />
        </n-gi>
        <n-gi>
          <n-input
            v-model:value="password"
            type="password"
            show-password-on="click"
            :placeholder="t('password')"
          />
        </n-gi>
      </n-grid>
    </ToolSection>

    <ToolSectionHeader>{{ t('header') }}</ToolSectionHeader>
    <ToolSection>
      <CopyToClipboardTooltip :content="authHeader" #="{ copy }">
        <n-text code style="font-size: 1.5em; cursor: pointer" @click="copy">{{
          authHeader
        }}</n-text>
      </CopyToClipboardTooltip>
    </ToolSection>

    <ToolSectionHeader>{{ t('curl') }}</ToolSectionHeader>
    <ToolSection>
      <CopyToClipboardTooltip :content="curlCommand" #="{ copy }">
        <n-text code style="font-size: 1.5em; cursor: pointer" @click="copy">{{
          curlCommand
        }}</n-text>
      </CopyToClipboardTooltip>
    </ToolSection>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { NInput, NGrid, NGi, NText } from 'naive-ui'
import { ToolSectionHeader, ToolSection } from '@shared/ui/tool'
import { CopyToClipboardTooltip } from '@shared/ui/base'
import { useStorage } from '@vueuse/core'

const { t } = useI18n()

const username = useStorage<string>('tools:basic-auth-generator:username', '')
const password = useStorage<string>('tools:basic-auth-generator:password', '')

const base64 = computed(() => {
  const token = `${username.value}:${password.value}`
  const bytes = new TextEncoder().encode(token)
  const base64str = btoa(String.fromCharCode(...bytes))
  return base64str
})

const authHeader = computed(() => (base64.value ? `Basic ${base64.value}` : ''))
const curlCommand = computed(() =>
  authHeader.value ? `curl -H "Authorization: ${authHeader.value}" https://api.example.com` : '',
)
</script>

<i18n lang="json">
{
  "en": {
    "credentials": "Credentials",
    "username": "Username",
    "password": "Password",
    "header": "Authorization Header",
    "clear": "Clear",
    "curl": "cURL Example"
  },
  "zh": {
    "credentials": "凭证",
    "username": "用户名",
    "password": "密码",
    "header": "Authorization 头",
    "clear": "清空",
    "curl": "cURL 示例"
  },
  "zh-CN": {
    "credentials": "凭证",
    "username": "用户名",
    "password": "密码",
    "header": "Authorization 头",
    "clear": "清空",
    "curl": "cURL 示例"
  },
  "zh-TW": {
    "credentials": "憑證",
    "username": "使用者名稱",
    "password": "密碼",
    "header": "Authorization 標頭",
    "clear": "清除",
    "curl": "cURL 範例"
  },
  "zh-HK": {
    "credentials": "憑證",
    "username": "使用者名稱",
    "password": "密碼",
    "header": "Authorization 標頭",
    "clear": "清除",
    "curl": "cURL 範例"
  },
  "es": {
    "credentials": "Credenciales",
    "username": "Usuario",
    "password": "Contraseña",
    "header": "Encabezado Authorization",
    "clear": "Limpiar",
    "curl": "Ejemplo cURL"
  },
  "fr": {
    "credentials": "Identifiants",
    "username": "Nom d'utilisateur",
    "password": "Mot de passe",
    "header": "En-tête Authorization",
    "clear": "Effacer",
    "curl": "Exemple cURL"
  },
  "de": {
    "credentials": "Anmeldedaten",
    "username": "Benutzername",
    "password": "Passwort",
    "header": "Authorization-Header",
    "clear": "Löschen",
    "curl": "cURL Beispiel"
  },
  "it": {
    "credentials": "Credenziali",
    "username": "Nome utente",
    "password": "Password",
    "header": "Header Authorization",
    "clear": "Cancella",
    "curl": "Esempio cURL"
  },
  "ja": {
    "credentials": "認証情報",
    "username": "ユーザー名",
    "password": "パスワード",
    "header": "Authorization ヘッダー",
    "clear": "クリア",
    "curl": "cURL 例"
  },
  "ko": {
    "credentials": "자격 증명",
    "username": "사용자 이름",
    "password": "비밀번호",
    "header": "Authorization 헤더",
    "clear": "지우기",
    "curl": "cURL 예"
  },
  "ru": {
    "credentials": "Учетные данные",
    "username": "Имя пользователя",
    "password": "Пароль",
    "header": "Заголовок Authorization",
    "clear": "Очистить",
    "curl": "Пример cURL"
  },
  "pt": {
    "credentials": "Credenciais",
    "username": "Nome de usuário",
    "password": "Senha",
    "header": "Cabeçalho Authorization",
    "clear": "Limpar",
    "curl": "Exemplo cURL"
  },
  "ar": {
    "credentials": "بيانات الاعتماد",
    "username": "اسم المستخدم",
    "password": "كلمة المرور",
    "header": "ترويسة Authorization",
    "clear": "مسح",
    "curl": "مثال cURL"
  },
  "hi": {
    "credentials": "प्रमाण-पत्र",
    "username": "उपयोगकर्ता नाम",
    "password": "पासवर्ड",
    "header": "Authorization हेडर",
    "clear": "साफ करें",
    "curl": "cURL उदाहरण"
  },
  "tr": {
    "credentials": "Kimlik Bilgileri",
    "username": "Kullanıcı Adı",
    "password": "Parola",
    "header": "Authorization Başlığı",
    "clear": "Temizle",
    "curl": "cURL Örneği"
  },
  "nl": {
    "credentials": "Referenties",
    "username": "Gebruikersnaam",
    "password": "Wachtwoord",
    "header": "Authorization-header",
    "clear": "Wissen",
    "curl": "cURL-voorbeeld"
  },
  "sv": {
    "credentials": "Inloggningsuppgifter",
    "username": "Användarnamn",
    "password": "Lösenord",
    "header": "Authorization-rubrik",
    "clear": "Rensa",
    "curl": "cURL-exempel"
  },
  "pl": {
    "credentials": "Dane logowania",
    "username": "Nazwa użytkownika",
    "password": "Hasło",
    "header": "Nagłówek Authorization",
    "clear": "Wyczyść",
    "curl": "Przykład cURL"
  },
  "vi": {
    "credentials": "Thông tin xác thực",
    "username": "Tên người dùng",
    "password": "Mật khẩu",
    "header": "Tiêu đề Authorization",
    "clear": "Xóa",
    "curl": "Ví dụ cURL"
  },
  "th": {
    "credentials": "ข้อมูลรับรอง",
    "username": "ชื่อผู้ใช้",
    "password": "รหัสผ่าน",
    "header": "ส่วนหัว Authorization",
    "clear": "ล้าง",
    "curl": "ตัวอย่าง cURL"
  },
  "id": {
    "credentials": "Kredensial",
    "username": "Nama pengguna",
    "password": "Kata sandi",
    "header": "Header Authorization",
    "clear": "Bersihkan",
    "curl": "Contoh cURL"
  },
  "he": {
    "credentials": "אישורים",
    "username": "שם משתמש",
    "password": "סיסמה",
    "header": "כותרת Authorization",
    "clear": "נקה",
    "curl": "דוגמת cURL"
  },
  "ms": {
    "credentials": "Kelayakan",
    "username": "Nama pengguna",
    "password": "Kata laluan",
    "header": "Pengepala Authorization",
    "clear": "Kosongkan",
    "curl": "Contoh cURL"
  },
  "no": {
    "credentials": "Legitimasjon",
    "username": "Brukernavn",
    "password": "Passord",
    "header": "Authorization-header",
    "clear": "Tøm",
    "curl": "cURL-eksempel"
  }
}
</i18n>
