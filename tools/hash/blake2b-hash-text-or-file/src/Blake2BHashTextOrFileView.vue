<template>
  <ToolDefaultPageLayout :info="toolInfo">
    <ToolSectionHeader>
      {{ t('blake2b-config') }}
    </ToolSectionHeader>
    <ToolSection>
      <n-form-item :label="t('output-length')">
        <n-slider v-model:value="length" :min="8" :max="512" :step="8" :marks="marks" />
      </n-form-item>
      <n-form-item :label="t('blake2-key-base64')">
        <n-input v-model:value="key" :placeholder="t('blake2-key-placeholder')" />
      </n-form-item>
    </ToolSection>

    <HashTextOrFileTemplate :hash="hashFunction" />
    <WhatIsBlake2 />
  </ToolDefaultPageLayout>
</template>

<script setup lang="ts">
import * as toolInfo from './info'
import { ToolDefaultPageLayout, ToolSection, ToolSectionHeader } from '@shared/ui/tool'
import { HashTextOrFileTemplate } from '@tools/hash-text-or-file-template'
import WhatIsBlake2 from './WhatIsBlake2.vue'
import { blake2bInit, blake2bUpdate, blake2bFinal } from 'blakejs'
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { NSlider, NInput, NFormItem } from 'naive-ui'

const { t } = useI18n()
const length = ref<number>(512)
const key = ref<string>('')
const marks = {
  8: '8',
  16: '16',
  32: '32',
  64: '64',
  128: '128',
  256: '256',
  512: '512',
}

const hashFunction = computed(() => {
  return async (blob: Blob): Promise<ArrayBuffer> => {
    const outputLength = length.value
    const inputKey = key.value

    const keyBytes =
      inputKey === '' ? undefined : Uint8Array.from(atob(inputKey), (c) => c.charCodeAt(0))

    const stream = blob.stream()

    const context = blake2bInit(outputLength / 8, keyBytes)
    const reader = stream.getReader()

    try {
      while (true) {
        const { done, value } = await reader.read()
        if (done) break
        blake2bUpdate(context, value)
      }
    } finally {
      reader.releaseLock()
    }

    const hashBytes = blake2bFinal(context)

    return hashBytes.buffer
  }
})
</script>

