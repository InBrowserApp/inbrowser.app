<template>
  <n-grid :x-gap="12" :y-gap="12" cols="1 s:2 m:3 l:5" responsive="screen">
    <!-- Protocol -->
    <n-grid-item>
      <n-form-item :label="t('protocol')">
        <n-input v-model:value="protocol" :placeholder="t('protocol-placeholder')" />
      </n-form-item>
    </n-grid-item>

    <!-- Username -->
    <n-grid-item>
      <n-form-item :label="t('username')">
        <n-input v-model:value="username" :placeholder="t('username-placeholder')" />
      </n-form-item>
    </n-grid-item>

    <!-- Password -->
    <n-grid-item>
      <n-form-item :label="t('password')">
        <n-input v-model:value="password" :placeholder="t('password-placeholder')" />
      </n-form-item>
    </n-grid-item>

    <!-- Hostname -->
    <n-grid-item>
      <n-form-item :label="t('hostname')">
        <n-input v-model:value="hostname" :placeholder="t('hostname-placeholder')" />
      </n-form-item>
    </n-grid-item>

    <!-- Port -->
    <n-grid-item>
      <n-form-item :label="t('port')">
        <n-input-number
          v-model:value="portNumber"
          :placeholder="t('port-placeholder')"
          :min="1"
          :max="65535"
          style="width: 100%"
        />
      </n-form-item>
    </n-grid-item>

    <!-- Path -->
    <n-grid-item span="1 s:2 m:3 l:5">
      <n-form-item :label="t('path')">
        <n-input v-model:value="path" :placeholder="t('path-placeholder')" />
      </n-form-item>
    </n-grid-item>

    <!-- TODO: use QueryParamsEditor -->
    <!-- Search -->
    <n-grid-item span="1 s:2 m:3 l:4">
      <n-form-item :label="t('query-params')">
        <n-input v-model:value="queryString" :placeholder="t('query-params-placeholder')" />
      </n-form-item>
    </n-grid-item>

    <!-- Hash -->
    <n-grid-item span="1 s:2 m:3 l:4">
      <n-form-item :label="t('hash')">
        <n-input v-model:value="hash" :placeholder="t('hash-placeholder')" />
      </n-form-item>
    </n-grid-item>
  </n-grid>
</template>

<script lang="ts" setup>
import { ref, watch, computed } from 'vue'
import { NInput, NInputNumber, NFormItem, NGrid, NGridItem } from 'naive-ui'
import { useI18n } from 'vue-i18n'
import { toRef } from 'vue'
import { syncRef } from '@vueuse/core'

const { t } = useI18n()
const props = defineProps<{
  url: string
}>()
const url = toRef(props, 'url')
const urlObject = computed<URL>(() => {
  try {
    return new URL(url.value)
  } catch {
    return new URL('')
  }
})

const emit = defineEmits<{
  (e: 'update:url', value: string): void
}>()

const protocol = ref(urlObject.value.protocol.replace(':', ''))
const username = ref(urlObject.value.username)
const password = ref(urlObject.value.password)
const hostname = ref(urlObject.value.hostname)
const port = ref(urlObject.value.port)
const portNumber = ref(port.value ? parseInt(port.value) : null)

syncRef(port, portNumber, {
  transform: {
    ltr: (left) => (left ? parseInt(left) : null),
    rtl: (right) => (right ? right.toString() : ''),
  },
})

const path = ref(decodeURIComponent(urlObject.value.pathname))
const hash = ref(decodeURIComponent(urlObject.value.hash))
const queryString = ref(decodeURIComponent(urlObject.value.search))

watch(urlObject, (newURL) => {
  protocol.value = newURL.protocol
  username.value = newURL.username
  password.value = newURL.password
  hostname.value = newURL.hostname
  port.value = newURL.port
  path.value = decodeURIComponent(newURL.pathname)
  hash.value = decodeURIComponent(newURL.hash)
  queryString.value = decodeURIComponent(newURL.search)
})

