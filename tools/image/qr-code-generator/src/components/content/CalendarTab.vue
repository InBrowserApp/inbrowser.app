<template>
  <n-grid cols="1 s:2" responsive="screen" :x-gap="12" :y-gap="12">
    <n-form-item-gi :label="t('cal-title')" :show-feedback="false">
      <n-input v-model:value="model.title" :placeholder="t('cal-title-ph')" />
    </n-form-item-gi>
    <n-form-item-gi :label="t('cal-location')" :show-feedback="false">
      <n-input v-model:value="model.location" :placeholder="t('cal-location-ph')" />
    </n-form-item-gi>
    <n-form-item-gi :label="t('cal-start')" :show-feedback="false">
      <n-date-picker v-model:value="model.start" type="datetime" style="width: 100%" />
    </n-form-item-gi>
    <n-form-item-gi :label="t('cal-end')" :show-feedback="false">
      <n-date-picker v-model:value="model.end" type="datetime" style="width: 100%" />
    </n-form-item-gi>
    <n-form-item-gi :label="t('cal-desc')" :show-feedback="false">
      <n-input
        v-model:value="model.description"
        type="textarea"
        :autosize="{ minRows: 1, maxRows: 6 }"
        :placeholder="t('cal-desc')"
      />
    </n-form-item-gi>
  </n-grid>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { NFormItemGi, NGrid, NInput, NDatePicker } from 'naive-ui'

export type CalendarModel = {
  title: string
  start: number | null
  end: number | null
  location: string
  description: string
}

const model = defineModel<CalendarModel>({ required: true })
const { t } = useI18n()
</script>

