<template>
  <ToolDefaultPageLayout :info="toolInfo">
    <ToolSectionHeader>{{ t('ip-or-domain') }}</ToolSectionHeader>
    <ToolSection>
      <IPAddressSearchInput />
    </ToolSection>
    <HowDoWeGetIPInfo />
  </ToolDefaultPageLayout>
</template>

<script setup lang="ts">
import * as toolInfo from './info'
import { ToolDefaultPageLayout, ToolSectionHeader, ToolSection } from '@shared/ui/tool'
import { IPAddressSearchInput } from '@shared/ui/domain/ip'
import { useI18n } from 'vue-i18n'
import HowDoWeGetIPInfo from './HowDoWeGetIPInfo.vue'

const { t } = useI18n()
</script>

<i18n lang="json">
{
  "en": {
    "ip-or-domain": "IPv4 / IPv6 / Domain / URL"
  },
  "zh": {
    "ip-or-domain": "IPv4 / IPv6 / 域名 / URL"
  },
  "zh-CN": {
    "ip-or-domain": "IPv4 / IPv6 / 域名 / URL"
  },
  "zh-TW": {
    "ip-or-domain": "IPv4 / IPv6 / 域名 / URL"
  },
  "zh-HK": {
    "ip-or-domain": "IPv4 / IPv6 / 域名 / URL"
  },
  "es": {
    "ip-or-domain": "IPv4 / IPv6 / Dominio / URL"
  },
  "fr": {
    "ip-or-domain": "IPv4 / IPv6 / Domaine / URL"
  },
  "de": {
    "ip-or-domain": "IPv4 / IPv6 / Domain / URL"
  },
  "it": {
    "ip-or-domain": "IPv4 / IPv6 / Dominio / URL"
  },
  "ja": {
    "ip-or-domain": "IPv4 / IPv6 / ドメイン / URL"
  },
  "ko": {
    "ip-or-domain": "IPv4 / IPv6 / 도메인 / URL"
  },
  "ru": {
    "ip-or-domain": "IPv4 / IPv6 / Домен / URL"
  },
  "pt": {
    "ip-or-domain": "IPv4 / IPv6 / Domínio / URL"
  },
  "ar": {
    "ip-or-domain": "IPv4 / IPv6 / نطاق / URL"
  },
  "hi": {
    "ip-or-domain": "IPv4 / IPv6 / डोमेन / URL"
  },
  "tr": {
    "ip-or-domain": "IPv4 / IPv6 / Alan Adı / URL"
  },
  "nl": {
    "ip-or-domain": "IPv4 / IPv6 / Domein / URL"
  },
  "sv": {
    "ip-or-domain": "IPv4 / IPv6 / Domän / URL"
  },
  "pl": {
    "ip-or-domain": "IPv4 / IPv6 / Domena / URL"
  },
  "vi": {
    "ip-or-domain": "IPv4 / IPv6 / Tên miền / URL"
  },
  "th": {
    "ip-or-domain": "IPv4 / IPv6 / โดเมน / URL"
  },
  "id": {
    "ip-or-domain": "IPv4 / IPv6 / Domain / URL"
  },
  "he": {
    "ip-or-domain": "IPv4 / IPv6 / דומיין / URL"
  },
  "ms": {
    "ip-or-domain": "IPv4 / IPv6 / Domain / URL"
  },
  "no": {
    "ip-or-domain": "IPv4 / IPv6 / Domene / URL"
  }
}
</i18n>
