<template>
  <n-tabs type="line" animated>
    <n-tab-pane name="settings" :tab="t('settings')" display-directive="show">
      <PWAMaskableSettingsDisplay v-model:options="options" />
    </n-tab-pane>
    <n-tab-pane name="dedicated-image" :tab="t('dedicatedImage')" display-directive="show">
      <PWAMaskableSettingsDedicatedImage v-model:options="options" />
    </n-tab-pane>
    <n-tab-pane name="download" :tab="t('downloadSeparately')" display-directive="show">
      <PWAMaskableSettingsDownload :options="options" :image="image" />
    </n-tab-pane>
  </n-tabs>
</template>

<script setup lang="ts">
import { NTabs, NTabPane } from 'naive-ui'
import type { PWAOptions } from '../../../utils/favicon-generator/pwa'
import { useVModel } from '@vueuse/core'
import PWAMaskableSettingsDisplay from './PWAMaskableSettingsDisplay.vue'
import PWAMaskableSettingsDedicatedImage from './PWAMaskableSettingsDedicatedImage.vue'
import PWAMaskableSettingsDownload from './PWAMaskableSettingsDownload.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const props = defineProps<{
  image: Blob | undefined
  options: PWAOptions
}>()

const emit = defineEmits(['update:options'])

const options = useVModel(props, 'options', emit)
</script>

<i18n lang="json">
{
  "en": {
    "settings": "Settings",
    "dedicatedImage": "Dedicated Image",
    "downloadSeparately": "Download Separately"
  },
  "zh": {
    "settings": "设置",
    "dedicatedImage": "专用图片",
    "downloadSeparately": "单独下载"
  },
  "zh-CN": {
    "settings": "设置",
    "dedicatedImage": "专用图片",
    "downloadSeparately": "单独下载"
  },
  "zh-TW": {
    "settings": "設定",
    "dedicatedImage": "專用圖片",
    "downloadSeparately": "單獨下載"
  },
  "zh-HK": {
    "settings": "設定",
    "dedicatedImage": "專用圖片",
    "downloadSeparately": "單獨下載"
  },
  "es": {
    "settings": "Configuración",
    "dedicatedImage": "Imagen Dedicada",
    "downloadSeparately": "Descargar por Separado"
  },
  "fr": {
    "settings": "Paramètres",
    "dedicatedImage": "Image Dédiée",
    "downloadSeparately": "Télécharger Séparément"
  },
  "de": {
    "settings": "Einstellungen",
    "dedicatedImage": "Dediziertes Bild",
    "downloadSeparately": "Separate Downloads"
  },
  "it": {
    "settings": "Impostazioni",
    "dedicatedImage": "Immagine Dedicata",
    "downloadSeparately": "Scarica Separatamente"
  },
  "ja": {
    "settings": "設定",
    "dedicatedImage": "専用画像",
    "downloadSeparately": "個別ダウンロード"
  },
  "ko": {
    "settings": "설정",
    "dedicatedImage": "전용 이미지",
    "downloadSeparately": "개별 다운로드"
  },
  "ru": {
    "settings": "Настройки",
    "dedicatedImage": "Отдельное Изображение",
    "downloadSeparately": "Скачать Отдельно"
  },
  "pt": {
    "settings": "Configurações",
    "dedicatedImage": "Imagem Dedicada",
    "downloadSeparately": "Baixar Separadamente"
  },
  "ar": {
    "settings": "الإعدادات",
    "dedicatedImage": "صورة مخصصة",
    "downloadSeparately": "تنزيل منفصل"
  },
  "hi": {
    "settings": "सेटिंग्स",
    "dedicatedImage": "समर्पित छवि",
    "downloadSeparately": "अलग से डाउनलोड करें"
  },
  "tr": {
    "settings": "Ayarlar",
    "dedicatedImage": "Özel Görsel",
    "downloadSeparately": "Ayrı İndir"
  },
  "nl": {
    "settings": "Instellingen",
    "dedicatedImage": "Toegewijde Afbeelding",
    "downloadSeparately": "Apart Downloaden"
  },
  "sv": {
    "settings": "Inställningar",
    "dedicatedImage": "Dedikerad Bild",
    "downloadSeparately": "Ladda Ner Separat"
  },
  "pl": {
    "settings": "Ustawienia",
    "dedicatedImage": "Dedykowany Obraz",
    "downloadSeparately": "Pobierz Osobno"
  },
  "vi": {
    "settings": "Cài đặt",
    "dedicatedImage": "Hình ảnh Riêng",
    "downloadSeparately": "Tải xuống Riêng"
  },
  "th": {
    "settings": "การตั้งค่า",
    "dedicatedImage": "รูปภาพเฉพาะ",
    "downloadSeparately": "ดาวน์โหลดแยก"
  },
  "id": {
    "settings": "Pengaturan",
    "dedicatedImage": "Gambar Khusus",
    "downloadSeparately": "Unduh Terpisah"
  },
  "he": {
    "settings": "הגדרות",
    "dedicatedImage": "תמונה ייעודית",
    "downloadSeparately": "הורד בנפרד"
  },
  "ms": {
    "settings": "Tetapan",
    "dedicatedImage": "Imej Khas",
    "downloadSeparately": "Muat Turun Secara Berasingan"
  },
  "no": {
    "settings": "Innstillinger",
    "dedicatedImage": "Dedikert Bilde",
    "downloadSeparately": "Last Ned Separat"
  }
}
</i18n>
