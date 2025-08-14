<template>
  <div>
    <ToolSectionHeader>IPv4</ToolSectionHeader>
    <ToolSection>
      <n-collapse v-if="typeof ipv4 === 'string'" display-directive="show">
        <n-collapse-item :title="ipv4" :name="ipv4">
          <IPInfo :ip="ipv4" />
        </n-collapse-item>
      </n-collapse>
      <MyIPLoadingNull v-else :ip="ipv4" />
    </ToolSection>

    <ToolSectionHeader>IPv6</ToolSectionHeader>
    <ToolSection>
      <n-collapse v-if="typeof ipv6 === 'string'" display-directive="show">
        <n-collapse-item :title="ipv6" :name="ipv6">
          <IPInfo :ip="ipv6" />
        </n-collapse-item>
      </n-collapse>
      <MyIPLoadingNull v-else :ip="ipv6" />
    </ToolSection>

    <template v-if="ipWebRTCLeak">
      <ToolSectionHeader>{{ t('webrtc-leak') }}</ToolSectionHeader>
      <ToolSection>
        <n-collapse display-directive="show">
          <n-collapse-item v-for="ip of ipWebRTCLeak" :key="ip" :title="ip" :name="ip">
            <IPInfo :ip="ip" />
          </n-collapse-item>
        </n-collapse>
      </ToolSection>
    </template>

    <HowToGetYourIPAddress />
  </div>
</template>

<script setup lang="ts">
import { NCollapse, NCollapseItem } from 'naive-ui'
import { getMyIPv4, getMyIPv6 } from '@utils/ip'
import { computedAsync } from '@vueuse/core'
import { useI18n } from 'vue-i18n'
import MyIPLoadingNull from './MyIPLoadingNull.vue'
import { IPInfo } from '@shared/ui/domain/ip'
import { ToolSectionHeader, ToolSection } from '@shared/ui/tool'
import HowToGetYourIPAddress from './HowToGetYourIPAddress.vue'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { getIPs } from 'webrtc-ips'

const { t } = useI18n()

const ipv4 = computedAsync<string | undefined | null>(async () => {
  try {
    return await getMyIPv4()
  } catch (error) {
    console.error(error)
    return null
  }
})
const ipv6 = computedAsync<string | undefined | null>(async () => {
  try {
    return await getMyIPv6()
  } catch (error) {
    console.error(error)
    return null
  }
})

const ipWebRTCLeak = computedAsync<string[] | undefined>(async () => {
  try {
    const ips = await getIPs()
    const addresses = ips.map((ip: { address: string; v6: boolean }) => ip.address)
    if (addresses.length === 0) {
      return undefined
    }

    return addresses
  } catch (error) {
    console.error(error)
    return undefined
  }
}, undefined)
</script>

<i18n lang="json">
{
  "en": {
    "webrtc-leak": "WebRTC Leak"
  },
  "zh": {
    "webrtc-leak": "WebRTC 泄漏"
  },
  "zh-CN": {
    "webrtc-leak": "WebRTC 泄漏"
  },
  "zh-TW": {
    "webrtc-leak": "WebRTC 洩漏"
  },
  "zh-HK": {
    "webrtc-leak": "WebRTC 洩漏"
  },
  "es": {
    "webrtc-leak": "Fuga de WebRTC"
  },
  "fr": {
    "webrtc-leak": "Fuite WebRTC"
  },
  "de": {
    "webrtc-leak": "WebRTC-Leck"
  },
  "it": {
    "webrtc-leak": "Perdita WebRTC"
  },
  "ja": {
    "webrtc-leak": "WebRTC リーク"
  },
  "ko": {
    "webrtc-leak": "WebRTC 누출"
  },
  "ru": {
    "webrtc-leak": "Утечка WebRTC"
  },
  "pt": {
    "webrtc-leak": "Vazamento WebRTC"
  },
  "ar": {
    "webrtc-leak": "تسريب WebRTC"
  },
  "hi": {
    "webrtc-leak": "WebRTC लीक"
  },
  "tr": {
    "webrtc-leak": "WebRTC Sızıntısı"
  },
  "nl": {
    "webrtc-leak": "WebRTC Lek"
  },
  "sv": {
    "webrtc-leak": "WebRTC-läcka"
  },
  "pl": {
    "webrtc-leak": "Wyciek WebRTC"
  },
  "vi": {
    "webrtc-leak": "Rò rỉ WebRTC"
  },
  "th": {
    "webrtc-leak": "การรั่วไหลของ WebRTC"
  },
  "id": {
    "webrtc-leak": "Kebocoran WebRTC"
  },
  "he": {
    "webrtc-leak": "דליפת WebRTC"
  },
  "ms": {
    "webrtc-leak": "Kebocoran WebRTC"
  },
  "no": {
    "webrtc-leak": "WebRTC-lekkasje"
  }
}
</i18n>