<i18n lang="json">
{
  "en": {
    "blake2b-config": "BLAKE2b Configuration",
    "output-length": "Output Length",
    "blake2-key-base64": "BLAKE2 Key (Base64)",
    "blake2-key-placeholder": "Optional key for keyed hashing (Base64 encoded)"
  },
  "zh": {
    "blake2b-config": "BLAKE2b 配置",
    "output-length": "输出长度",
    "blake2-key-base64": "BLAKE2 密钥（Base64）",
    "blake2-key-placeholder": "可选的密钥散列密钥（Base64 编码）"
  },
  "zh-CN": {
    "blake2b-config": "BLAKE2b 配置",
    "output-length": "输出长度",
    "blake2-key-base64": "BLAKE2 密钥（Base64）",
    "blake2-key-placeholder": "可选的密钥散列密钥（Base64 编码）"
  },
  "zh-TW": {
    "blake2b-config": "BLAKE2b 設定",
    "output-length": "輸出長度",
    "blake2-key-base64": "BLAKE2 金鑰（Base64）",
    "blake2-key-placeholder": "可選的金鑰雜湊金鑰（Base64 編碼）"
  },
  "zh-HK": {
    "blake2b-config": "BLAKE2b 設定",
    "output-length": "輸出長度",
    "blake2-key-base64": "BLAKE2 金鑰（Base64）",
    "blake2-key-placeholder": "可選的金鑰雜湊金鑰（Base64 編碼）"
  },
  "es": {
    "blake2b-config": "Configuración BLAKE2b",
    "output-length": "Longitud de Salida",
    "blake2-key-base64": "Clave BLAKE2 (Base64)",
    "blake2-key-placeholder": "Clave opcional para hash con clave (codificada en Base64)"
  },
  "fr": {
    "blake2b-config": "Configuration BLAKE2b",
    "output-length": "Longueur de Sortie",
    "blake2-key-base64": "Clé BLAKE2 (Base64)",
    "blake2-key-placeholder": "Clé optionnelle pour le hachage avec clé (encodée en Base64)"
  },
  "de": {
    "blake2b-config": "BLAKE2b-Konfiguration",
    "output-length": "Ausgabelänge",
    "blake2-key-base64": "BLAKE2-Schlüssel (Base64)",
    "blake2-key-placeholder": "Optionaler Schlüssel für Schlüssel-Hashing (Base64-kodiert)"
  },
  "it": {
    "blake2b-config": "Configurazione BLAKE2b",
    "output-length": "Lunghezza di Output",
    "blake2-key-base64": "Chiave BLAKE2 (Base64)",
    "blake2-key-placeholder": "Chiave opzionale per hash con chiave (codificata in Base64)"
  },
  "ja": {
    "blake2b-config": "BLAKE2b 設定",
    "output-length": "出力長",
    "blake2-key-base64": "BLAKE2キー（Base64）",
    "blake2-key-placeholder": "キー付きハッシュ用のオプションキー（Base64エンコード）"
  },
  "ko": {
    "blake2b-config": "BLAKE2b 구성",
    "output-length": "출력 길이",
    "blake2-key-base64": "BLAKE2 키 (Base64)",
    "blake2-key-placeholder": "키 해싱을 위한 선택적 키 (Base64 인코딩)"
  },
  "ru": {
    "blake2b-config": "Конфигурация BLAKE2b",
    "output-length": "Длина Вывода",
    "blake2-key-base64": "Ключ BLAKE2 (Base64)",
    "blake2-key-placeholder": "Дополнительный ключ для хеширования с ключом (кодировка Base64)"
  },
  "pt": {
    "blake2b-config": "Configuração BLAKE2b",
    "output-length": "Comprimento de Saída",
    "blake2-key-base64": "Chave BLAKE2 (Base64)",
    "blake2-key-placeholder": "Chave opcional para hash com chave (codificada em Base64)"
  },
  "ar": {
    "blake2b-config": "تكوين BLAKE2b",
    "output-length": "طول الإخراج",
    "blake2-key-base64": "مفتاح BLAKE2 (Base64)",
    "blake2-key-placeholder": "مفتاح اختياري للتشفير بالمفتاح (مُرمز بـ Base64)"
  },
  "hi": {
    "blake2b-config": "BLAKE2b कॉन्फ़िगरेशन",
    "output-length": "आउटपुट लंबाई",
    "blake2-key-base64": "BLAKE2 की (Base64)",
    "blake2-key-placeholder": "की हैशिंग के लिए वैकल्पिक की (Base64 एन्कोडेड)"
  },
  "tr": {
    "blake2b-config": "BLAKE2b Yapılandırması",
    "output-length": "Çıktı Uzunluğu",
    "blake2-key-base64": "BLAKE2 Anahtarı (Base64)",
    "blake2-key-placeholder": "Anahtarlı hash için isteğe bağlı anahtar (Base64 kodlu)"
  },
  "nl": {
    "blake2b-config": "BLAKE2b Configuratie",
    "output-length": "Uitvoerlengte",
    "blake2-key-base64": "BLAKE2 Sleutel (Base64)",
    "blake2-key-placeholder": "Optionele sleutel voor sleutel hashing (Base64 gecodeerd)"
  },
  "sv": {
    "blake2b-config": "BLAKE2b Konfiguration",
    "output-length": "Utdatalängd",
    "blake2-key-base64": "BLAKE2 Nyckel (Base64)",
    "blake2-key-placeholder": "Valfri nyckel för nyckel-hashing (Base64-kodad)"
  },
  "pl": {
    "blake2b-config": "Konfiguracja BLAKE2b",
    "output-length": "Długość Wyjścia",
    "blake2-key-base64": "Klucz BLAKE2 (Base64)",
    "blake2-key-placeholder": "Opcjonalny klucz do hashowania z kluczem (zakodowany w Base64)"
  },
  "vi": {
    "blake2b-config": "Cấu hình BLAKE2b",
    "output-length": "Độ Dài Đầu Ra",
    "blake2-key-base64": "Khóa BLAKE2 (Base64)",
    "blake2-key-placeholder": "Khóa tùy chọn cho băm có khóa (mã hóa Base64)"
  },
  "th": {
    "blake2b-config": "การกำหนดค่า BLAKE2b",
    "output-length": "ความยาวเอาต์พุต",
    "blake2-key-base64": "กุญแจ BLAKE2 (Base64)",
    "blake2-key-placeholder": "กุญแจเสริมสำหรับการแฮชด้วยกุญแจ (เข้ารหัส Base64)"
  },
  "id": {
    "blake2b-config": "Konfigurasi BLAKE2b",
    "output-length": "Panjang Output",
    "blake2-key-base64": "Kunci BLAKE2 (Base64)",
    "blake2-key-placeholder": "Kunci opsional untuk hashing berkey (dikodekan Base64)"
  },
  "he": {
    "blake2b-config": "תצורת BLAKE2b",
    "output-length": "אורך פלט",
    "blake2-key-base64": "מפתח BLAKE2 (Base64)",
    "blake2-key-placeholder": "מפתח אופציונלי עבור גיבוב עם מפתח (מקודד Base64)"
  },
  "ms": {
    "blake2b-config": "Konfigurasi BLAKE2b",
    "output-length": "Panjang Output",
    "blake2-key-base64": "Kunci BLAKE2 (Base64)",
    "blake2-key-placeholder": "Kunci pilihan untuk hashing berkunci (dikodkan Base64)"
  },
  "no": {
    "blake2b-config": "BLAKE2b Konfigurasjon",
    "output-length": "Utdatalengde",
    "blake2-key-base64": "BLAKE2 Nøkkel (Base64)",
    "blake2-key-placeholder": "Valgfri nøkkel for nøkkel-hashing (Base64-kodet)"
  }
}
</i18n>
