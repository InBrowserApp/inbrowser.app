<template>
  <n-grid cols="1 s:2 m:3" responsive="screen" :x-gap="20" :y-gap="20">
    <n-form-item-gi :label="t('text')" :show-feedback="false">
      <n-input v-model:value="text" :placeholder="t('text-ph')" />
    </n-form-item-gi>

    <n-form-item-gi :label="t('format')" :show-feedback="false">
      <n-select v-model:value="format" :options="formatOptions" />
    </n-form-item-gi>

    <n-form-item-gi :label="t('bar-width')" :show-feedback="false">
      <n-slider v-model:value="width" :min="1" :max="8" :step="1" />
    </n-form-item-gi>

    <n-form-item-gi :label="t('bar-height')" :show-feedback="false">
      <n-slider v-model:value="height" :min="20" :max="300" :step="2" />
    </n-form-item-gi>

    <n-form-item-gi :label="t('margin')" :show-feedback="false">
      <n-slider v-model:value="margin" :min="0" :max="30" :step="1" />
    </n-form-item-gi>

    <n-form-item-gi :label="t('display-value')" :show-feedback="false">
      <n-switch v-model:value="displayValue" />
    </n-form-item-gi>

    <n-form-item-gi :label="t('text-align')" :show-feedback="false">
      <n-select v-model:value="textAlign" :options="textAlignOptions" />
    </n-form-item-gi>

    <n-form-item-gi :label="t('text-position')" :show-feedback="false">
      <n-select v-model:value="textPosition" :options="textPositionOptions" />
    </n-form-item-gi>

    <n-form-item-gi :label="t('font-size')" :show-feedback="false">
      <n-slider v-model:value="fontSize" :min="8" :max="48" :step="1" />
    </n-form-item-gi>

    <n-form-item-gi :label="t('line-color')" :show-feedback="false">
      <n-color-picker v-model:value="lineColor" :modes="['hex']" size="small" />
    </n-form-item-gi>

    <n-form-item-gi :label="t('background')" :show-feedback="false">
      <n-color-picker v-model:value="background" :modes="['hex']" size="small" />
    </n-form-item-gi>
  </n-grid>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { NGrid, NFormItemGi, NInput, NSelect, NSlider, NSwitch, NColorPicker } from 'naive-ui'

const text = defineModel<string>('text', { required: true })
const format = defineModel<string>('format', { required: true })
const width = defineModel<number>('width', { required: true })
const height = defineModel<number>('height', { required: true })
const margin = defineModel<number>('margin', { required: true })
const displayValue = defineModel<boolean>('display-value', { required: true })
const textAlign = defineModel<'left' | 'center' | 'right'>('text-align', { required: true })
const textPosition = defineModel<'top' | 'bottom'>('text-position', { required: true })
const fontSize = defineModel<number>('font-size', { required: true })
const lineColor = defineModel<string>('line-color', { required: true })
const background = defineModel<string>('background', { required: true })

const { t } = useI18n()

const formatOptions = computed(() => [
  { label: 'CODE128', value: 'CODE128' },
  { label: 'CODE128A', value: 'CODE128A' },
  { label: 'CODE128B', value: 'CODE128B' },
  { label: 'CODE128C', value: 'CODE128C' },
  { label: 'EAN13', value: 'EAN13' },
  { label: 'EAN8', value: 'EAN8' },
  { label: 'EAN5', value: 'EAN5' },
  { label: 'EAN2', value: 'EAN2' },
  { label: 'UPC', value: 'UPC' },
  { label: 'UPCE', value: 'UPCE' },
  { label: 'CODE39', value: 'CODE39' },
  { label: 'ITF', value: 'ITF' },
  { label: 'ITF14', value: 'ITF14' },
  { label: 'MSI', value: 'MSI' },
  { label: 'MSI10', value: 'MSI10' },
  { label: 'MSI11', value: 'MSI11' },
  { label: 'MSI1010', value: 'MSI1010' },
  { label: 'MSI1110', value: 'MSI1110' },
  { label: 'pharmacode', value: 'pharmacode' },
  { label: 'codabar', value: 'codabar' },
  { label: 'CODE93', value: 'CODE93' },
])

const textAlignOptions = [
  { label: t('left'), value: 'left' },
  { label: t('center'), value: 'center' },
  { label: t('right'), value: 'right' },
]

const textPositionOptions = [
  { label: t('top'), value: 'top' },
  { label: t('bottom'), value: 'bottom' },
]
</script>

