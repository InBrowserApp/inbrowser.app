<template>
  <div>
    <JWTTokenInput v-model:value="tokenInput" :placeholder="jwtPlaceholder" />

    <ToolSectionHeader v-if="decodedPayload">{{ t('decoded') }}</ToolSectionHeader>
    <ToolSection v-if="decodedPayload">
      <n-grid cols="1 s:2" responsive="screen" :x-gap="12" :y-gap="12">
        <n-gi>
          <n-h3>{{ t('payload') }}</n-h3>
          <JWTJsonCard :json="decodedPayload" />
        </n-gi>
        <n-gi>
          <n-h3>{{ t('header') }}</n-h3>
          <JWTJsonCard :json="decodedHeader" />
        </n-gi>
      </n-grid>
    </ToolSection>

    <JWTVerifySettings v-model:secret="secret" v-model:alg="alg" />

    <ToolSectionHeader v-if="secret">{{ t('status') }}</ToolSectionHeader>
    <ToolSection v-if="secret">
      <n-alert :type="statusType" :title="statusTitle" :show-icon="true">{{
        statusDetail
      }}</n-alert>
    </ToolSection>

    <ToolSectionHeader v-if="problems.length">{{ t('problems') }}</ToolSectionHeader>
    <ToolSection v-if="problems.length">
      <ul v-if="problems.length">
        <li v-for="(p, idx) in problems" :key="idx">{{ p }}</li>
      </ul>
      <n-text v-else depth="3">{{ t('no-problems') }}</n-text>
    </ToolSection>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { NGrid, NGi, NText, NAlert, NH3 } from 'naive-ui'
import { ToolSectionHeader, ToolSection } from '@shared/ui/tool'
import JWTJsonCard from './JWTJsonCard.vue'
import JWTTokenInput from './JWTTokenInput.vue'
import JWTVerifySettings from './JWTVerifySettings.vue'
import { decode, verify } from 'hono/jwt'
import { watchEffect } from 'vue'
import { useStorage } from '@vueuse/core'

const { t } = useI18n()

const jwtPlaceholder =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ1c2VyIiwicm9sZSI6ImFkbWluIn0.Ds9haC0uAzNBPv5XixZeIOInFNxCJfmeCjNnN1rPlNs'
const tokenInput = useStorage<string>('tools:jwt-decoder-verifier:token', jwtPlaceholder)

// Allowed algorithms and helper guard
const allowedAlgs = [
  'HS256',
  'HS384',
  'HS512',
  'RS256',
  'RS384',
  'RS512',
  'PS256',
  'PS384',
  'PS512',
  'ES256',
  'ES384',
  'ES512',
  'EdDSA',
] as const

type AllowedAlg = (typeof allowedAlgs)[number]

function toAllowedAlg(value: unknown): AllowedAlg | undefined {
  return typeof value === 'string' && (allowedAlgs as readonly string[]).includes(value)
    ? (value as AllowedAlg)
    : undefined
}

type AlgorithmType = 'auto' | AllowedAlg

const alg = useStorage<AlgorithmType>('tools:jwt-decoder-verifier:alg', 'auto')
const secret = useStorage('tools:jwt-decoder-verifier:secret', '')

const normalizedToken = computed(() => tokenInput.value.trim())

const decodedHeader = computed(() => {
  try {
    if (!normalizedToken.value) return null
    return decode(normalizedToken.value)?.header ?? null
  } catch {
    return null
  }
})

const decodedPayload = computed(() => {
  try {
    if (!normalizedToken.value) return null
    return decode(normalizedToken.value)?.payload ?? null
  } catch {
    return null
  }
})

const detectedAlg = computed<string | null>(() => {
  const header = decodedHeader.value as unknown
  if (header && typeof header === 'object' && 'alg' in (header as Record<string, unknown>)) {
    const a = (header as { alg?: unknown }).alg
    return typeof a === 'string' ? a : null
  }
  return null
})

const problems = ref<string[]>([])

const statusType = computed(() => {
  if (!normalizedToken.value) return 'default'
  if (!secret.value) return 'default'
  return problems.value.length ? 'error' : 'success'
})

const statusTitle = computed(() => {
  if (!normalizedToken.value) return t('decoded-only')
  if (!secret.value) return t('decoded-only')
  return problems.value.length ? t('failed') : t('verified')
})

const statusDetail = computed(() => {
  if (!normalizedToken.value) return t('enter-token')
  if (!secret.value) return t('enter-secret')
  return problems.value.length ? problems.value[0] : t('ok')
})

watchEffect(async () => {
  problems.value = []
  if (!normalizedToken.value || !secret.value) return
  try {
    const selectedAlg =
      alg.value === 'auto' ? toAllowedAlg(detectedAlg.value) : (alg.value as AllowedAlg)
    if (!selectedAlg) {
      problems.value.push(t('no-alg'))
      return
    }
    await verify(normalizedToken.value, secret.value, selectedAlg)
  } catch (e: unknown) {
    problems.value.push(e instanceof Error ? e.message : String(e))
  }
})
</script>

<i18n lang="json">
{
  "en": {
    "token": "Token",
    "strip-bearer": "Strip 'Bearer ' prefix",
    "decoded": "Decoded",
    "header": "Header",
    "payload": "Payload",
    "verify-settings": "Verify Settings",
    "algorithm": "Algorithm",
    "auto": "Auto",
    "secret": "Secret",
    "status": "Status",
    "problems": "Problems",
    "no-problems": "No problems detected",
    "decoded-only": "Decoded only",
    "failed": "Verification failed",
    "verified": "Verified",
    "enter-token": "Enter a JWT token",
    "enter-secret": "Enter secret to verify",
    "ok": "Signature verified",
    "no-alg": "No algorithm detected"
  },
  "zh": {
    "token": "令牌",
    "strip-bearer": "去除 'Bearer ' 前缀",
    "lenient": "宽松 base64url",
    "decoded": "解码结果",
    "header": "Header",
    "payload": "Payload",
    "verify-settings": "验证设置",
    "algorithm": "算法",
    "auto": "自动",
    "secret": "密钥",
    "status": "状态",
    "problems": "问题",
    "no-problems": "未发现问题",
    "decoded-only": "仅解码",
    "failed": "验证失败",
    "verified": "已验证",
    "enter-token": "请输入 JWT 令牌",
    "enter-secret": "请输入密钥进行验证",
    "ok": "签名验证通过",
    "no-alg": "未检测到算法"
  }
}
</i18n>
