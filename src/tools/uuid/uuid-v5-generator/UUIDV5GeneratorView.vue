<template>
  <div>
    <n-h1 prefix="bar" align-text>{{ t('name') }}</n-h1>
    <n-p>{{ t('description') }}</n-p>
    <n-h2 prefix="bar" align-text>UUID v5</n-h2>
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

    <WhatIsUUIDv5 />
  </div>
</template>

<script lang="ts" setup>
import { meta } from './i18n'
import { useI18n } from 'vue-i18n'
import { NH1, NP, NH2 } from 'naive-ui'
import { useViewHead } from '@/tools/composables/use-view-head'
import CopyToClipboardButton from '@/components/base/buttons/CopyToClipboardButton.vue'
import { ref, computed } from 'vue'
import UUIDDisplay from '@/components/base/display/uuid/UUIDDisplay.vue'
import WhatIsUUIDv5 from './WhatIsUUIDv5.vue'
import NamespaceInput from '../uuid-v3-generator/NamespaceInput.vue'
import NameInput from '../uuid-v3-generator/NameInput.vue'

import { v5 as uuidV5 } from 'uuid'

const { t } = useI18n({
  messages: meta,
})

type UUIDV5 = `${string}-${string}-5${string}-${string}-${string}`

const namespace = ref<string>('6ba7b810-9dad-11d1-80b4-00c04fd430c8')
const name = ref<string>('example.com')

const uuid = computed<UUIDV5>(() => uuidV5(name.value, namespace.value) as UUIDV5)

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
