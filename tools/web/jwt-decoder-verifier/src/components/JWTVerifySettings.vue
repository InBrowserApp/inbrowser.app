<template>
  <ToolSectionHeader>{{ t('verify-settings') }}</ToolSectionHeader>
  <ToolSection>
    <n-grid cols="1 s:2" responsive="screen" :x-gap="12" :y-gap="12">
      <n-form-item-gi :label="t('secret')" :show-feedback="false">
        <n-input
          v-model:value="secret"
          type="password"
          show-password-on="click"
          :placeholder="t('secret')"
        />
      </n-form-item-gi>
      <n-form-item-gi :label="t('algorithm')" :show-feedback="false">
        <n-select v-model:value="alg" :options="algOptions" />
      </n-form-item-gi>
    </n-grid>
  </ToolSection>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { NGrid, NFormItemGi, NInput, NSelect } from 'naive-ui'
import { ToolSection, ToolSectionHeader } from '@shared/ui/tool'

type Alg =
  | 'auto'
  | 'HS256'
  | 'HS384'
  | 'HS512'
  | 'RS256'
  | 'RS384'
  | 'RS512'
  | 'PS256'
  | 'PS384'
  | 'PS512'
  | 'ES256'
  | 'ES384'
  | 'ES512'
  | 'EdDSA'

const secret = defineModel<string>('secret', { required: true })
const alg = defineModel<Alg>('alg', { required: true })

const { t } = useI18n()

const algOptions = computed(() => [
  { label: t('auto'), value: 'auto' },
  { label: 'HS256', value: 'HS256' },
  { label: 'HS384', value: 'HS384' },
  { label: 'HS512', value: 'HS512' },
  { label: 'RS256', value: 'RS256' },
  { label: 'RS384', value: 'RS384' },
  { label: 'RS512', value: 'RS512' },
  { label: 'PS256', value: 'PS256' },
  { label: 'PS384', value: 'PS384' },
  { label: 'PS512', value: 'PS512' },
  { label: 'ES256', value: 'ES256' },
  { label: 'ES384', value: 'ES384' },
  { label: 'ES512', value: 'ES512' },
  { label: 'EdDSA', value: 'EdDSA' },
])
</script>

<i18n lang="json">
{
  "en": {
    "verify-settings": "Verify Settings",
    "secret": "Secret",
    "algorithm": "Algorithm",
    "auto": "Auto"
  },
  "zh": {
    "verify-settings": "验证设置",
    "secret": "密钥",
    "algorithm": "算法",
    "auto": "自动"
  },
  "zh-CN": {
    "verify-settings": "验证设置",
    "secret": "密钥",
    "algorithm": "算法",
    "auto": "自动"
  },
  "zh-TW": {
    "verify-settings": "驗證設定",
    "secret": "密鑰",
    "algorithm": "演算法",
    "auto": "自動"
  },
  "zh-HK": {
    "verify-settings": "驗證設定",
    "secret": "密鑰",
    "algorithm": "演算法",
    "auto": "自動"
  },
  "es": {
    "verify-settings": "Verify Settings",
    "secret": "Secret",
    "algorithm": "Algorithm",
    "auto": "Auto"
  },
  "fr": {
    "verify-settings": "Verify Settings",
    "secret": "Secret",
    "algorithm": "Algorithm",
    "auto": "Auto"
  },
  "de": {
    "verify-settings": "Verify Settings",
    "secret": "Secret",
    "algorithm": "Algorithm",
    "auto": "Auto"
  },
  "it": {
    "verify-settings": "Verify Settings",
    "secret": "Secret",
    "algorithm": "Algorithm",
    "auto": "Auto"
  },
  "ja": {
    "verify-settings": "Verify Settings",
    "secret": "Secret",
    "algorithm": "Algorithm",
    "auto": "Auto"
  },
  "ko": {
    "verify-settings": "Verify Settings",
    "secret": "Secret",
    "algorithm": "Algorithm",
    "auto": "Auto"
  },
  "ru": {
    "verify-settings": "Verify Settings",
    "secret": "Secret",
    "algorithm": "Algorithm",
    "auto": "Auto"
  },
  "pt": {
    "verify-settings": "Verify Settings",
    "secret": "Secret",
    "algorithm": "Algorithm",
    "auto": "Auto"
  },
  "ar": {
    "verify-settings": "Verify Settings",
    "secret": "Secret",
    "algorithm": "Algorithm",
    "auto": "Auto"
  },
  "hi": {
    "verify-settings": "Verify Settings",
    "secret": "Secret",
    "algorithm": "Algorithm",
    "auto": "Auto"
  },
  "tr": {
    "verify-settings": "Verify Settings",
    "secret": "Secret",
    "algorithm": "Algorithm",
    "auto": "Auto"
  },
  "nl": {
    "verify-settings": "Verify Settings",
    "secret": "Secret",
    "algorithm": "Algorithm",
    "auto": "Auto"
  },
  "sv": {
    "verify-settings": "Verify Settings",
    "secret": "Secret",
    "algorithm": "Algorithm",
    "auto": "Auto"
  },
  "pl": {
    "verify-settings": "Verify Settings",
    "secret": "Secret",
    "algorithm": "Algorithm",
    "auto": "Auto"
  },
  "vi": {
    "verify-settings": "Verify Settings",
    "secret": "Secret",
    "algorithm": "Algorithm",
    "auto": "Auto"
  },
  "th": {
    "verify-settings": "Verify Settings",
    "secret": "Secret",
    "algorithm": "Algorithm",
    "auto": "Auto"
  },
  "id": {
    "verify-settings": "Verify Settings",
    "secret": "Secret",
    "algorithm": "Algorithm",
    "auto": "Auto"
  },
  "he": {
    "verify-settings": "Verify Settings",
    "secret": "Secret",
    "algorithm": "Algorithm",
    "auto": "Auto"
  },
  "ms": {
    "verify-settings": "Verify Settings",
    "secret": "Secret",
    "algorithm": "Algorithm",
    "auto": "Auto"
  },
  "no": {
    "verify-settings": "Verify Settings",
    "secret": "Secret",
    "algorithm": "Algorithm",
    "auto": "Auto"
  }
}
</i18n>
