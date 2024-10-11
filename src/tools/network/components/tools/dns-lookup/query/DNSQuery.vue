<template>
  <n-h3 prefix="bar" align-text>Query</n-h3>

  <DomainInput v-model:domain="domain" />
  <RecordTypeInput v-model:types="recordTypes" />
  <DOHServerSelect v-model:value="dohServer" />

  <n-button @click="lookup" round :loading="loading">
    <template #icon>
      <n-icon>
        <DocumentSearch16Regular />
      </n-icon>
    </template>
    Lookup
  </n-button>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import DomainInput from './DomainInput.vue'
import DOHServerSelect from '../../../doh/DOHServerSelect.vue'
import { NButton, NH3, NIcon } from 'naive-ui'
import { makeDOHQuery } from '../../../../utils/dns/doh'
import RecordTypeInput from './RecordTypeInput.vue'
import { DocumentSearch16Regular } from '@vicons/fluent'
import { useStorage } from '@vueuse/core'

const recordTypes = useStorage('dns-lookup-record-types', ['A', 'AAAA'])
const domain = useStorage('dns-lookup-domain', 'example.com')
const dohServer = useStorage('doh-server', 'https://cloudflare-dns.com/dns-query')
const loading = ref(false)

const emit = defineEmits(['update:results'])

async function lookup() {
  loading.value = true
  try {
    const responses = await Promise.all(
      recordTypes.value.map(async (type) => {
        return {
          question: {
            name: domain.value,
            type
          },
          result: await makeDOHQuery(dohServer.value, {
            name: domain.value,
            type
          })
        }
      })
    )

    emit('update:results', responses)
  } catch (e) {
    console.error(e)
  } finally {
    loading.value = false
  }
}
</script>
