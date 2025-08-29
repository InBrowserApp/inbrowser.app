<template>
  <div>
    <ToolSectionHeader>{{ t('payload') }}</ToolSectionHeader>
    <ToolSection>
      <JSONInput v-model:value="payloadText" />
    </ToolSection>

    <ToolSectionHeader>{{ t('secret-and-alg') }}</ToolSectionHeader>
    <ToolSection>
      <JWTOptionsInput v-model:secret="secret" v-model:alg="alg" />
    </ToolSection>

    <ToolSectionHeader>{{ t('token') }}</ToolSectionHeader>
    <ToolSection>
      <CopyToClipboardTooltip :content="token" #="{ copy }">
        <n-text
          code
          style="font-size: 1.1em; cursor: pointer; word-break: break-all"
          @click="copy"
          >{{ token }}</n-text
        >
      </CopyToClipboardTooltip>
    </ToolSection>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { NText } from 'naive-ui'
import { CopyToClipboardTooltip } from '@shared/ui/base'
import { ToolSectionHeader, ToolSection } from '@shared/ui/tool'
import { computedAsync } from '@vueuse/core'
import JSONInput from './JSONInput.vue'
import JWTOptionsInput from './JWTOptionsInput.vue'
import { sign } from 'hono/jwt'
import { useStorage } from '@vueuse/core'

const { t } = useI18n()

type AlgorithmType =
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

const payloadText = useStorage<string>(
  'tools:jwt-signer:payload',
  JSON.stringify(
    {
      sub: 'user',
      role: 'admin',
    },
    null,
  ),
)
const secret = useStorage<string>('tools:jwt-signer:secret', crypto.randomUUID())
const alg = useStorage<AlgorithmType>('tools:jwt-signer:alg', 'HS256')
const signing = ref<boolean>(false)

const token = computedAsync(
  async () => {
    const payload = JSON.parse(payloadText.value)
    return await sign(payload, secret.value, alg.value)
  },
  '',
  signing,
)
</script>

<i18n lang="json">
{
  "en": {
    "payload": "Payload (JSON)",
    "secret-and-alg": "Secret & Algorithm",
    "token": "Token"
  },
  "zh": {
    "payload": "载荷 (JSON)",
    "secret-and-alg": "密钥与算法",
    "token": "令牌"
  },
  "zh-CN": {
    "payload": "载荷 (JSON)",
    "secret-and-alg": "密钥与算法",
    "token": "令牌"
  },
  "zh-TW": {
    "payload": "負載 (JSON)",
    "secret-and-alg": "金鑰與演算法",
    "token": "權杖"
  },
  "zh-HK": {
    "payload": "負載 (JSON)",
    "secret-and-alg": "金鑰與演算法",
    "token": "權杖"
  },
  "es": {
    "payload": "Payload (JSON)",
    "secret-and-alg": "Secreto y Algoritmo",
    "token": "Token"
  },
  "fr": {
    "payload": "Charge utile (JSON)",
    "secret-and-alg": "Secret et Algorithme",
    "token": "Jeton"
  },
  "de": {
    "payload": "Payload (JSON)",
    "secret-and-alg": "Geheimnis & Algorithmus",
    "token": "Token"
  },
  "it": {
    "payload": "Payload (JSON)",
    "secret-and-alg": "Segreto e Algoritmo",
    "token": "Token"
  },
  "ja": {
    "payload": "ペイロード (JSON)",
    "secret-and-alg": "シークレットとアルゴリズム",
    "token": "トークン"
  },
  "ko": {
    "payload": "페이로드 (JSON)",
    "secret-and-alg": "시크릿 및 알고리즘",
    "token": "토큰"
  },
  "ru": {
    "payload": "Полезная нагрузка (JSON)",
    "secret-and-alg": "Секрет и алгоритм",
    "token": "Токен"
  },
  "pt": {
    "payload": "Payload (JSON)",
    "secret-and-alg": "Segredo e Algoritmo",
    "token": "Token"
  },
  "ar": {
    "payload": "الحمولة (JSON)",
    "secret-and-alg": "المفتاح والخوارزمية",
    "token": "الرمز"
  },
  "hi": {
    "payload": "पे लोड (JSON)",
    "secret-and-alg": "सीक्रेट और एल्गोरिथ्म",
    "token": "टोकन"
  },
  "tr": {
    "payload": "Payload (JSON)",
    "secret-and-alg": "Gizli Anahtar ve Algoritma",
    "token": "Token"
  },
  "nl": {
    "payload": "Payload (JSON)",
    "secret-and-alg": "Geheim & Algoritme",
    "token": "Token"
  },
  "sv": {
    "payload": "Payload (JSON)",
    "secret-and-alg": "Hemlighet och Algoritm",
    "token": "Token"
  },
  "pl": {
    "payload": "Ładunek (JSON)",
    "secret-and-alg": "Sekret i Algorytm",
    "token": "Token"
  },
  "vi": {
    "payload": "Payload (JSON)",
    "secret-and-alg": "Bí mật & Thuật toán",
    "token": "Token"
  },
  "th": {
    "payload": "Payload (JSON)",
    "secret-and-alg": "คีย์ลับและอัลกอริทึม",
    "token": "โทเค็น"
  },
  "id": {
    "payload": "Payload (JSON)",
    "secret-and-alg": "Rahasia & Algoritma",
    "token": "Token"
  },
  "he": {
    "payload": "מטען (JSON)",
    "secret-and-alg": "סוד ואלגוריתם",
    "token": "טוקן"
  },
  "ms": {
    "payload": "Payload (JSON)",
    "secret-and-alg": "Rahsia & Algoritma",
    "token": "Token"
  },
  "no": {
    "payload": "Payload (JSON)",
    "secret-and-alg": "Hemmelighet & Algoritme",
    "token": "Token"
  }
}
</i18n>
