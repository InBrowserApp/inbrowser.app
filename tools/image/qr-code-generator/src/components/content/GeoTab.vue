<template>
  <n-grid cols="1 s:2" responsive="screen" :x-gap="12" :y-gap="12">
    <n-form-item-gi :label="t('geo-lat')" :show-feedback="false">
      <n-input-number
        v-model:value="model.lat"
        :precision="6"
        :step="0.000001"
        placeholder="37.7749"
        style="width: 100%"
      />
    </n-form-item-gi>
    <n-form-item-gi :label="t('geo-lng')" :show-feedback="false">
      <n-input-number
        v-model:value="model.lng"
        :precision="6"
        :step="0.000001"
        placeholder="-122.4194"
        style="width: 100%"
      />
    </n-form-item-gi>
    <n-form-item-gi :label="t('geo-alt')" :show-feedback="false">
      <n-input-number
        v-model:value="model.alt"
        :precision="1"
        :step="0.1"
        placeholder="10"
        style="width: 100%"
      />
    </n-form-item-gi>
  </n-grid>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { NFormItemGi, NGrid, NInputNumber } from 'naive-ui'

export type GeoModel = { lat: number | null; lng: number | null; alt: number | null }

const model = defineModel<GeoModel>({ required: true })
const { t } = useI18n()
</script>

<i18n lang="json">
{
  "en": {
    "geo-lat": "Latitude",
    "geo-lng": "Longitude",
    "geo-alt": "Altitude (m)"
  },
  "zh": { "geo-lat": "纬度", "geo-lng": "经度", "geo-alt": "海拔（米）" },
  "zh-CN": { "geo-lat": "纬度", "geo-lng": "经度", "geo-alt": "海拔（米）" },
  "zh-TW": { "geo-lat": "緯度", "geo-lng": "經度", "geo-alt": "海拔（公尺）" },
  "zh-HK": { "geo-lat": "緯度", "geo-lng": "經度", "geo-alt": "海拔（米）" },
  "es": { "geo-lat": "Latitud", "geo-lng": "Longitud", "geo-alt": "Altitud (m)" },
  "fr": { "geo-lat": "Latitude", "geo-lng": "Longitude", "geo-alt": "Altitude (m)" },
  "de": { "geo-lat": "Breitengrad", "geo-lng": "Längengrad", "geo-alt": "Höhe (m)" },
  "it": { "geo-lat": "Latitudine", "geo-lng": "Longitudine", "geo-alt": "Altitudine (m)" },
  "ja": { "geo-lat": "緯度", "geo-lng": "経度", "geo-alt": "高度 (m)" },
  "ko": { "geo-lat": "위도", "geo-lng": "경도", "geo-alt": "고도 (m)" },
  "ru": { "geo-lat": "Широта", "geo-lng": "Долгота", "geo-alt": "Высота (м)" },
  "pt": { "geo-lat": "Latitude", "geo-lng": "Longitude", "geo-alt": "Altitude (m)" },
  "ar": { "geo-lat": "خط العرض", "geo-lng": "خط الطول", "geo-alt": "الارتفاع (م)" },
  "hi": { "geo-lat": "अक्षांश", "geo-lng": "देशांतर", "geo-alt": "ऊंचाई (m)" },
  "tr": { "geo-lat": "Enlem", "geo-lng": "Boylam", "geo-alt": "Yükseklik (m)" },
  "nl": { "geo-lat": "Breedtegraad", "geo-lng": "Lengtegraad", "geo-alt": "Hoogte (m)" },
  "sv": { "geo-lat": "Latitud", "geo-lng": "Longitud", "geo-alt": "Höjd (m)" },
  "pl": { "geo-lat": "Szerokość", "geo-lng": "Długość", "geo-alt": "Wysokość (m)" },
  "vi": { "geo-lat": "Vĩ độ", "geo-lng": "Kinh độ", "geo-alt": "Độ cao (m)" },
  "th": { "geo-lat": "ละติจูด", "geo-lng": "ลองจิจูด", "geo-alt": "ความสูง (ม.)" },
  "id": { "geo-lat": "Garis lintang", "geo-lng": "Garis bujur", "geo-alt": "Ketinggian (m)" },
  "he": { "geo-lat": "קו רוחב", "geo-lng": "קו אורך", "geo-alt": "גובה (מ׳)" },
  "ms": { "geo-lat": "Latitud", "geo-lng": "Longitud", "geo-alt": "Ketinggian (m)" },
  "no": { "geo-lat": "Breddegrad", "geo-lng": "Lengdegrad", "geo-alt": "Høyde (m)" }
}
</i18n>
