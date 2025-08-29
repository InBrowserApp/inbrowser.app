<template>
  <div>
    <ToolSectionHeader>{{ t('input') }}</ToolSectionHeader>
    <ToolSection>
      <n-input v-model:value="authHeader" :placeholder="t('placeholder')" />
    </ToolSection>

    <ToolSectionHeader v-if="username || password">{{ t('result') }}</ToolSectionHeader>
    <ToolSection v-if="username || password">
      <n-descriptions :column="1" label-placement="left">
        <n-descriptions-item :label="t('username')">
          <CopyToClipboardTooltip :content="username" #="{ copy }">
            <n-text code style="font-size: 1.1em; cursor: pointer" @click="copy">{{
              username
            }}</n-text>
          </CopyToClipboardTooltip>
        </n-descriptions-item>
        <n-descriptions-item :label="t('password')">
          <CopyToClipboardTooltip :content="password" #="{ copy }">
            <n-text code style="font-size: 1.1em; cursor: pointer" @click="copy">{{
              password
            }}</n-text>
          </CopyToClipboardTooltip>
        </n-descriptions-item>
      </n-descriptions>
    </ToolSection>
    <ToolSection v-if="error">
      <n-text type="error">{{ error }}</n-text>
    </ToolSection>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { NInput, NText, NDescriptions, NDescriptionsItem } from 'naive-ui'
import { ToolSectionHeader, ToolSection } from '@shared/ui/tool'
import { CopyToClipboardTooltip } from '@shared/ui/base'

const { t } = useI18n()

const authHeader = ref<string>('')
const username = ref<string>('')
const password = ref<string>('')
const error = ref<string>('')

watch(authHeader, (val) => {
  error.value = ''
  username.value = ''
  password.value = ''

  if (!val?.trim()) return

  const prefix = 'basic '
  const lower = val.trim().toLowerCase()
  if (!lower.startsWith(prefix)) {
    error.value = t('invalid-header')
    return
  }

  const base64 = val.trim().slice(prefix.length).trim()
  try {
    const bin = atob(base64)
    // Convert binary string to UTF-8 text safely
    const bytes = Uint8Array.from(bin, (c) => c.charCodeAt(0))
    const decoded = new TextDecoder().decode(bytes)
    const [user, ...rest] = decoded.split(':')
    username.value = user ?? ''
    password.value = rest.join(':')
  } catch {
    error.value = t('invalid-base64')
  }
})
</script>

