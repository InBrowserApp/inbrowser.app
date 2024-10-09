<template>
  <main>
    <BackButton />
    <n-h1 prefix="bar" align-text>Bulk Version 1 UUID</n-h1>
    <BulkUUIDV1Generator :size="size" :config="config" />
    <n-h2 prefix="bar" align-text>Config</n-h2>
    <BulkSizeInput v-model:size="size" />
    <UUIDV1Config v-model:config="config" />
    <n-h2 prefix="bar" align-text>What is a version 1 UUID?</n-h2>
    <n-p>
      Version 1 concatenates the 48-bit MAC address of the "node" (that is, the computer generating
      the UUID), with a 60-bit timestamp, being the number of 100-nanosecond intervals since
      midnight 15 October 1582 Coordinated Universal Time (UTC), the date on which the Gregorian
      calendar was first adopted outside the Catholic Church and Papal States. RFC 4122 states that
      the time value rolls over around 3400 AD, depending on the algorithm used, which implies that
      the 60-bit timestamp is a signed quantity. However some software, such as the libuuid library,
      treats the timestamp as unsigned, putting the rollover time in 5236 AD. The rollover time as
      defined by ITU-T Rec. X.667 is 3603 AD.
    </n-p>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { NH2, NH1, NP } from 'naive-ui'
import BulkUUIDV1Generator from '../components/uuid/generator/BulkUUIDV1Generator.vue'
import BulkSizeInput from '../components/uuid/config/BulkSizeInput.vue'
import UUIDV1Config from '../components/uuid/config/UUIDV1Config.vue'
import BackButton from '@/components/navigate/BackButton.vue'
import { useTitle, useDescription } from '@/composables/head'
import { faker } from '@faker-js/faker'

useTitle('Bulk Version 1 UUID Generator')
useDescription('Generate bulk version 1 UUIDs.')

const size = ref(10)
const config = ref({
  macAddress: faker.internet.mac().toUpperCase()
})
</script>
