<template>
  <ToolSection>
    <n-flex align="center" justify="space-between">
      <n-flex align="center">
        <n-button @click="importFromFile" text>
          <template #icon>
            <n-icon :component="Document16Regular" />
          </template>
          {{ t('import-from-file') }}
        </n-button>

        <n-button @click="showSettings = !showSettings" text>
          <template #icon>
            <n-icon :component="Settings16Regular" />
          </template>
          {{ t('opt-settings') }}
        </n-button>
      </n-flex>
      <n-flex>
        <CopyToClipboardButton :content="renderedJson" />
        <n-button @click="downloadJson" text>
          <template #icon>
            <n-icon :component="ArrowDownload16Regular" />
          </template>
          {{ t('download-json') }}
        </n-button>
      </n-flex>
    </n-flex>
  </ToolSection>

  <n-collapse-transition :show="showSettings">
    <n-form label-placement="left" :show-feedback="false">
      <n-grid cols="1 s:2 m:3 l:4" responsive="screen" :x-gap="20" :y-gap="16">
        <n-form-item-gi :label="t('opt-noheader')">
          <n-switch v-model:value="params.noheader" size="small" />
        </n-form-item-gi>

        <n-form-item-gi :label="t('opt-headers')">
          <n-input v-model:value="headersText" size="small" :placeholder="t('opt-headers-ph')" />
        </n-form-item-gi>

        <n-form-item-gi :label="t('opt-delimiter')">
          <n-input v-model:value="delimiter" size="small" placeholder="," />
        </n-form-item-gi>

        <n-form-item-gi :label="t('opt-quote')">
          <n-input v-model:value="quote" size="small" placeholder='"' />
        </n-form-item-gi>

        <n-form-item-gi :label="t('opt-trim')">
          <n-switch v-model:value="params.trim" size="small" />
        </n-form-item-gi>

        <n-form-item-gi :label="t('opt-checkType')">
          <n-switch v-model:value="params.checkType" size="small" />
        </n-form-item-gi>

        <n-form-item-gi :label="t('opt-ignoreEmpty')">
          <n-switch v-model:value="params.ignoreEmpty" size="small" />
        </n-form-item-gi>

        <n-form-item-gi :label="t('opt-flatKeys')">
          <n-switch v-model:value="params.flatKeys" size="small" />
        </n-form-item-gi>

        <n-form-item-gi :label="t('opt-maxRowLength')">
          <n-input-number
            v-model:value="params.maxRowLength"
            :min="0"
            :max="1048576"
            size="small"
            :placeholder="t('opt-maxRowLength')"
            style="width: 100%"
          />
        </n-form-item-gi>

        <n-form-item-gi :label="t('opt-checkColumn')">
          <n-switch v-model:value="params.checkColumn" size="small" />
        </n-form-item-gi>

        <n-form-item-gi :label="t('opt-includeColumns')">
          <n-input v-model:value="includeColumns" size="small" :placeholder="t('opt-regex-ph')" />
        </n-form-item-gi>

        <n-form-item-gi :label="t('opt-ignoreColumns')">
          <n-input v-model:value="ignoreColumns" size="small" :placeholder="t('opt-regex-ph')" />
        </n-form-item-gi>

        <n-form-item-gi :label="t('opt-spaces')">
          <n-input-number
            v-model:value="spaces"
            :min="0"
            :max="8"
            size="small"
            style="width: 100%"
          />
        </n-form-item-gi>
      </n-grid>
    </n-form>
  </n-collapse-transition>

  <ToolSection>
    <n-grid cols="1 s:2" responsive="screen" :x-gap="12" :y-gap="12">
      <n-form-item-gi :label="t('csv')" :show-feedback="false">
        <n-input
          v-model:value="csvText"
          type="textarea"
          autosize
          :placeholder="t('csv-placeholder')"
        />
      </n-form-item-gi>
      <n-form-item-gi :label="t('json')" :show-feedback="false">
        <n-card size="small">
          <n-code :code="renderedJson" language="json" :hljs="hljs" word-wrap></n-code>
        </n-card>
      </n-form-item-gi>
    </n-grid>
  </ToolSection>
</template>