<i18n lang="json">
{
  "en": {
    "input": "Authorization Header",
    "placeholder": "Paste header like: Basic dXNlcjpwYXNz",
    "result": "Decoded Result",
    "username": "Username",
    "password": "Password",
    "invalid-header": "Invalid Basic Authorization header",
    "invalid-base64": "Invalid Base64 content"
  },
  "zh": {
    "input": "Authorization 头",
    "placeholder": "粘贴类似: Basic dXNlcjpwYXNz",
    "result": "解码结果",
    "username": "用户名",
    "password": "密码",
    "invalid-header": "无效的 Basic Authorization 头",
    "invalid-base64": "无效的 Base64 内容"
  },
  "zh-CN": {
    "input": "Authorization 头",
    "placeholder": "粘贴类似: Basic dXNlcjpwYXNz",
    "result": "解码结果",
    "username": "用户名",
    "password": "密码",
    "invalid-header": "无效的 Basic Authorization 头",
    "invalid-base64": "无效的 Base64 内容"
  },
  "zh-TW": {
    "input": "Authorization 標頭",
    "placeholder": "貼上例如：Basic dXNlcjpwYXNz",
    "result": "解碼結果",
    "username": "使用者名稱",
    "password": "密碼",
    "invalid-header": "無效的 Basic Authorization 標頭",
    "invalid-base64": "無效的 Base64 內容"
  },
  "zh-HK": {
    "input": "Authorization 標頭",
    "placeholder": "貼上例如：Basic dXNlcjpwYXNz",
    "result": "解碼結果",
    "username": "使用者名稱",
    "password": "密碼",
    "invalid-header": "無效的 Basic Authorization 標頭",
    "invalid-base64": "無效的 Base64 內容"
  },
  "es": {
    "input": "Encabezado Authorization",
    "placeholder": "Pega algo como: Basic dXNlcjpwYXNz",
    "result": "Resultado Decodificado",
    "username": "Usuario",
    "password": "Contraseña",
    "invalid-header": "Encabezado Basic Authorization inválido",
    "invalid-base64": "Contenido Base64 inválido"
  },
  "fr": {
    "input": "En-tête Authorization",
    "placeholder": "Collez quelque chose comme : Basic dXNlcjpwYXNz",
    "result": "Résultat Décodé",
    "username": "Nom d'utilisateur",
    "password": "Mot de passe",
    "invalid-header": "En-tête Basic Authorization invalide",
    "invalid-base64": "Contenu Base64 invalide"
  },
  "de": {
    "input": "Authorization-Header",
    "placeholder": "Füge ein wie: Basic dXNlcjpwYXNz",
    "result": "Dekodiertes Ergebnis",
    "username": "Benutzername",
    "password": "Passwort",
    "invalid-header": "Ungültiger Basic Authorization-Header",
    "invalid-base64": "Ungültiger Base64-Inhalt"
  },
  "it": {
    "input": "Header Authorization",
    "placeholder": "Incolla qualcosa come: Basic dXNlcjpwYXNz",
    "result": "Risultato Decodificato",
    "username": "Nome utente",
    "password": "Password",
    "invalid-header": "Header Basic Authorization non valido",
    "invalid-base64": "Contenuto Base64 non valido"
  },
  "ja": {
    "input": "Authorization ヘッダー",
    "placeholder": "次のように貼り付け: Basic dXNlcjpwYXNz",
    "result": "デコード結果",
    "username": "ユーザー名",
    "password": "パスワード",
    "invalid-header": "無効な Basic Authorization ヘッダー",
    "invalid-base64": "無効な Base64 コンテンツ"
  },
  "ko": {
    "input": "Authorization 헤더",
    "placeholder": "다음과 같이 붙여넣기: Basic dXNlcjpwYXNz",
    "result": "디코딩 결과",
    "username": "사용자 이름",
    "password": "비밀번호",
    "invalid-header": "유효하지 않은 Basic Authorization 헤더",
    "invalid-base64": "유효하지 않은 Base64 내용"
  },
  "ru": {
    "input": "Заголовок Authorization",
    "placeholder": "Вставьте что-то вроде: Basic dXNlcjpwYXNz",
    "result": "Декодированный результат",
    "username": "Имя пользователя",
    "password": "Пароль",
    "invalid-header": "Недействительный заголовок Basic Authorization",
    "invalid-base64": "Недействительное содержимое Base64"
  },
  "pt": {
    "input": "Cabeçalho Authorization",
    "placeholder": "Cole algo como: Basic dXNlcjpwYXNz",
    "result": "Resultado Decodificado",
    "username": "Nome de usuário",
    "password": "Senha",
    "invalid-header": "Cabeçalho Basic Authorization inválido",
    "invalid-base64": "Conteúdo Base64 inválido"
  },
  "ar": {
    "input": "ترويسة Authorization",
    "placeholder": "الصق شيئًا مثل: Basic dXNlcjpwYXNz",
    "result": "النتيجة المفككة",
    "username": "اسم المستخدم",
    "password": "كلمة المرور",
    "invalid-header": "ترويسة Basic Authorization غير صالحة",
    "invalid-base64": "محتوى Base64 غير صالح"
  },
  "hi": {
    "input": "Authorization हेडर",
    "placeholder": "ऐसा हेडर पेस्ट करें: Basic dXNlcjpwYXNz",
    "result": "डिकोड परिणाम",
    "username": "उपयोगकर्ता नाम",
    "password": "पासवर्ड",
    "invalid-header": "अमान्य Basic Authorization हेडर",
    "invalid-base64": "अमान्य Base64 सामग्री"
  },
  "tr": {
    "input": "Authorization Başlığı",
    "placeholder": "Şunun gibi yapıştırın: Basic dXNlcjpwYXNz",
    "result": "Çözümlenmiş Sonuç",
    "username": "Kullanıcı Adı",
    "password": "Parola",
    "invalid-header": "Geçersiz Basic Authorization başlığı",
    "invalid-base64": "Geçersiz Base64 içeriği"
  },
  "nl": {
    "input": "Authorization-header",
    "placeholder": "Plak iets als: Basic dXNlcjpwYXNz",
    "result": "Gedecodeerd Resultaat",
    "username": "Gebruikersnaam",
    "password": "Wachtwoord",
    "invalid-header": "Ongeldige Basic Authorization-header",
    "invalid-base64": "Ongeldige Base64-inhoud"
  },
  "sv": {
    "input": "Authorization-rubrik",
    "placeholder": "Klistra in något som: Basic dXNlcjpwYXNz",
    "result": "Avkodat Resultat",
    "username": "Användarnamn",
    "password": "Lösenord",
    "invalid-header": "Ogiltig Basic Authorization-rubrik",
    "invalid-base64": "Ogiltigt Base64-innehåll"
  },
  "pl": {
    "input": "Nagłówek Authorization",
    "placeholder": "Wklej coś w rodzaju: Basic dXNlcjpwYXNz",
    "result": "Zdekodowany wynik",
    "username": "Nazwa użytkownika",
    "password": "Hasło",
    "invalid-header": "Nieprawidłowy nagłówek Basic Authorization",
    "invalid-base64": "Nieprawidłowa zawartość Base64"
  },
  "vi": {
    "input": "Tiêu đề Authorization",
    "placeholder": "Dán thứ gì đó như: Basic dXNlcjpwYXNz",
    "result": "Kết quả giải mã",
    "username": "Tên người dùng",
    "password": "Mật khẩu",
    "invalid-header": "Tiêu đề Basic Authorization không hợp lệ",
    "invalid-base64": "Nội dung Base64 không hợp lệ"
  },
  "th": {
    "input": "ส่วนหัว Authorization",
    "placeholder": "วางข้อความเช่น: Basic dXNlcjpwYXNz",
    "result": "ผลลัพธ์ที่ถอดรหัส",
    "username": "ชื่อผู้ใช้",
    "password": "รหัสผ่าน",
    "invalid-header": "ส่วนหัว Basic Authorization ไม่ถูกต้อง",
    "invalid-base64": "เนื้อหา Base64 ไม่ถูกต้อง"
  },
  "id": {
    "input": "Header Authorization",
    "placeholder": "Tempelkan sesuatu seperti: Basic dXNlcjpwYXNz",
    "result": "Hasil Decode",
    "username": "Nama pengguna",
    "password": "Kata sandi",
    "invalid-header": "Header Basic Authorization tidak valid",
    "invalid-base64": "Konten Base64 tidak valid"
  },
  "he": {
    "input": "כותרת Authorization",
    "placeholder": "הדבק משהו כמו: Basic dXNlcjpwYXNz",
    "result": "תוצאה מפוענחת",
    "username": "שם משתמש",
    "password": "סיסמה",
    "invalid-header": "כותרת Basic Authorization שגויה",
    "invalid-base64": "תוכן Base64 שגוי"
  },
  "ms": {
    "input": "Pengepala Authorization",
    "placeholder": "Tampal sesuatu seperti: Basic dXNlcjpwYXNz",
    "result": "Keputusan Dinyahkod",
    "username": "Nama pengguna",
    "password": "Kata laluan",
    "invalid-header": "Pengepala Basic Authorization tidak sah",
    "invalid-base64": "Kandungan Base64 tidak sah"
  },
  "no": {
    "input": "Authorization-header",
    "placeholder": "Lim inn noe som: Basic dXNlcjpwYXNz",
    "result": "Dekodert resultat",
    "username": "Brukernavn",
    "password": "Passord",
    "invalid-header": "Ugyldig Basic Authorization-header",
    "invalid-base64": "Ugyldig Base64-innhold"
  }
}
</i18n>
