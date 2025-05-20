<template>
  <n-tooltip trigger="hover">
    <template #trigger>
      <n-text code class="uuid-display" @click="copy">
        {{ uuid }}
      </n-text>
    </template>
    <n-icon :component="Icon" /> {{ t('tooltip') }}
  </n-tooltip>
</template>

<script setup lang="ts">
import { toRef } from 'vue'
import { NText, NTooltip, NIcon } from 'naive-ui'
import { Clipboard16Regular as Icon } from '@vicons/fluent'
import { useCopyToClipboard } from '@/composables/base/clipboard/useCopyToClipboard'
import { useI18n } from 'vue-i18n'
import type { UUID } from '@/utils/base/uuid'

const props = defineProps<{
  uuid: UUID
}>()
const uuid = toRef(props, 'uuid')
const { copy } = useCopyToClipboard(uuid)
const { t } = useI18n()
</script>

<style scoped>
.uuid-display {
  word-break: break-all;
  font-size: 2em;
  cursor: pointer;
}
</style>

<i18n lang="json">
{
  "en": {
    "tooltip": "Copy to Clipboard"
  },
  "zh": {
    "tooltip": "复制到剪贴板"
  },
  "zh-CN": {
    "tooltip": "复制到剪贴板"
  },
  "zh-TW": {
    "tooltip": "複製到剪貼簿"
  },
  "zh-HK": {
    "tooltip": "複製到剪貼簿"
  },
  "es": {
    "tooltip": "Copiar al portapapeles"
  },
  "fr": {
    "tooltip": "Copier dans le presse-papiers"
  },
  "de": {
    "tooltip": "In Zwischenablage kopieren"
  },
  "it": {
    "tooltip": "Copia negli appunti"
  },
  "ja": {
    "tooltip": "クリップボードにコピー"
  },
  "ko": {
    "tooltip": "클립보드에 복사"
  },
  "ru": {
    "tooltip": "Копировать в буфер обмена"
  },
  "pt": {
    "tooltip": "Copiar para a área de transferência"
  },
  "ar": {
    "tooltip": "نسخ إلى الحافظة"
  },
  "hi": {
    "tooltip": "क्लिपबोर्ड पर कॉपी करें"
  },
  "tr": {
    "tooltip": "Panoya kopyala"
  },
  "nl": {
    "tooltip": "Kopiëren naar klembord"
  },
  "sv": {
    "tooltip": "Kopiera till urklipp"
  },
  "pl": {
    "tooltip": "Kopiuj do schowka"
  },
  "vi": {
    "tooltip": "Sao chép vào bộ nhớ tạm"
  },
  "th": {
    "tooltip": "คัดลอกไปยังคลิปบอร์ด"
  },
  "id": {
    "tooltip": "Salin ke papan klip"
  },
  "he": {
    "tooltip": "העתק ללוח"
  },
  "ms": {
    "tooltip": "Salin ke papan klip"
  },
  "no": {
    "tooltip": "Kopier til utklippstavle"
  }
}
</i18n>
