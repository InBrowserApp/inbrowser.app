<template>
  <div>
    <n-h3 prefix="bar" align-text>IPv4</n-h3>
    <n-p>
      <n-collapse v-if="typeof ipv4 === 'string'" display-directive="show">
        <n-collapse-item :title="ipv4" :name="ipv4">
          <IPInfo :ip="ipv4" />
        </n-collapse-item>
      </n-collapse>
      <MyIPLoadingNull v-else :ip="ipv4" />
    </n-p>

    <n-h3 prefix="bar" align-text>IPv6</n-h3>
    <n-p>
      <n-collapse v-if="typeof ipv6 === 'string'" display-directive="show">
        <n-collapse-item :title="ipv6" :name="ipv6">
          <IPInfo :ip="ipv6" />
        </n-collapse-item>
      </n-collapse>
      <MyIPLoadingNull v-else :ip="ipv6" />
    </n-p>

    <template v-if="ipWebRTCLeak">
      <n-h3 prefix="bar" align-text>WebRTC Leak</n-h3>
      <n-p>
        <n-collapse display-directive="show">
          <n-collapse-item v-for="ip of ipWebRTCLeak" :key="ip" :title="ip" :name="ip">
            <IPInfo :ip="ip" />
          </n-collapse-item>
        </n-collapse>
      </n-p>
    </template>
  </div>
</template>

<script setup lang="ts">
import { NH3, NP, NCollapse, NCollapseItem } from 'naive-ui'
import { getMyIPv4, getMyIPv6 } from '../../../utils/ip/get-my-ip'
import { computedAsync } from '@vueuse/core'
import MyIPLoadingNull from './MyIPLoadingNull.vue'

// @ts-ignore
import { getIPs } from 'webrtc-ips'
import IPInfo from '../ip-info/IPInfo.vue'

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
