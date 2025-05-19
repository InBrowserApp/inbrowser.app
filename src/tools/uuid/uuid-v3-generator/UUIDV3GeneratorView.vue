<template>
  <div>
    <n-h1 prefix="bar" align-text>{{ t('name') }}</n-h1>
    <n-p>{{ t('description') }}</n-p>
    <n-h2 prefix="bar" align-text>UUID v3</n-h2>
    <n-p>
      <UUIDDisplay :uuid="uuid" />
    </n-p>

    <n-p>
      <CopyToClipboardButton :content="uuid" />
    </n-p>

    <n-h2 prefix="bar" align-text>{{ t('config') }}</n-h2>
    <n-p>
      <NamespaceInput v-model:namespace="namespace" />
      <NameInput v-model:name="name" />
    </n-p>

    <WhatIsUUIDv3 />

    <RelatedTools :tools="relatedTools" hide="uuid-v3-generator" />
  </div>
</template>

<script lang="ts" setup>
import { meta } from './i18n'
import { useI18n } from 'vue-i18n'
import { NH1, NP, NH2 } from 'naive-ui'
import { useViewHead } from '@/tools/composables/use-view-head'
import CopyToClipboardButton from '@/components/base/buttons/CopyToClipboardButton.vue'
import { computed } from 'vue'
import UUIDDisplay from '@/components/base/display/uuid/UUIDDisplay.vue'
import WhatIsUUIDv3 from './WhatIsUUIDv3.vue'
import NamespaceInput from './NamespaceInput.vue'
import NameInput from './NameInput.vue'
import { useStorage } from '@vueuse/core'
import type { UUID, UUIDv3 } from '@/utils/base/uuid'
import { relatedTools } from '../related-tools'
import RelatedTools from '@/components/tools/tool/RelatedTools.vue'

import { v3 as uuidV3 } from 'uuid'

const { t } = useI18n({
  messages: meta,
})

const namespace = useStorage<UUID>(
  'tools:uuid-v3-generator:namespace',
  '6ba7b810-9dad-11d1-80b4-00c04fd430c8',
)
const name = useStorage<string>('tools:uuid-v3-generator:name', 'example.com')

const uuid = computed<UUIDv3>(() => uuidV3(name.value, namespace.value) as UUIDv3)

useViewHead(t)
</script>

<i18n lang="json">
{
  "en": {
    "config": "Configuration"
  },
  "zh": {
    "config": "配置"
  },
  "zh-CN": {
    "config": "配置"
  },
  "zh-TW": {
    "config": "配置"
  },
  "zh-HK": {
    "config": "配置"
  },
  "es": {
    "config": "Configuración"
  },
  "fr": {
    "config": "Configuration"
  },
  "de": {
    "config": "Konfiguration"
  },
  "it": {
    "config": "Configurazione"
  },
  "ja": {
    "config": "設定"
  },
  "ko": {
    "config": "설정"
  },
  "ru": {
    "config": "Конфигурация"
  },
  "pt": {
    "config": "Configuração"
  },
  "ar": {
    "config": "الإعدادات"
  },
  "hi": {
    "config": "कॉन्फ़िगरेशन"
  },
  "tr": {
    "config": "Yapılandırma"
  },
  "nl": {
    "config": "Configuratie"
  },
  "sv": {
    "config": "Konfiguration"
  },
  "pl": {
    "config": "Konfiguracja"
  },
  "vi": {
    "config": "Cấu hình"
  },
  "th": {
    "config": "การกำหนดค่า"
  },
  "id": {
    "config": "Konfigurasi"
  },
  "he": {
    "config": "הגדרות"
  },
  "ms": {
    "config": "Konfigurasi"
  },
  "no": {
    "config": "Konfigurasjon"
  }
}
</i18n>