watch(protocol, (newProtocol) => {
  const newURL = new URL(url.value)
  newURL.protocol = newProtocol
  emit('update:url', newURL.toString())
})
watch(username, (newUsername) => {
  const newURL = new URL(url.value)
  newURL.username = newUsername
  emit('update:url', newURL.toString())
})
watch(password, (newPassword) => {
  const newURL = new URL(url.value)
  newURL.password = newPassword
  emit('update:url', newURL.toString())
})
watch(hostname, (newHostname) => {
  const newURL = new URL(url.value)
  newURL.hostname = newHostname
  emit('update:url', newURL.toString())
})
watch(port, (newPort) => {
  const newURL = new URL(url.value)
  newURL.port = newPort
  emit('update:url', newURL.toString())
})
watch(path, (newPath) => {
  const newURL = new URL(url.value)
  newURL.pathname = newPath
  emit('update:url', newURL.toString())
})
watch(hash, (newHash) => {
  const newURL = new URL(url.value)
  newURL.hash = newHash
  emit('update:url', newURL.toString())
})
watch(queryString, (newQueryString) => {
  const newURL = new URL(url.value)
  newURL.search = newQueryString
  emit('update:url', newURL.toString())
})
</script>

<i18n lang="json">
{
  "en": {
    "protocol": "Protocol",
    "protocol-placeholder": "https, http, ftp, etc.",
    "username": "Username",
    "username-placeholder": "Optional username",
    "password": "Password",
    "password-placeholder": "Optional password",
    "hostname": "Hostname",
    "hostname-placeholder": "example.com, 192.168.1.1, etc.",
    "port": "Port",
    "port-placeholder": "80, 443, 8080, etc.",
    "path": "Path",
    "path-placeholder": "/path/to/resource",
    "query-params": "Query Parameters",
    "query-params-placeholder": "param1=value1&param2=value2",
    "hash": "Hash/Fragment",
    "hash-placeholder": "section1, anchor, etc."
  },
  "zh": {
    "protocol": "协议",
    "protocol-placeholder": "https, http, ftp 等",
    "username": "用户名",
    "username-placeholder": "可选用户名",
    "password": "密码",
    "password-placeholder": "可选密码",
    "hostname": "主机名",
    "hostname-placeholder": "example.com, 192.168.1.1 等",
    "port": "端口",
    "port-placeholder": "80, 443, 8080 等",
    "path": "路径",
    "path-placeholder": "/path/to/resource",
    "query-params": "查询参数",
    "query-params-placeholder": "param1=value1&param2=value2",
    "hash": "哈希/片段",
    "hash-placeholder": "section1, anchor 等"
  },
  "zh-CN": {
    "protocol": "协议",
    "protocol-placeholder": "https, http, ftp 等",
    "username": "用户名",
    "username-placeholder": "可选用户名",
    "password": "密码",
    "password-placeholder": "可选密码",
    "hostname": "主机名",
    "hostname-placeholder": "example.com, 192.168.1.1 等",
    "port": "端口",
    "port-placeholder": "80, 443, 8080 等",
    "path": "路径",
    "path-placeholder": "/path/to/resource",
    "query-params": "查询参数",
    "query-params-placeholder": "param1=value1&param2=value2",
    "hash": "哈希/片段",
    "hash-placeholder": "section1, anchor 等"
  },
  "zh-TW": {
    "protocol": "協定",
    "protocol-placeholder": "https, http, ftp 等",
    "username": "使用者名稱",
    "username-placeholder": "可選使用者名稱",
    "password": "密碼",
    "password-placeholder": "可選密碼",
    "hostname": "主機名稱",
    "hostname-placeholder": "example.com, 192.168.1.1 等",
    "port": "連接埠",
    "port-placeholder": "80, 443, 8080 等",
    "path": "路徑",
    "path-placeholder": "/path/to/resource",
    "query-params": "查詢參數",
    "query-params-placeholder": "param1=value1&param2=value2",
    "hash": "雜湊/片段",
    "hash-placeholder": "section1, anchor 等"
  },
  "zh-HK": {
    "protocol": "協定",
    "protocol-placeholder": "https, http, ftp 等",
    "username": "使用者名稱",
    "username-placeholder": "可選使用者名稱",
    "password": "密碼",
    "password-placeholder": "可選密碼",
    "hostname": "主機名稱",
    "hostname-placeholder": "example.com, 192.168.1.1 等",
    "port": "連接埠",
    "port-placeholder": "80, 443, 8080 等",
    "path": "路徑",
    "path-placeholder": "/path/to/resource",
    "query-params": "查詢參數",
    "query-params-placeholder": "param1=value1&param2=value2",
    "hash": "雜湊/片段",
    "hash-placeholder": "section1, anchor 等"
  },
  "es": {
    "protocol": "Protocolo",
    "protocol-placeholder": "https, http, ftp, etc.",
    "username": "Nombre de usuario",
    "username-placeholder": "Nombre de usuario opcional",
    "password": "Contraseña",
    "password-placeholder": "Contraseña opcional",
    "hostname": "Nombre del host",
    "hostname-placeholder": "example.com, 192.168.1.1, etc.",
    "port": "Puerto",
    "port-placeholder": "80, 443, 8080, etc.",
    "path": "Ruta",
    "path-placeholder": "/ruta/al/recurso",
    "query-params": "Parámetros de consulta",
    "query-params-placeholder": "param1=valor1&param2=valor2",
    "hash": "Hash/Fragmento",
    "hash-placeholder": "seccion1, anchor, etc."
  },
  "fr": {
    "protocol": "Protocole",
    "protocol-placeholder": "https, http, ftp, etc.",
    "username": "Nom d'utilisateur",
    "username-placeholder": "Nom d'utilisateur optionnel",
    "password": "Mot de passe",
    "password-placeholder": "Mot de passe optionnel",
    "hostname": "Nom d'hôte",
    "hostname-placeholder": "example.com, 192.168.1.1, etc.",
    "port": "Port",
    "port-placeholder": "80, 443, 8080, etc.",
    "path": "Chemin",
    "path-placeholder": "/chemin/vers/ressource",
    "query-params": "Paramètres de requête",
    "query-params-placeholder": "param1=valeur1&param2=valeur2",
    "hash": "Hash/Fragment",
    "hash-placeholder": "section1, anchor, etc."
  },
  "de": {
    "protocol": "Protokoll",
    "protocol-placeholder": "https, http, ftp, etc.",
    "username": "Benutzername",
    "username-placeholder": "Optionaler Benutzername",
    "password": "Passwort",
    "password-placeholder": "Optionales Passwort",
    "hostname": "Hostname",
    "hostname-placeholder": "example.com, 192.168.1.1, etc.",
    "port": "Port",
    "port-placeholder": "80, 443, 8080, etc.",
    "path": "Pfad",
    "path-placeholder": "/pfad/zur/ressource",
    "query-params": "Abfrageparameter",
    "query-params-placeholder": "param1=wert1&param2=wert2",
    "hash": "Hash/Fragment",
    "hash-placeholder": "sektion1, anchor, etc."
  },
  "it": {
    "protocol": "Protocollo",
    "protocol-placeholder": "https, http, ftp, etc.",
    "username": "Nome utente",
    "username-placeholder": "Nome utente opzionale",
    "password": "Password",
    "password-placeholder": "Password opzionale",
    "hostname": "Nome host",
    "hostname-placeholder": "example.com, 192.168.1.1, etc.",
    "port": "Porta",
    "port-placeholder": "80, 443, 8080, etc.",
    "path": "Percorso",
    "path-placeholder": "/percorso/alla/risorsa",
    "query-params": "Parametri di query",
    "query-params-placeholder": "param1=valore1&param2=valore2",
    "hash": "Hash/Frammento",
    "hash-placeholder": "sezione1, anchor, etc."
  },
  "ja": {
    "protocol": "プロトコル",
    "protocol-placeholder": "https, http, ftp など",
    "username": "ユーザー名",
    "username-placeholder": "オプションのユーザー名",
    "password": "パスワード",
    "password-placeholder": "オプションのパスワード",
    "hostname": "ホスト名",
    "hostname-placeholder": "example.com, 192.168.1.1 など",
    "port": "ポート",
    "port-placeholder": "80, 443, 8080 など",
    "path": "パス",
    "path-placeholder": "/path/to/resource",
    "query-params": "クエリパラメータ",
    "query-params-placeholder": "param1=value1&param2=value2",
    "hash": "ハッシュ/フラグメント",
    "hash-placeholder": "section1, anchor など"
  },
  "ko": {
    "protocol": "프로토콜",
    "protocol-placeholder": "https, http, ftp 등",
    "username": "사용자명",
    "username-placeholder": "선택적 사용자명",
    "password": "비밀번호",
    "password-placeholder": "선택적 비밀번호",
    "hostname": "호스트명",
    "hostname-placeholder": "example.com, 192.168.1.1 등",
    "port": "포트",
    "port-placeholder": "80, 443, 8080 등",
    "path": "경로",
    "path-placeholder": "/path/to/resource",
    "query-params": "쿼리 매개변수",
    "query-params-placeholder": "param1=value1&param2=value2",
    "hash": "해시/프래그먼트",
    "hash-placeholder": "section1, anchor 등"
  },
  "ru": {
    "protocol": "Протокол",
    "protocol-placeholder": "https, http, ftp и т.д.",
    "username": "Имя пользователя",
    "username-placeholder": "Необязательное имя пользователя",
    "password": "Пароль",
    "password-placeholder": "Необязательный пароль",
    "hostname": "Имя хоста",
    "hostname-placeholder": "example.com, 192.168.1.1 и т.д.",
    "port": "Порт",
    "port-placeholder": "80, 443, 8080 и т.д.",
    "path": "Путь",
    "path-placeholder": "/путь/к/ресурсу",
    "query-params": "Параметры запроса",
    "query-params-placeholder": "param1=значение1&param2=значение2",
    "hash": "Хеш/Фрагмент",
    "hash-placeholder": "раздел1, якорь и т.д."
  },
  "pt": {
    "protocol": "Protocolo",
    "protocol-placeholder": "https, http, ftp, etc.",
    "username": "Nome de usuário",
    "username-placeholder": "Nome de usuário opcional",
    "password": "Senha",
    "password-placeholder": "Senha opcional",
    "hostname": "Nome do host",
    "hostname-placeholder": "example.com, 192.168.1.1, etc.",
    "port": "Porta",
    "port-placeholder": "80, 443, 8080, etc.",
    "path": "Caminho",
    "path-placeholder": "/caminho/para/recurso",
    "query-params": "Parâmetros de consulta",
    "query-params-placeholder": "param1=valor1&param2=valor2",
    "hash": "Hash/Fragmento",
    "hash-placeholder": "secao1, anchor, etc."
  },
  "ar": {
    "protocol": "البروتوكول",
    "protocol-placeholder": "https, http, ftp إلخ",
    "username": "اسم المستخدم",
    "username-placeholder": "اسم مستخدم اختياري",
    "password": "كلمة المرور",
    "password-placeholder": "كلمة مرور اختيارية",
    "hostname": "اسم المضيف",
    "hostname-placeholder": "example.com, 192.168.1.1 إلخ",
    "port": "المنفذ",
    "port-placeholder": "80, 443, 8080 إلخ",
    "path": "المسار",
    "path-placeholder": "/مسار/إلى/المورد",
    "query-params": "معاملات الاستعلام",
    "query-params-placeholder": "param1=value1&param2=value2",
    "hash": "التجزئة/الجزء",
    "hash-placeholder": "قسم1، مرساة إلخ"
  },
  "hi": {
    "protocol": "प्रोटोकॉल",
    "protocol-placeholder": "https, http, ftp आदि",
    "username": "उपयोगकर्ता नाम",
    "username-placeholder": "वैकल्पिक उपयोगकर्ता नाम",
    "password": "पासवर्ड",
    "password-placeholder": "वैकल्पिक पासवर्ड",
    "hostname": "होस्टनाम",
    "hostname-placeholder": "example.com, 192.168.1.1 आदि",
    "port": "पोर्ट",
    "port-placeholder": "80, 443, 8080 आदि",
    "path": "पथ",
    "path-placeholder": "/संसाधन/का/पथ",
    "query-params": "क्वेरी पैरामीटर",
    "query-params-placeholder": "param1=value1&param2=value2",
    "hash": "हैश/खंड",
    "hash-placeholder": "अनुभाग1, एंकर आदि"
  },
  "tr": {
    "protocol": "Protokol",
    "protocol-placeholder": "https, http, ftp vb.",
    "username": "Kullanıcı adı",
    "username-placeholder": "İsteğe bağlı kullanıcı adı",
    "password": "Şifre",
    "password-placeholder": "İsteğe bağlı şifre",
    "hostname": "Ana bilgisayar adı",
    "hostname-placeholder": "example.com, 192.168.1.1 vb.",
    "port": "Port",
    "port-placeholder": "80, 443, 8080 vb.",
    "path": "Yol",
    "path-placeholder": "/kaynak/yolu",
    "query-params": "Sorgu parametreleri",
    "query-params-placeholder": "param1=değer1&param2=değer2",
    "hash": "Hash/Parça",
    "hash-placeholder": "bölüm1, çapa vb."
  },
  "nl": {
    "protocol": "Protocol",
    "protocol-placeholder": "https, http, ftp, enz.",
    "username": "Gebruikersnaam",
    "username-placeholder": "Optionele gebruikersnaam",
    "password": "Wachtwoord",
    "password-placeholder": "Optioneel wachtwoord",
    "hostname": "Hostnaam",
    "hostname-placeholder": "example.com, 192.168.1.1, enz.",
    "port": "Poort",
    "port-placeholder": "80, 443, 8080, enz.",
    "path": "Pad",
    "path-placeholder": "/pad/naar/bron",
    "query-params": "Query-parameters",
    "query-params-placeholder": "param1=waarde1&param2=waarde2",
    "hash": "Hash/Fragment",
    "hash-placeholder": "sectie1, anker, enz."
  },
  "sv": {
    "protocol": "Protokoll",
    "protocol-placeholder": "https, http, ftp, etc.",
    "username": "Användarnamn",
    "username-placeholder": "Valfritt användarnamn",
    "password": "Lösenord",
    "password-placeholder": "Valfritt lösenord",
    "hostname": "Värdnamn",
    "hostname-placeholder": "example.com, 192.168.1.1, etc.",
    "port": "Port",
    "port-placeholder": "80, 443, 8080, etc.",
    "path": "Sökväg",
    "path-placeholder": "/sökväg/till/resurs",
    "query-params": "Frågeparametrar",
    "query-params-placeholder": "param1=värde1&param2=värde2",
    "hash": "Hash/Fragment",
    "hash-placeholder": "avsnitt1, ankare, etc."
  },
  "pl": {
    "protocol": "Protokół",
    "protocol-placeholder": "https, http, ftp itp.",
    "username": "Nazwa użytkownika",
    "username-placeholder": "Opcjonalna nazwa użytkownika",
    "password": "Hasło",
    "password-placeholder": "Opcjonalne hasło",
    "hostname": "Nazwa hosta",
    "hostname-placeholder": "example.com, 192.168.1.1 itp.",
    "port": "Port",
    "port-placeholder": "80, 443, 8080 itp.",
    "path": "Ścieżka",
    "path-placeholder": "/ścieżka/do/zasobu",
    "query-params": "Parametry zapytania",
    "query-params-placeholder": "param1=wartość1&param2=wartość2",
    "hash": "Hash/Fragment",
    "hash-placeholder": "sekcja1, kotwica itp."
  },
  "vi": {
    "protocol": "Giao thức",
    "protocol-placeholder": "https, http, ftp, v.v.",
    "username": "Tên người dùng",
    "username-placeholder": "Tên người dùng tùy chọn",
    "password": "Mật khẩu",
    "password-placeholder": "Mật khẩu tùy chọn",
    "hostname": "Tên máy chủ",
    "hostname-placeholder": "example.com, 192.168.1.1, v.v.",
    "port": "Cổng",
    "port-placeholder": "80, 443, 8080, v.v.",
    "path": "Đường dẫn",
    "path-placeholder": "/đường/dẫn/tới/tài/nguyên",
    "query-params": "Tham số truy vấn",
    "query-params-placeholder": "param1=giá_trị1&param2=giá_trị2",
    "hash": "Hash/Phân đoạn",
    "hash-placeholder": "phần1, neo, v.v."
  },
  "th": {
    "protocol": "โปรโตคอล",
    "protocol-placeholder": "https, http, ftp ฯลฯ",
    "username": "ชื่อผู้ใช้",
    "username-placeholder": "ชื่อผู้ใช้เสริม",
    "password": "รหัสผ่าน",
    "password-placeholder": "รหัสผ่านเสริม",
    "hostname": "ชื่อโฮสต์",
    "hostname-placeholder": "example.com, 192.168.1.1 ฯลฯ",
    "port": "พอร์ต",
    "port-placeholder": "80, 443, 8080 ฯลฯ",
    "path": "เส้นทาง",
    "path-placeholder": "/เส้นทาง/ไปยัง/ทรัพยากร",
    "query-params": "พารามิเตอร์คิวรี",
    "query-params-placeholder": "param1=value1&param2=value2",
    "hash": "แฮช/ส่วนย่อย",
    "hash-placeholder": "ส่วน1, สมอ ฯลฯ"
  },
  "id": {
    "protocol": "Protokol",
    "protocol-placeholder": "https, http, ftp, dll.",
    "username": "Nama pengguna",
    "username-placeholder": "Nama pengguna opsional",
    "password": "Kata sandi",
    "password-placeholder": "Kata sandi opsional",
    "hostname": "Nama host",
    "hostname-placeholder": "example.com, 192.168.1.1, dll.",
    "port": "Port",
    "port-placeholder": "80, 443, 8080, dll.",
    "path": "Jalur",
    "path-placeholder": "/jalur/ke/sumber",
    "query-params": "Parameter kueri",
    "query-params-placeholder": "param1=nilai1&param2=nilai2",
    "hash": "Hash/Fragmen",
    "hash-placeholder": "bagian1, jangkar, dll."
  },
  "he": {
    "protocol": "פרוטוקול",
    "protocol-placeholder": "https, http, ftp וכו'",
    "username": "שם משתמש",
    "username-placeholder": "שם משתמש אופציונלי",
    "password": "סיסמה",
    "password-placeholder": "סיסמה אופציונלית",
    "hostname": "שם מארח",
    "hostname-placeholder": "example.com, 192.168.1.1 וכו'",
    "port": "יציאה",
    "port-placeholder": "80, 443, 8080 וכו'",
    "path": "נתיב",
    "path-placeholder": "/נתיב/למשאב",
    "query-params": "פרמטרי שאילתה",
    "query-params-placeholder": "param1=value1&param2=value2",
    "hash": "Hash/קטע",
    "hash-placeholder": "קטע1, עוגן וכו'"
  },
  "ms": {
    "protocol": "Protokol",
    "protocol-placeholder": "https, http, ftp, dll.",
    "username": "Nama pengguna",
    "username-placeholder": "Nama pengguna pilihan",
    "password": "Kata laluan",
    "password-placeholder": "Kata laluan pilihan",
    "hostname": "Nama hos",
    "hostname-placeholder": "example.com, 192.168.1.1, dll.",
    "port": "Port",
    "port-placeholder": "80, 443, 8080, dll.",
    "path": "Laluan",
    "path-placeholder": "/laluan/ke/sumber",
    "query-params": "Parameter pertanyaan",
    "query-params-placeholder": "param1=nilai1&param2=nilai2",
    "hash": "Hash/Serpihan",
    "hash-placeholder": "bahagian1, sauh, dll."
  },
  "no": {
    "protocol": "Protokoll",
    "protocol-placeholder": "https, http, ftp, etc.",
    "username": "Brukernavn",
    "username-placeholder": "Valgfritt brukernavn",
    "password": "Passord",
    "password-placeholder": "Valgfritt passord",
    "hostname": "Vertsnavn",
    "hostname-placeholder": "example.com, 192.168.1.1, etc.",
    "port": "Port",
    "port-placeholder": "80, 443, 8080, etc.",
    "path": "Sti",
    "path-placeholder": "/sti/til/ressurs",
    "query-params": "Spørringsparametere",
    "query-params-placeholder": "param1=verdi1&param2=verdi2",
    "hash": "Hash/Fragment",
    "hash-placeholder": "seksjon1, anker, etc."
  }
}
</i18n>
