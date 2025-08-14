<template>
  <ToolDefaultPageLayout :info="toolInfo" hide-related-tools>
    <ToolSection>
      <ToolsGrid :tools="relatedTools" />
    </ToolSection>

    <ToolSectionHeader>{{ t('get-random-uuid-v4') }}</ToolSectionHeader>
    <ToolSection>
      <UUIDDisplay :uuid="uuid" />
    </ToolSection>
    <ToolSection>
      <RegenerateButton @click="regenerateUUID" />
      <n-divider vertical />
      <CopyToClipboardButton :content="uuid" />
    </ToolSection>

    <WhatIsUUID />
  </ToolDefaultPageLayout>
</template>

<script lang="ts" setup>
import * as toolInfo from './infos'
import WhatIsUUID from '../descriptions/WhatIsUUID.vue'
import { ToolDefaultPageLayout, ToolSection, ToolSectionHeader, ToolsGrid } from '@shared/ui/tool'
import { NDivider } from 'naive-ui'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { toolInfo as uuidV4GeneratorToolInfo } from '../uuid-v4-generator'
import { toolInfo as uuidV3GeneratorToolInfo } from '../uuid-v3-generator'
import { toolInfo as uuidV1GeneratorToolInfo } from '../uuid-v1-generator'
import { toolInfo as uuidV5GeneratorToolInfo } from '../uuid-v5-generator'
import { toolInfo as uuidV6GeneratorToolInfo } from '../uuid-v6-generator'
import { toolInfo as uuidV7GeneratorToolInfo } from '../uuid-v7-generator'
import { toolInfo as uuidNilGeneratorToolInfo } from '../uuid-nil-generator'
import { toolInfo as uuidMaxGeneratorToolInfo } from '../uuid-max-generator'
import { toolInfo as uuidDecoderToolInfo } from '../uuid-decoder'
import { toolInfo as uuidV1V6ConverterToolInfo } from '../uuid-v1-v6-converter'
import { toolInfo as uuidBase64IntegerOctalBinaryConverterToolInfo } from '../uuid-base64-integer-octal-binary-converter'
import { toolInfo as uuidV4BulkGeneratorToolInfo } from '../uuid-v4-bulk-generator'
import { toolInfo as uuidValidatorToolInfo } from '../uuid-validator'
import { CopyToClipboardButton, RegenerateButton } from '@shared/ui/base'
import { UUIDDisplay } from '@shared/ui/domain/uuid'
import type { UUIDv4 } from '@utils/uuid'

const { t } = useI18n()

const uuid = ref<UUIDv4>(crypto.randomUUID() as UUIDv4)

function regenerateUUID() {
  uuid.value = crypto.randomUUID() as UUIDv4
}

const relatedTools = [
  uuidV1GeneratorToolInfo,
  uuidV3GeneratorToolInfo,
  uuidV4GeneratorToolInfo,
  uuidV5GeneratorToolInfo,
  uuidV6GeneratorToolInfo,
  uuidV7GeneratorToolInfo,
  uuidNilGeneratorToolInfo,
  uuidMaxGeneratorToolInfo,
  uuidV4BulkGeneratorToolInfo,
  uuidDecoderToolInfo,
  uuidValidatorToolInfo,
  uuidV1V6ConverterToolInfo,
  uuidBase64IntegerOctalBinaryConverterToolInfo,
]
</script>

<i18n lang="json">
{
  "en": {
    "get-random-uuid-v4": "Get Random UUID v4"
  },
  "zh": {
    "get-random-uuid-v4": "获取随机 UUID v4"
  },
  "zh-CN": {
    "get-random-uuid-v4": "获取随机 UUID v4"
  },
  "zh-TW": {
    "get-random-uuid-v4": "獲取隨機 UUID v4"
  },
  "zh-HK": {
    "get-random-uuid-v4": "獲取隨機 UUID v4"
  },
  "es": {
    "get-random-uuid-v4": "Obtener UUID v4 aleatorio"
  },
  "fr": {
    "get-random-uuid-v4": "Obtenir un UUID v4 aléatoire"
  },
  "de": {
    "get-random-uuid-v4": "Zufällige UUID v4 generieren"
  },
  "it": {
    "get-random-uuid-v4": "Ottieni UUID v4 casuale"
  },
  "ja": {
    "get-random-uuid-v4": "ランダム UUID v4 を取得"
  },
  "ko": {
    "get-random-uuid-v4": "랜덤 UUID v4 생성"
  },
  "ru": {
    "get-random-uuid-v4": "Получить случайный UUID v4"
  },
  "pt": {
    "get-random-uuid-v4": "Obter UUID v4 aleatório"
  },
  "ar": {
    "get-random-uuid-v4": "الحصول على UUID v4 عشوائي"
  },
  "hi": {
    "get-random-uuid-v4": "रैंडम UUID v4 प्राप्त करें"
  },
  "tr": {
    "get-random-uuid-v4": "Rastgele UUID v4 al"
  },
  "nl": {
    "get-random-uuid-v4": "Willekeurige UUID v4 verkrijgen"
  },
  "sv": {
    "get-random-uuid-v4": "Få slumpmässig UUID v4"
  },
  "pl": {
    "get-random-uuid-v4": "Uzyskaj losowy UUID v4"
  },
  "vi": {
    "get-random-uuid-v4": "Lấy UUID v4 ngẫu nhiên"
  },
  "th": {
    "get-random-uuid-v4": "รับ UUID v4 แบบสุ่ม"
  },
  "id": {
    "get-random-uuid-v4": "Dapatkan UUID v4 acak"
  },
  "he": {
    "get-random-uuid-v4": "קבל UUID v4 אקראי"
  },
  "ms": {
    "get-random-uuid-v4": "Dapatkan UUID v4 rawak"
  },
  "no": {
    "get-random-uuid-v4": "Få tilfeldig UUID v4"
  }
}
</i18n>