<i18n lang="json">
{
  "en": {
    "text": "Text",
    "text-ph": "Type content to encode...",
    "format": "Format",
    "bar-width": "Bar width",
    "bar-height": "Bar height",
    "margin": "Margin",
    "display-value": "Display value",
    "text-align": "Text align",
    "text-position": "Text position",
    "font-size": "Font size",
    "line-color": "Line color",
    "background": "Background",
    "left": "Left",
    "center": "Center",
    "right": "Right",
    "top": "Top",
    "bottom": "Bottom"
  },
  "zh": {
    "text": "文本",
    "text-ph": "输入要编码的内容...",
    "format": "格式",
    "bar-width": "条宽",
    "bar-height": "条高",
    "margin": "边距",
    "display-value": "显示文字",
    "text-align": "文字对齐",
    "text-position": "文字位置",
    "font-size": "字体大小",
    "line-color": "线条颜色",
    "background": "背景色",
    "left": "左",
    "center": "中",
    "right": "右",
    "top": "上",
    "bottom": "下"
  },
  "zh-CN": {
    "text": "文本",
    "text-ph": "输入要编码的内容...",
    "format": "格式",
    "bar-width": "条宽",
    "bar-height": "条高",
    "margin": "边距",
    "display-value": "显示文字",
    "text-align": "文字对齐",
    "text-position": "文字位置",
    "font-size": "字体大小",
    "line-color": "线条颜色",
    "background": "背景色",
    "left": "左",
    "center": "中",
    "right": "右",
    "top": "上",
    "bottom": "下"
  },
  "zh-TW": {
    "text": "文字",
    "text-ph": "輸入要編碼的內容...",
    "format": "格式",
    "bar-width": "條寬",
    "bar-height": "條高",
    "margin": "邊距",
    "display-value": "顯示文字",
    "text-align": "文字對齊",
    "text-position": "文字位置",
    "font-size": "字體大小",
    "line-color": "線條顏色",
    "background": "背景色",
    "left": "左",
    "center": "中",
    "right": "右",
    "top": "上",
    "bottom": "下"
  },
  "zh-HK": {
    "text": "文字",
    "text-ph": "輸入要編碼的內容...",
    "format": "格式",
    "bar-width": "條寬",
    "bar-height": "條高",
    "margin": "邊距",
    "display-value": "顯示文字",
    "text-align": "文字對齊",
    "text-position": "文字位置",
    "font-size": "字體大小",
    "line-color": "線條顏色",
    "background": "背景色",
    "left": "左",
    "center": "中",
    "right": "右",
    "top": "上",
    "bottom": "下"
  },
  "es": {
    "text": "Texto",
    "text-ph": "Escribe contenido...",
    "format": "Formato",
    "bar-width": "Ancho de barra",
    "bar-height": "Altura de barra",
    "margin": "Margen",
    "display-value": "Mostrar valor",
    "text-align": "Alineación",
    "text-position": "Posición del texto",
    "font-size": "Tamaño de fuente",
    "line-color": "Color de línea",
    "background": "Fondo",
    "left": "Izquierda",
    "center": "Centro",
    "right": "Derecha",
    "top": "Arriba",
    "bottom": "Abajo"
  },
  "fr": {
    "text": "Texte",
    "text-ph": "Saisir le contenu...",
    "format": "Format",
    "bar-width": "Largeur des barres",
    "bar-height": "Hauteur des barres",
    "margin": "Marge",
    "display-value": "Afficher la valeur",
    "text-align": "Alignement",
    "text-position": "Position du texte",
    "font-size": "Taille de police",
    "line-color": "Couleur des lignes",
    "background": "Arrière-plan",
    "left": "Gauche",
    "center": "Centre",
    "right": "Droite",
    "top": "Haut",
    "bottom": "Bas"
  },
  "de": {
    "text": "Text",
    "text-ph": "Geben Sie Inhalt ein...",
    "format": "Format",
    "bar-width": "Balkenbreite",
    "bar-height": "Balkenhöhe",
    "margin": "Rand",
    "display-value": "Wert anzeigen",
    "text-align": "Textausrichtung",
    "text-position": "Textposition",
    "font-size": "Schriftgröße",
    "line-color": "Linienfarbe",
    "background": "Hintergrund",
    "left": "Links",
    "center": "Mitte",
    "right": "Rechts",
    "top": "Oben",
    "bottom": "Unten"
  },
  "it": {
    "text": "Testo",
    "text-ph": "Scrivi contenuto...",
    "format": "Formato",
    "bar-width": "Larghezza barre",
    "bar-height": "Altezza barre",
    "margin": "Margine",
    "display-value": "Mostra valore",
    "text-align": "Allineamento",
    "text-position": "Posizione del testo",
    "font-size": "Dimensione carattere",
    "line-color": "Colore linee",
    "background": "Sfondo",
    "left": "Sinistra",
    "center": "Centro",
    "right": "Destra",
    "top": "Alto",
    "bottom": "Basso"
  },
  "ja": {
    "text": "テキスト",
    "text-ph": "内容を入力...",
    "format": "フォーマット",
    "bar-width": "バー幅",
    "bar-height": "バー高さ",
    "margin": "マージン",
    "display-value": "値を表示",
    "text-align": "配置",
    "text-position": "テキスト位置",
    "font-size": "フォントサイズ",
    "line-color": "線の色",
    "background": "背景",
    "left": "左",
    "center": "中央",
    "right": "右",
    "top": "上",
    "bottom": "下"
  },
  "ko": {
    "text": "텍스트",
    "text-ph": "내용 입력...",
    "format": "형식",
    "bar-width": "바 폭",
    "bar-height": "바 높이",
    "margin": "여백",
    "display-value": "값 표시",
    "text-align": "정렬",
    "text-position": "텍스트 위치",
    "font-size": "글꼴 크기",
    "line-color": "선 색상",
    "background": "배경",
    "left": "왼쪽",
    "center": "가운데",
    "right": "오른쪽",
    "top": "위",
    "bottom": "아래"
  },
  "ru": {
    "text": "Текст",
    "text-ph": "Введите данные...",
    "format": "Формат",
    "bar-width": "Ширина штрихов",
    "bar-height": "Высота штрихов",
    "margin": "Отступ",
    "display-value": "Показывать значение",
    "text-align": "Выравнивание",
    "text-position": "Положение текста",
    "font-size": "Размер шрифта",
    "line-color": "Цвет линий",
    "background": "Фон",
    "left": "Слева",
    "center": "По центру",
    "right": "Справа",
    "top": "Сверху",
    "bottom": "Снизу"
  },
  "pt": {
    "text": "Texto",
    "text-ph": "Digite o conteúdo...",
    "format": "Formato",
    "bar-width": "Largura das barras",
    "bar-height": "Altura das barras",
    "margin": "Margem",
    "display-value": "Exibir valor",
    "text-align": "Alinhamento",
    "text-position": "Posição do texto",
    "font-size": "Tamanho da fonte",
    "line-color": "Cor das linhas",
    "background": "Fundo",
    "left": "Esquerda",
    "center": "Centro",
    "right": "Direita",
    "top": "Topo",
    "bottom": "Inferior"
  },
  "ar": {
    "text": "نص",
    "text-ph": "أدخل المحتوى...",
    "format": "التنسيق",
    "bar-width": "عرض الأشرطة",
    "bar-height": "ارتفاع الأشرطة",
    "margin": "الهامش",
    "display-value": "عرض القيمة",
    "text-align": "محاذاة النص",
    "text-position": "موضع النص",
    "font-size": "حجم الخط",
    "line-color": "لون الخطوط",
    "background": "الخلفية",
    "left": "يسار",
    "center": "وسط",
    "right": "يمين",
    "top": "أعلى",
    "bottom": "أسفل"
  },
  "hi": {
    "text": "टेक्स्ट",
    "text-ph": "सामग्री दर्ज करें...",
    "format": "फॉर्मेट",
    "bar-width": "बार चौड़ाई",
    "bar-height": "बार ऊंचाई",
    "margin": "मार्जिन",
    "display-value": "मान दिखाएं",
    "text-align": "टेक्स्ट एलाइन",
    "text-position": "टेक्स्ट स्थिति",
    "font-size": "फ़ॉन्ट आकार",
    "line-color": "लाइन रंग",
    "background": "पृष्ठभूमि",
    "left": "बाएँ",
    "center": "मध्य",
    "right": "दाएँ",
    "top": "ऊपर",
    "bottom": "नीचे"
  },
  "tr": {
    "text": "Metin",
    "text-ph": "İçerik yazın...",
    "format": "Biçim",
    "bar-width": "Çubuk genişliği",
    "bar-height": "Çubuk yüksekliği",
    "margin": "Kenar boşluğu",
    "display-value": "Değeri göster",
    "text-align": "Hizalama",
    "text-position": "Metin konumu",
    "font-size": "Yazı tipi boyutu",
    "line-color": "Çizgi rengi",
    "background": "Arka plan",
    "left": "Sol",
    "center": "Orta",
    "right": "Sağ",
    "top": "Üst",
    "bottom": "Alt"
  },
  "nl": {
    "text": "Tekst",
    "text-ph": "Voer inhoud in...",
    "format": "Formaat",
    "bar-width": "Balkbreedte",
    "bar-height": "Balkhoogte",
    "margin": "Marge",
    "display-value": "Waarde weergeven",
    "text-align": "Uitlijning",
    "text-position": "Tekstpositie",
    "font-size": "Lettergrootte",
    "line-color": "Lijnkleur",
    "background": "Achtergrond",
    "left": "Links",
    "center": "Midden",
    "right": "Rechts",
    "top": "Boven",
    "bottom": "Onder"
  },
  "sv": {
    "text": "Text",
    "text-ph": "Ange innehåll...",
    "format": "Format",
    "bar-width": "Streckbredd",
    "bar-height": "Streckhöjd",
    "margin": "Marginal",
    "display-value": "Visa värde",
    "text-align": "Justering",
    "text-position": "Textposition",
    "font-size": "Teckenstorlek",
    "line-color": "Linjefärg",
    "background": "Bakgrund",
    "left": "Vänster",
    "center": "Mitten",
    "right": "Höger",
    "top": "Topp",
    "bottom": "Botten"
  },
  "pl": {
    "text": "Tekst",
    "text-ph": "Wpisz treść...",
    "format": "Format",
    "bar-width": "Szerokość pasków",
    "bar-height": "Wysokość pasków",
    "margin": "Margines",
    "display-value": "Pokaż wartość",
    "text-align": "Wyrównanie",
    "text-position": "Pozycja tekstu",
    "font-size": "Rozmiar czcionki",
    "line-color": "Kolor linii",
    "background": "Tło",
    "left": "Lewo",
    "center": "Środek",
    "right": "Prawo",
    "top": "Góra",
    "bottom": "Dół"
  },
  "vi": {
    "text": "Văn bản",
    "text-ph": "Nhập nội dung...",
    "format": "Định dạng",
    "bar-width": "Độ rộng vạch",
    "bar-height": "Chiều cao vạch",
    "margin": "Lề",
    "display-value": "Hiển thị giá trị",
    "text-align": "Căn chỉnh",
    "text-position": "Vị trí văn bản",
    "font-size": "Cỡ chữ",
    "line-color": "Màu đường",
    "background": "Nền",
    "left": "Trái",
    "center": "Giữa",
    "right": "Phải",
    "top": "Trên",
    "bottom": "Dưới"
  },
  "th": {
    "text": "ข้อความ",
    "text-ph": "พิมพ์เนื้อหา...",
    "format": "รูปแบบ",
    "bar-width": "ความกว้างแท่ง",
    "bar-height": "ความสูงแท่ง",
    "margin": "ระยะขอบ",
    "display-value": "แสดงค่า",
    "text-align": "การจัดตำแหน่ง",
    "text-position": "ตำแหน่งข้อความ",
    "font-size": "ขนาดแบบอักษร",
    "line-color": "สีเส้น",
    "background": "พื้นหลัง",
    "left": "ซ้าย",
    "center": "กลาง",
    "right": "ขวา",
    "top": "บน",
    "bottom": "ล่าง"
  },
  "id": {
    "text": "Teks",
    "text-ph": "Masukkan konten...",
    "format": "Format",
    "bar-width": "Lebar batang",
    "bar-height": "Tinggi batang",
    "margin": "Margin",
    "display-value": "Tampilkan nilai",
    "text-align": "Perataan",
    "text-position": "Posisi teks",
    "font-size": "Ukuran font",
    "line-color": "Warna garis",
    "background": "Latar belakang",
    "left": "Kiri",
    "center": "Tengah",
    "right": "Kanan",
    "top": "Atas",
    "bottom": "Bawah"
  },
  "he": {
    "text": "טקסט",
    "text-ph": "הזן תוכן...",
    "format": "פורמט",
    "bar-width": "רוחב קווים",
    "bar-height": "גובה קווים",
    "margin": "שוליים",
    "display-value": "הצג ערך",
    "text-align": "יישור",
    "text-position": "מיקום טקסט",
    "font-size": "גודל גופן",
    "line-color": "צבע קווים",
    "background": "רקע",
    "left": "שמאל",
    "center": "מרכז",
    "right": "ימין",
    "top": "למעלה",
    "bottom": "למטה"
  },
  "ms": {
    "text": "Teks",
    "text-ph": "Masukkan kandungan...",
    "format": "Format",
    "bar-width": "Lebar bar",
    "bar-height": "Tinggi bar",
    "margin": "Jidar",
    "display-value": "Papar nilai",
    "text-align": "Jajaran",
    "text-position": "Kedudukan teks",
    "font-size": "Saiz fon",
    "line-color": "Warna garisan",
    "background": "Latar belakang",
    "left": "Kiri",
    "center": "Tengah",
    "right": "Kanan",
    "top": "Atas",
    "bottom": "Bawah"
  },
  "no": {
    "text": "Tekst",
    "text-ph": "Skriv innhold...",
    "format": "Format",
    "bar-width": "Strekbredde",
    "bar-height": "Strekhøyde",
    "margin": "Marg",
    "display-value": "Vis verdi",
    "text-align": "Justering",
    "text-position": "Tekstposisjon",
    "font-size": "Skriftstørrelse",
    "line-color": "Linjefarge",
    "background": "Bakgrunn",
    "left": "Venstre",
    "center": "Midten",
    "right": "Høyre",
    "top": "Topp",
    "bottom": "Bunn"
  }
}
</i18n>