<i18n lang="json">
{
  "en": {
    "cal-title": "Title",
    "cal-title-ph": "Event title",
    "cal-start": "Start",
    "cal-end": "End",
    "cal-location": "Location",
    "cal-location-ph": "Where",
    "cal-desc": "Description"
  },
  "zh": {
    "cal-title": "标题",
    "cal-title-ph": "事件标题",
    "cal-start": "开始",
    "cal-end": "结束",
    "cal-location": "地点",
    "cal-location-ph": "位置",
    "cal-desc": "描述"
  },
  "zh-CN": {
    "cal-title": "标题",
    "cal-title-ph": "事件标题",
    "cal-start": "开始",
    "cal-end": "结束",
    "cal-location": "地点",
    "cal-location-ph": "位置",
    "cal-desc": "描述"
  },
  "zh-TW": {
    "cal-title": "標題",
    "cal-title-ph": "事件標題",
    "cal-start": "開始",
    "cal-end": "結束",
    "cal-location": "地點",
    "cal-location-ph": "位置",
    "cal-desc": "描述"
  },
  "zh-HK": {
    "cal-title": "標題",
    "cal-title-ph": "事件標題",
    "cal-start": "開始",
    "cal-end": "結束",
    "cal-location": "地點",
    "cal-location-ph": "位置",
    "cal-desc": "描述"
  },
  "es": {
    "cal-title": "Título",
    "cal-title-ph": "Título del evento",
    "cal-start": "Inicio",
    "cal-end": "Fin",
    "cal-location": "Ubicación",
    "cal-location-ph": "Dónde",
    "cal-desc": "Descripción"
  },
  "fr": {
    "cal-title": "Titre",
    "cal-title-ph": "Titre de l’événement",
    "cal-start": "Début",
    "cal-end": "Fin",
    "cal-location": "Lieu",
    "cal-location-ph": "Où",
    "cal-desc": "Description"
  },
  "de": {
    "cal-title": "Titel",
    "cal-title-ph": "Eventtitel",
    "cal-start": "Beginn",
    "cal-end": "Ende",
    "cal-location": "Ort",
    "cal-location-ph": "Wo",
    "cal-desc": "Beschreibung"
  },
  "it": {
    "cal-title": "Titolo",
    "cal-title-ph": "Titolo dell’evento",
    "cal-start": "Inizio",
    "cal-end": "Fine",
    "cal-location": "Luogo",
    "cal-location-ph": "Dove",
    "cal-desc": "Descrizione"
  },
  "ja": {
    "cal-title": "タイトル",
    "cal-title-ph": "イベント名",
    "cal-start": "開始",
    "cal-end": "終了",
    "cal-location": "場所",
    "cal-location-ph": "どこ",
    "cal-desc": "説明"
  },
  "ko": {
    "cal-title": "제목",
    "cal-title-ph": "이벤트 제목",
    "cal-start": "시작",
    "cal-end": "종료",
    "cal-location": "위치",
    "cal-location-ph": "어디",
    "cal-desc": "설명"
  },
  "ru": {
    "cal-title": "Заголовок",
    "cal-title-ph": "Название события",
    "cal-start": "Начало",
    "cal-end": "Конец",
    "cal-location": "Место",
    "cal-location-ph": "Где",
    "cal-desc": "Описание"
  },
  "pt": {
    "cal-title": "Título",
    "cal-title-ph": "Título do evento",
    "cal-start": "Início",
    "cal-end": "Fim",
    "cal-location": "Local",
    "cal-location-ph": "Onde",
    "cal-desc": "Descrição"
  },
  "ar": {
    "cal-title": "العنوان",
    "cal-title-ph": "عنوان الحدث",
    "cal-start": "البداية",
    "cal-end": "النهاية",
    "cal-location": "الموقع",
    "cal-location-ph": "أين",
    "cal-desc": "الوصف"
  },
  "hi": {
    "cal-title": "शीर्षक",
    "cal-title-ph": "इवेंट शीर्षक",
    "cal-start": "आरंभ",
    "cal-end": "समाप्ति",
    "cal-location": "स्थान",
    "cal-location-ph": "कहाँ",
    "cal-desc": "विवरण"
  },
  "tr": {
    "cal-title": "Başlık",
    "cal-title-ph": "Etkinlik başlığı",
    "cal-start": "Başlangıç",
    "cal-end": "Bitiş",
    "cal-location": "Konum",
    "cal-location-ph": "Nerede",
    "cal-desc": "Açıklama"
  },
  "nl": {
    "cal-title": "Titel",
    "cal-title-ph": "Evenementtitel",
    "cal-start": "Start",
    "cal-end": "Einde",
    "cal-location": "Locatie",
    "cal-location-ph": "Waar",
    "cal-desc": "Beschrijving"
  },
  "sv": {
    "cal-title": "Titel",
    "cal-title-ph": "Händelsetitel",
    "cal-start": "Start",
    "cal-end": "Slut",
    "cal-location": "Plats",
    "cal-location-ph": "Var",
    "cal-desc": "Beskrivning"
  },
  "pl": {
    "cal-title": "Tytuł",
    "cal-title-ph": "Tytuł wydarzenia",
    "cal-start": "Początek",
    "cal-end": "Koniec",
    "cal-location": "Miejsce",
    "cal-location-ph": "Gdzie",
    "cal-desc": "Opis"
  },
  "vi": {
    "cal-title": "Tiêu đề",
    "cal-title-ph": "Tiêu đề sự kiện",
    "cal-start": "Bắt đầu",
    "cal-end": "Kết thúc",
    "cal-location": "Địa điểm",
    "cal-location-ph": "Ở đâu",
    "cal-desc": "Mô tả"
  },
  "th": {
    "cal-title": "ชื่อเรื่อง",
    "cal-title-ph": "ชื่อกิจกรรม",
    "cal-start": "เริ่ม",
    "cal-end": "สิ้นสุด",
    "cal-location": "สถานที่",
    "cal-location-ph": "ที่ไหน",
    "cal-desc": "คำอธิบาย"
  },
  "id": {
    "cal-title": "Judul",
    "cal-title-ph": "Judul acara",
    "cal-start": "Mulai",
    "cal-end": "Selesai",
    "cal-location": "Lokasi",
    "cal-location-ph": "Di mana",
    "cal-desc": "Deskripsi"
  },
  "he": {
    "cal-title": "כותרת",
    "cal-title-ph": "כותרת אירוע",
    "cal-start": "התחלה",
    "cal-end": "סיום",
    "cal-location": "מיקום",
    "cal-location-ph": "איפה",
    "cal-desc": "תיאור"
  },
  "ms": {
    "cal-title": "Tajuk",
    "cal-title-ph": "Tajuk acara",
    "cal-start": "Mula",
    "cal-end": "Tamat",
    "cal-location": "Lokasi",
    "cal-location-ph": "Di mana",
    "cal-desc": "Huraian"
  },
  "no": {
    "cal-title": "Tittel",
    "cal-title-ph": "Arrangementstittel",
    "cal-start": "Start",
    "cal-end": "Slutt",
    "cal-location": "Sted",
    "cal-location-ph": "Hvor",
    "cal-desc": "Beskrivelse"
  }
}
</i18n>
