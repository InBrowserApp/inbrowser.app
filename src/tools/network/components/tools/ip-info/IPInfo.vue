<template>
  <n-descriptions label-placement="left" bordered :column="1" content-style="width: 100%">
    <n-descriptions-item label="IP Address">
      <span v-if="ip">
        {{ ip }}
      </span>
      <IPInfoDataLoadingUnknown :data="ip" />
    </n-descriptions-item>
    <n-descriptions-item label="Hostname">
      <span v-if="info.hostname">
        {{ info.hostname }}
      </span>
      <IPInfoDataLoadingUnknown :data="info.hostname" />
    </n-descriptions-item>
    <n-descriptions-item label="ISP">
      <span v-if="info.isp">
        {{ info.isp }}
      </span>
      <IPInfoDataLoadingUnknown :data="info.isp" />
    </n-descriptions-item>

    <n-descriptions-item label-style="white-space: nowrap" label="IP Organization">
      <span v-if="info.organization">
        {{ info.organization }}
      </span>
      <IPInfoDataLoadingUnknown :data="info.organization" />
    </n-descriptions-item>

    <n-descriptions-item label="ASN">
      <span v-if="info.asn">
        {{ info.asn }}
      </span>
      <IPInfoDataLoadingUnknown :data="info.asn" />
    </n-descriptions-item>

    <n-descriptions-item label-style="white-space: nowrap" label="ASN Organization">
      <span v-if="info.asn_organization">
        {{ info.asn_organization }}
      </span>
      <IPInfoDataLoadingUnknown :data="info.asn_organization" />
    </n-descriptions-item>

    <n-descriptions-item label="Location">
      <span v-if="location">
        <a :href="googleMapsLink" target="_blank" rel="noopener noreferrer" class="map-link">
          {{ location }}
        </a>
      </span>
      <IPInfoDataLoadingUnknown :data="location" />
    </n-descriptions-item>

    <n-descriptions-item label="Country">
      <span v-if="info.country">
        {{ info.country }}
      </span>
      <IPInfoDataLoadingUnknown :data="info.country" />
    </n-descriptions-item>

    <n-descriptions-item label="Timezone">
      <span v-if="info.timezone">
        {{ info.timezone }}
      </span>
      <IPInfoDataLoadingUnknown :data="info.timezone" />
    </n-descriptions-item>
  </n-descriptions>
</template>

<script setup lang="ts">
import { NDescriptions, NDescriptionsItem } from 'naive-ui'
import { IPInfoProviders, type IPInfo } from '../../../utils/ip/get-ip-info'
import { onMounted, ref, computed } from 'vue'
import IPInfoDataLoadingUnknown from './IPInfoDataLoadingUnknown.vue'

const props = defineProps<{
  ip?: string
}>()

const info = ref<IPInfo>({})

onMounted(async () => {
  const ip = props.ip

  if (!ip) {
    return
  }

  const promises = []

  for (const provider of IPInfoProviders) {
    promises.push(
      (async () => {
        const result = await provider.getIPInfo(ip)
        for (const [key, value] of Object.entries(result)) {
          // @ts-ignore
          if (info.value?.[key] === undefined) {
            // @ts-ignore
            info.value[key] = value
          }
        }
      })()
    )
  }

  await Promise.allSettled(promises)

  const fillNullKeys = [
    'timezone',
    'longitude',
    'latitude',
    'country',
    'continent',
    'city',
    'hostname',
    'asn',
    'asn_organization',
    'isp',
    'organization'
  ]

  for (const key of fillNullKeys) {
    // @ts-ignore
    if (info.value?.[key] === undefined) {
      // @ts-ignore
      info.value[key] = null
    }
  }
})

const location = computed(() => {
  if (info.value.longitude && info.value.latitude) {
    return `${info.value.longitude} / ${info.value.latitude}`
  } else if (info.value.longitude === undefined || info.value.latitude === undefined) {
    return undefined
  } else {
    return null
  }
})

const googleMapsLink = computed(() => {
  if (info.value.longitude && info.value.latitude) {
    return `https://www.google.com/maps/search/?api=1&query=${info.value.latitude},${info.value.longitude}`
  } else {
    return undefined
  }
})
</script>

<style scoped>
.map-link {
  color: inherit;
  text-decoration: none;
}

.map-link:hover {
  text-decoration: underline;
}
</style>