<script setup lang="ts">
import { ref, reactive, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { ToolSection } from '@shared/ui/tool'
import csv from 'csvtojson'
import {
  NButton,
  NIcon,
  NCard,
  NFormItemGi,
  NGrid,
  NInput,
  NCode,
  NFlex,
  NSwitch,
  NInputNumber,
  NForm,
  NCollapseTransition,
} from 'naive-ui'
import { CopyToClipboardButton } from '@shared/ui/base'
import { ArrowDownload16Regular, Document16Regular, Settings16Regular } from '@shared/icons/fluent'
import hljs from 'highlight.js/lib/core'
import jsonLang from 'highlight.js/lib/languages/json'
import { fileOpen } from 'browser-fs-access'

hljs.registerLanguage('json', jsonLang)

const { t } = useI18n()

const csvText = ref<string>('a,b,c\n1,2,3\n4,5,6')
const renderedJson = ref<string>('[]')
const spaces = ref<number>(2)
const showSettings = ref<boolean>(false)

const params = reactive({
  noheader: false,
  trim: true,
  checkType: false,
  ignoreEmpty: false,
  flatKeys: false,
  maxRowLength: 0,
  checkColumn: false,
})

const headersText = ref<string>('')
const delimiter = ref<string>(',')
const quote = ref<string>('"')
const includeColumns = ref<string>('')
const ignoreColumns = ref<string>('')

async function convertNow(): Promise<void> {
  try {
    const parser: any = csv({
      noheader: params.noheader,
      trim: params.trim,
      checkType: params.checkType,
      ignoreEmpty: params.ignoreEmpty,
      flatKeys: params.flatKeys,
      maxRowLength: params.maxRowLength,
      checkColumn: params.checkColumn,
      delimiter: delimiter.value === 'auto' ? 'auto' : delimiter.value,
      quote: quote.value,
      includeColumns: includeColumns.value ? new RegExp(includeColumns.value) : undefined,
      ignoreColumns: ignoreColumns.value ? new RegExp(ignoreColumns.value) : undefined,
      headers: headersText.value
        ? headersText.value
            .split(',')
            .map((h) => h.trim())
            .filter(Boolean)
        : undefined,
    })
    const arr = await parser.fromString(csvText.value)
    renderedJson.value = JSON.stringify(arr, null, spaces.value)
  } catch (e) {
    renderedJson.value = '// ' + t('invalid-csv')
  }
}

watch(
  [
    csvText,
    () => ({ ...params }),
    delimiter,
    quote,
    headersText,
    includeColumns,
    ignoreColumns,
    spaces,
  ],
  () => {
    void convertNow()
  },
  { deep: true, immediate: true },
)

function downloadJson(): void {
  const blob = new Blob([renderedJson.value], { type: 'application/json;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = 'converted.json'
  document.body.appendChild(a)
  a.click()
  a.remove()
  URL.revokeObjectURL(url)
}

async function importFromFile(): Promise<void> {
  const file = await fileOpen({
    extensions: ['.csv', '.txt'],
  })
  csvText.value = await file.text()
}
</script>

<i18n lang="json">
{
  "en": {
    "csv": "CSV",
    "csv-placeholder": "Paste CSV here...",
    "json": "JSON",
    "download-json": "Download JSON",
    "import-from-file": "Import from file",
    "invalid-csv": "Invalid CSV",
    "opt-settings": "Settings",
    "opt-noheader": "No header row",
    "opt-headers": "Headers",
    "opt-headers-ph": "name,age,email",
    "opt-delimiter": "Delimiter",
    "opt-quote": "Quote",
    "opt-trim": "Trim",
    "opt-checkType": "Check types",
    "opt-ignoreEmpty": "Ignore empty",
    "opt-flatKeys": "Flat keys",
    "opt-maxRowLength": "Max row length",
    "opt-checkColumn": "Check column count",
    "opt-includeColumns": "Include columns (regex)",
    "opt-ignoreColumns": "Ignore columns (regex)",
    "opt-regex-ph": ".*name|age",
    "opt-spaces": "Spaces"
  },
  "zh": {
    "csv": "CSV",
    "csv-placeholder": "在此粘贴 CSV...",
    "json": "JSON",
    "download-json": "下载 JSON",
    "import-from-file": "从文件导入",
    "invalid-csv": "无效的 CSV",
    "opt-settings": "设置",
    "opt-noheader": "无表头",
    "opt-headers": "表头",
    "opt-headers-ph": "name,age,email",
    "opt-delimiter": "分隔符",
    "opt-quote": "引号",
    "opt-trim": "裁剪",
    "opt-checkType": "检查类型",
    "opt-ignoreEmpty": "忽略空值",
    "opt-flatKeys": "扁平键",
    "opt-maxRowLength": "最大行长",
    "opt-checkColumn": "校验列数",
    "opt-includeColumns": "包含列(正则)",
    "opt-ignoreColumns": "忽略列(正则)",
    "opt-regex-ph": ".*name|age",
    "opt-spaces": "缩进空格"
  },
  "zh-CN": {
    "csv": "CSV",
    "csv-placeholder": "在此粘贴 CSV...",
    "json": "JSON",
    "download-json": "下载 JSON",
    "import-from-file": "从文件导入",
    "invalid-csv": "无效的 CSV",
    "opt-settings": "设置",
    "opt-noheader": "无表头",
    "opt-headers": "表头",
    "opt-headers-ph": "name,age,email",
    "opt-delimiter": "分隔符",
    "opt-quote": "引号",
    "opt-trim": "裁剪",
    "opt-checkType": "检查类型",
    "opt-ignoreEmpty": "忽略空值",
    "opt-flatKeys": "扁平键",
    "opt-maxRowLength": "最大行长",
    "opt-checkColumn": "校验列数",
    "opt-includeColumns": "包含列(正则)",
    "opt-ignoreColumns": "忽略列(正则)",
    "opt-regex-ph": ".*name|age",
    "opt-spaces": "缩进空格"
  },
  "zh-TW": {
    "csv": "CSV",
    "csv-placeholder": "在此貼上 CSV...",
    "json": "JSON",
    "download-json": "下載 JSON",
    "import-from-file": "從檔案匯入",
    "invalid-csv": "無效的 CSV",
    "opt-settings": "設定",
    "opt-noheader": "無表頭",
    "opt-headers": "表頭",
    "opt-headers-ph": "name,age,email",
    "opt-delimiter": "分隔符號",
    "opt-quote": "引號",
    "opt-trim": "裁剪",
    "opt-checkType": "檢查型別",
    "opt-ignoreEmpty": "忽略空值",
    "opt-flatKeys": "扁平鍵",
    "opt-maxRowLength": "最大列長",
    "opt-checkColumn": "檢查欄位數",
    "opt-includeColumns": "包含欄(正則)",
    "opt-ignoreColumns": "忽略欄(正則)",
    "opt-regex-ph": ".*name|age",
    "opt-spaces": "縮排空格"
  },
  "zh-HK": {
    "csv": "CSV",
    "csv-placeholder": "在此貼上 CSV...",
    "json": "JSON",
    "download-json": "下載 JSON",
    "import-from-file": "從檔案匯入",
    "invalid-csv": "無效的 CSV",
    "opt-settings": "設定",
    "opt-noheader": "無表頭",
    "opt-headers": "表頭",
    "opt-headers-ph": "name,age,email",
    "opt-delimiter": "分隔符號",
    "opt-quote": "引號",
    "opt-trim": "裁剪",
    "opt-checkType": "檢查類型",
    "opt-ignoreEmpty": "忽略空值",
    "opt-flatKeys": "扁平鍵",
    "opt-maxRowLength": "最大列長",
    "opt-checkColumn": "檢查欄位數",
    "opt-includeColumns": "包含欄(正則)",
    "opt-ignoreColumns": "忽略欄(正則)",
    "opt-regex-ph": ".*name|age",
    "opt-spaces": "縮排空格"
  },
  "es": {
    "csv": "CSV",
    "csv-placeholder": "Pega CSV aquí...",
    "json": "JSON",
    "download-json": "Descargar JSON",
    "import-from-file": "Importar desde archivo",
    "invalid-csv": "CSV no válido",
    "opt-settings": "Configuración",
    "opt-noheader": "Sin encabezado",
    "opt-headers": "Encabezados",
    "opt-headers-ph": "name,age,email",
    "opt-delimiter": "Delimitador",
    "opt-quote": "Comillas",
    "opt-trim": "Recortar",
    "opt-checkType": "Verificar tipos",
    "opt-ignoreEmpty": "Ignorar vacíos",
    "opt-flatKeys": "Claves planas",
    "opt-maxRowLength": "Longitud máx. fila",
    "opt-checkColumn": "Verificar columnas",
    "opt-includeColumns": "Incluir columnas (regex)",
    "opt-ignoreColumns": "Ignorar columnas (regex)",
    "opt-regex-ph": ".*name|age",
    "opt-spaces": "Espacios"
  },
  "fr": {
    "csv": "CSV",
    "csv-placeholder": "Collez du CSV ici...",
    "json": "JSON",
    "download-json": "Télécharger le JSON",
    "import-from-file": "Importer depuis un fichier",
    "invalid-csv": "CSV invalide",
    "opt-settings": "Paramètres",
    "opt-noheader": "Sans en-tête",
    "opt-headers": "En-têtes",
    "opt-headers-ph": "name,age,email",
    "opt-delimiter": "Délimiteur",
    "opt-quote": "Guillemet",
    "opt-trim": "Rogner",
    "opt-checkType": "Vérifier les types",
    "opt-ignoreEmpty": "Ignorer les vides",
    "opt-flatKeys": "Clés plates",
    "opt-maxRowLength": "Longueur max. ligne",
    "opt-checkColumn": "Vérifier colonnes",
    "opt-includeColumns": "Inclure colonnes (regex)",
    "opt-ignoreColumns": "Ignorer colonnes (regex)",
    "opt-regex-ph": ".*name|age",
    "opt-spaces": "Espaces"
  },
  "de": {
    "csv": "CSV",
    "csv-placeholder": "CSV hier einfügen...",
    "json": "JSON",
    "download-json": "JSON herunterladen",
    "import-from-file": "Aus Datei importieren",
    "invalid-csv": "Ungültiges CSV",
    "opt-settings": "Einstellungen",
    "opt-noheader": "Keine Kopfzeile",
    "opt-headers": "Kopfzeilen",
    "opt-headers-ph": "name,age,email",
    "opt-delimiter": "Trennzeichen",
    "opt-quote": "Anführungszeichen",
    "opt-trim": "Trimmen",
    "opt-checkType": "Typen prüfen",
    "opt-ignoreEmpty": "Leere ignorieren",
    "opt-flatKeys": "Einfache Schlüssel",
    "opt-maxRowLength": "Max. Zeilenlänge",
    "opt-checkColumn": "Spalten prüfen",
    "opt-includeColumns": "Spalten einschl. (Regex)",
    "opt-ignoreColumns": "Spalten ausschl. (Regex)",
    "opt-regex-ph": ".*name|age",
    "opt-spaces": "Leerzeichen"
  },
  "it": {
    "csv": "CSV",
    "csv-placeholder": "Incolla CSV qui...",
    "json": "JSON",
    "download-json": "Scarica JSON",
    "import-from-file": "Importa da file",
    "invalid-csv": "CSV non valido",
    "opt-settings": "Impostazioni",
    "opt-noheader": "Senza intestazione",
    "opt-headers": "Intestazioni",
    "opt-headers-ph": "name,age,email",
    "opt-delimiter": "Delimitatore",
    "opt-quote": "Virgolette",
    "opt-trim": "Taglia",
    "opt-checkType": "Controlla tipi",
    "opt-ignoreEmpty": "Ignora vuoti",
    "opt-flatKeys": "Chiavi piatte",
    "opt-maxRowLength": "Lunghezza max riga",
    "opt-checkColumn": "Controlla colonne",
    "opt-includeColumns": "Includi colonne (regex)",
    "opt-ignoreColumns": "Ignora colonne (regex)",
    "opt-regex-ph": ".*name|age",
    "opt-spaces": "Spazi"
  },
  "ja": {
    "csv": "CSV",
    "csv-placeholder": "ここにCSVを貼り付け...",
    "json": "JSON",
    "download-json": "JSONをダウンロード",
    "import-from-file": "ファイルからインポート",
    "invalid-csv": "無効なCSV",
    "opt-settings": "設定",
    "opt-noheader": "ヘッダーなし",
    "opt-headers": "ヘッダー",
    "opt-headers-ph": "name,age,email",
    "opt-delimiter": "区切り",
    "opt-quote": "引用符",
    "opt-trim": "トリム",
    "opt-checkType": "型をチェック",
    "opt-ignoreEmpty": "空を無視",
    "opt-flatKeys": "フラットキー",
    "opt-maxRowLength": "最大行長",
    "opt-checkColumn": "列数をチェック",
    "opt-includeColumns": "含める列 (正規表現)",
    "opt-ignoreColumns": "無視する列 (正規表現)",
    "opt-regex-ph": ".*name|age",
    "opt-spaces": "スペース"
  },
  "ko": {
    "csv": "CSV",
    "csv-placeholder": "여기에 CSV 붙여넣기...",
    "json": "JSON",
    "download-json": "JSON 다운로드",
    "import-from-file": "파일에서 가져오기",
    "invalid-csv": "유효하지 않은 CSV",
    "opt-settings": "설정",
    "opt-noheader": "헤더 없음",
    "opt-headers": "헤더",
    "opt-headers-ph": "name,age,email",
    "opt-delimiter": "구분자",
    "opt-quote": "인용부호",
    "opt-trim": "트림",
    "opt-checkType": "타입 확인",
    "opt-ignoreEmpty": "빈 값 무시",
    "opt-flatKeys": "플랫 키",
    "opt-maxRowLength": "최대 행 길이",
    "opt-checkColumn": "열 수 확인",
    "opt-includeColumns": "포함 열 (정규식)",
    "opt-ignoreColumns": "무시 열 (정규식)",
    "opt-regex-ph": ".*name|age",
    "opt-spaces": "공백"
  },
  "ru": {
    "csv": "CSV",
    "csv-placeholder": "Вставьте CSV здесь...",
    "json": "JSON",
    "download-json": "Скачать JSON",
    "import-from-file": "Импорт из файла",
    "invalid-csv": "Недопустимый CSV",
    "opt-settings": "Настройки",
    "opt-noheader": "Без заголовка",
    "opt-headers": "Заголовки",
    "opt-headers-ph": "name,age,email",
    "opt-delimiter": "Разделитель",
    "opt-quote": "Кавычка",
    "opt-trim": "Обрезать",
    "opt-checkType": "Проверка типов",
    "opt-ignoreEmpty": "Игнорировать пустые",
    "opt-flatKeys": "Плоские ключи",
    "opt-maxRowLength": "Макс. длина строки",
    "opt-checkColumn": "Проверка столбцов",
    "opt-includeColumns": "Включать столбцы (regex)",
    "opt-ignoreColumns": "Игнорировать столбцы (regex)",
    "opt-regex-ph": ".*name|age",
    "opt-spaces": "Пробелы"
  },
  "pt": {
    "csv": "CSV",
    "csv-placeholder": "Cole CSV aqui...",
    "json": "JSON",
    "download-json": "Baixar JSON",
    "import-from-file": "Importar de arquivo",
    "invalid-csv": "CSV inválido",
    "opt-settings": "Configurações",
    "opt-noheader": "Sem cabeçalho",
    "opt-headers": "Cabeçalhos",
    "opt-headers-ph": "name,age,email",
    "opt-delimiter": "Delimitador",
    "opt-quote": "Aspas",
    "opt-trim": "Aparar",
    "opt-checkType": "Verificar tipos",
    "opt-ignoreEmpty": "Ignorar vazios",
    "opt-flatKeys": "Chaves planas",
    "opt-maxRowLength": "Tamanho máx. linha",
    "opt-checkColumn": "Verificar colunas",
    "opt-includeColumns": "Incluir colunas (regex)",
    "opt-ignoreColumns": "Ignorar colunas (regex)",
    "opt-regex-ph": ".*name|age",
    "opt-spaces": "Espaços"
  },
  "ar": {
    "csv": "CSV",
    "csv-placeholder": "الصق CSV هنا...",
    "json": "JSON",
    "download-json": "تنزيل JSON",
    "import-from-file": "استيراد من ملف",
    "invalid-csv": "CSV غير صالح",
    "opt-settings": "الإعدادات",
    "opt-noheader": "بدون ترويسة",
    "opt-headers": "الترويسات",
    "opt-headers-ph": "name,age,email",
    "opt-delimiter": "الفاصل",
    "opt-quote": "علامة الاقتباس",
    "opt-trim": "تشذيب",
    "opt-checkType": "تحقق من الأنواع",
    "opt-ignoreEmpty": "تجاهل الفارغ",
    "opt-flatKeys": "مفاتيح مسطحة",
    "opt-maxRowLength": "الطول الأقصى للصف",
    "opt-checkColumn": "تحقق من الأعمدة",
    "opt-includeColumns": "تضمين الأعمدة (regex)",
    "opt-ignoreColumns": "تجاهل الأعمدة (regex)",
    "opt-regex-ph": ".*name|age",
    "opt-spaces": "مسافات"
  },
  "hi": {
    "csv": "CSV",
    "csv-placeholder": "यहाँ CSV पेस्ट करें...",
    "json": "JSON",
    "download-json": "JSON डाउनलोड करें",
    "import-from-file": "फ़ाइल से आयात करें",
    "invalid-csv": "अमान्य CSV",
    "opt-settings": "सेटिंग्स",
    "opt-noheader": "हेडर नहीं",
    "opt-headers": "हेडर",
    "opt-headers-ph": "name,age,email",
    "opt-delimiter": "विभाजक",
    "opt-quote": "उद्धरण",
    "opt-trim": "ट्रिम",
    "opt-checkType": "टाइप जाँचें",
    "opt-ignoreEmpty": "खाली अनदेखा",
    "opt-flatKeys": "समतल कुंजियाँ",
    "opt-maxRowLength": "अधिकतम पंक्ति लंबाई",
    "opt-checkColumn": "स्तंभ जाँचें",
    "opt-includeColumns": "कॉलम शामिल (regex)",
    "opt-ignoreColumns": "कॉलम अनदेखा (regex)",
    "opt-regex-ph": ".*name|age",
    "opt-spaces": "स्पेसेज़"
  },
  "tr": {
    "csv": "CSV",
    "csv-placeholder": "Buraya CSV yapıştırın...",
    "json": "JSON",
    "download-json": "JSON İndir",
    "import-from-file": "Dosyadan içe aktar",
    "invalid-csv": "Geçersiz CSV",
    "opt-settings": "Ayarlar",
    "opt-noheader": "Başlıksız",
    "opt-headers": "Başlıklar",
    "opt-headers-ph": "name,age,email",
    "opt-delimiter": "Ayırıcı",
    "opt-quote": "Tırnak",
    "opt-trim": "Kırp",
    "opt-checkType": "Türleri kontrol et",
    "opt-ignoreEmpty": "Boşları yoksay",
    "opt-flatKeys": "Düz anahtarlar",
    "opt-maxRowLength": "Maks. satır uzunluğu",
    "opt-checkColumn": "Sütunları kontrol et",
    "opt-includeColumns": "Dahil sütunlar (regex)",
    "opt-ignoreColumns": "Yoksay sütunlar (regex)",
    "opt-regex-ph": ".*name|age",
    "opt-spaces": "Boşluk"
  },
  "nl": {
    "csv": "CSV",
    "csv-placeholder": "Plak hier CSV...",
    "json": "JSON",
    "download-json": "JSON downloaden",
    "import-from-file": "Importeren uit bestand",
    "invalid-csv": "Ongeldige CSV",
    "opt-settings": "Instellingen",
    "opt-noheader": "Geen kop",
    "opt-headers": "Koppen",
    "opt-headers-ph": "name,age,email",
    "opt-delimiter": "Scheidingsteken",
    "opt-quote": "Aanhalingsteken",
    "opt-trim": "Trimmen",
    "opt-checkType": "Typen controleren",
    "opt-ignoreEmpty": "Lege waarden negeren",
    "opt-flatKeys": "Platte sleutels",
    "opt-maxRowLength": "Max. rijlengte",
    "opt-checkColumn": "Kolommen controleren",
    "opt-includeColumns": "Kolommen opnemen (regex)",
    "opt-ignoreColumns": "Kolommen negeren (regex)",
    "opt-regex-ph": ".*name|age",
    "opt-spaces": "Spaties"
  },
  "sv": {
    "csv": "CSV",
    "csv-placeholder": "Klistra in CSV här...",
    "json": "JSON",
    "download-json": "Ladda ner JSON",
    "import-from-file": "Importera från fil",
    "invalid-csv": "Ogiltig CSV",
    "opt-settings": "Inställningar",
    "opt-noheader": "Ingen rubrik",
    "opt-headers": "Rubriker",
    "opt-headers-ph": "name,age,email",
    "opt-delimiter": "Avgränsare",
    "opt-quote": "Citattecken",
    "opt-trim": "Trimma",
    "opt-checkType": "Kontrollera typer",
    "opt-ignoreEmpty": "Ignorera tomma",
    "opt-flatKeys": "Platta nycklar",
    "opt-maxRowLength": "Max radlängd",
    "opt-checkColumn": "Kontrollera kolumner",
    "opt-includeColumns": "Inkludera kolumner (regex)",
    "opt-ignoreColumns": "Ignorera kolumner (regex)",
    "opt-regex-ph": ".*name|age",
    "opt-spaces": "Blanksteg"
  },
  "pl": {
    "csv": "CSV",
    "csv-placeholder": "Wklej tutaj CSV...",
    "json": "JSON",
    "download-json": "Pobierz JSON",
    "import-from-file": "Importuj z pliku",
    "invalid-csv": "Nieprawidłowy CSV",
    "opt-settings": "Ustawienia",
    "opt-noheader": "Brak nagłówka",
    "opt-headers": "Nagłówki",
    "opt-headers-ph": "name,age,email",
    "opt-delimiter": "Separator",
    "opt-quote": "Cudzysłów",
    "opt-trim": "Przytnij",
    "opt-checkType": "Sprawdzaj typy",
    "opt-ignoreEmpty": "Ignoruj puste",
    "opt-flatKeys": "Płaskie klucze",
    "opt-maxRowLength": "Maks. długość wiersza",
    "opt-checkColumn": "Sprawdzaj kolumny",
    "opt-includeColumns": "Uwzględnij kolumny (regex)",
    "opt-ignoreColumns": "Ignoruj kolumny (regex)",
    "opt-regex-ph": ".*name|age",
    "opt-spaces": "Spacje"
  },
  "vi": {
    "csv": "CSV",
    "csv-placeholder": "Dán CSV vào đây...",
    "json": "JSON",
    "download-json": "Tải JSON",
    "import-from-file": "Nhập từ tệp",
    "invalid-csv": "CSV không hợp lệ",
    "opt-settings": "Cài đặt",
    "opt-noheader": "Không có tiêu đề",
    "opt-headers": "Tiêu đề",
    "opt-headers-ph": "name,age,email",
    "opt-delimiter": "Dấu phân cách",
    "opt-quote": "Dấu ngoặc kép",
    "opt-trim": "Cắt gọn",
    "opt-checkType": "Kiểm tra kiểu",
    "opt-ignoreEmpty": "Bỏ qua rỗng",
    "opt-flatKeys": "Khóa phẳng",
    "opt-maxRowLength": "Độ dài dòng tối đa",
    "opt-checkColumn": "Kiểm tra cột",
    "opt-includeColumns": "Bao gồm cột (regex)",
    "opt-ignoreColumns": "Bỏ qua cột (regex)",
    "opt-regex-ph": ".*name|age",
    "opt-spaces": "Khoảng trắng"
  },
  "th": {
    "csv": "CSV",
    "csv-placeholder": "วาง CSV ที่นี่...",
    "json": "JSON",
    "download-json": "ดาวน์โหลด JSON",
    "import-from-file": "นำเข้าจากไฟล์",
    "invalid-csv": "CSV ไม่ถูกต้อง",
    "opt-settings": "การตั้งค่า",
    "opt-noheader": "ไม่มีส่วนหัว",
    "opt-headers": "ส่วนหัว",
    "opt-headers-ph": "name,age,email",
    "opt-delimiter": "ตัวคั่น",
    "opt-quote": "อัญประกาศ",
    "opt-trim": "ตัดแต่ง",
    "opt-checkType": "ตรวจสอบชนิด",
    "opt-ignoreEmpty": "ละเว้นค่าว่าง",
    "opt-flatKeys": "คีย์แบน",
    "opt-maxRowLength": "ความยาวแถวสูงสุด",
    "opt-checkColumn": "ตรวจสอบคอลัมน์",
    "opt-includeColumns": "รวมคอลัมน์ (regex)",
    "opt-ignoreColumns": "ละเว้นคอลัมน์ (regex)",
    "opt-regex-ph": ".*name|age",
    "opt-spaces": "ช่องว่าง"
  },
  "id": {
    "csv": "CSV",
    "csv-placeholder": "Tempel CSV di sini...",
    "json": "JSON",
    "download-json": "Unduh JSON",
    "import-from-file": "Impor dari file",
    "invalid-csv": "CSV tidak valid",
    "opt-settings": "Pengaturan",
    "opt-noheader": "Tanpa header",
    "opt-headers": "Header",
    "opt-headers-ph": "name,age,email",
    "opt-delimiter": "Pemisah",
    "opt-quote": "Tanda kutip",
    "opt-trim": "Pangkas",
    "opt-checkType": "Periksa tipe",
    "opt-ignoreEmpty": "Abaikan kosong",
    "opt-flatKeys": "Kunci datar",
    "opt-maxRowLength": "Panjang baris maks",
    "opt-checkColumn": "Periksa kolom",
    "opt-includeColumns": "Sertakan kolom (regex)",
    "opt-ignoreColumns": "Abaikan kolom (regex)",
    "opt-regex-ph": ".*name|age",
    "opt-spaces": "Spasi"
  },
  "he": {
    "csv": "CSV",
    "csv-placeholder": "הדביקו CSV כאן...",
    "json": "JSON",
    "download-json": "הורד JSON",
    "import-from-file": "יבוא מקובץ",
    "invalid-csv": "CSV לא תקין",
    "opt-settings": "הגדרות",
    "opt-noheader": "ללא כותרת",
    "opt-headers": "כותרות",
    "opt-headers-ph": "name,age,email",
    "opt-delimiter": "מפריד",
    "opt-quote": "גרשיים",
    "opt-trim": "חיתוך",
    "opt-checkType": "בדיקת סוגים",
    "opt-ignoreEmpty": "התעלם מריקים",
    "opt-flatKeys": "מפתחות שטוחים",
    "opt-maxRowLength": "אורך שורה מרבי",
    "opt-checkColumn": "בדיקת עמודות",
    "opt-includeColumns": "כלול עמודות (regex)",
    "opt-ignoreColumns": "התעלם מעמודות (regex)",
    "opt-regex-ph": ".*name|age",
    "opt-spaces": "רווחים"
  },
  "ms": {
    "csv": "CSV",
    "csv-placeholder": "Tampal CSV di sini...",
    "json": "JSON",
    "download-json": "Muat turun JSON",
    "import-from-file": "Import dari fail",
    "invalid-csv": "CSV tidak sah",
    "opt-settings": "Tetapan",
    "opt-noheader": "Tiada pengepala",
    "opt-headers": "Pengepala",
    "opt-headers-ph": "name,age,email",
    "opt-delimiter": "Pemisah",
    "opt-quote": "Petikan",
    "opt-trim": "Potong",
    "opt-checkType": "Periksa jenis",
    "opt-ignoreEmpty": "Abaikan kosong",
    "opt-flatKeys": "Kunci rata",
    "opt-maxRowLength": "Panjang baris maks",
    "opt-checkColumn": "Periksa lajur",
    "opt-includeColumns": "Sertakan lajur (regex)",
    "opt-ignoreColumns": "Abaikan lajur (regex)",
    "opt-regex-ph": ".*name|age",
    "opt-spaces": "Ruang"
  },
  "no": {
    "csv": "CSV",
    "csv-placeholder": "Lim inn CSV her...",
    "json": "JSON",
    "download-json": "Last ned JSON",
    "import-from-file": "Importer fra fil",
    "invalid-csv": "Ugyldig CSV",
    "opt-settings": "Innstillinger",
    "opt-noheader": "Ingen overskrift",
    "opt-headers": "Overskrifter",
    "opt-headers-ph": "name,age,email",
    "opt-delimiter": "Skilletegn",
    "opt-quote": "Anførselstegn",
    "opt-trim": "Trim",
    "opt-checkType": "Sjekk typer",
    "opt-ignoreEmpty": "Ignorer tomme",
    "opt-flatKeys": "Flate nøkler",
    "opt-maxRowLength": "Maks radlengde",
    "opt-checkColumn": "Sjekk kolonner",
    "opt-includeColumns": "Inkluder kolonner (regex)",
    "opt-ignoreColumns": "Ignorer kolonner (regex)",
    "opt-regex-ph": ".*name|age",
    "opt-spaces": "Mellomrom"
  }
}
</i18n>
