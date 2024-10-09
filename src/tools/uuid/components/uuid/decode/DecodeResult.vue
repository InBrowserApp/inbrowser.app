<template>
  <UndefinedResult v-if="!uuid" />

  <DecodeError v-if="uuid && !validate(uuid)" :uuid="uuid" />
  <DecodeNil v-if="uuid && version(uuid) === 0" :uuid="uuid" />
  <DecodeV1 v-if="uuid && version(uuid) === 1" :uuid="uuid" />
  <DecodeV3 v-if="uuid && version(uuid) === 3" :uuid="uuid" />
  <DecodeV4 v-if="uuid && version(uuid) === 4" :uuid="uuid" />
  <DecodeV5 v-if="uuid && version(uuid) === 5" :uuid="uuid" />
</template>

<script setup lang="ts">
import { version, validate } from 'uuid'

import UndefinedResult from './UndefinedResult.vue'
import DecodeNil from './DecodeNil.vue'
import DecodeV1 from './DecodeV1.vue'
import DecodeV3 from './DecodeV3.vue'
import DecodeV4 from './DecodeV4.vue'
import DecodeV5 from './DecodeV5.vue'
import DecodeError from './DecodeError.vue'

defineProps<{
  uuid?: string
}>()
</script>
