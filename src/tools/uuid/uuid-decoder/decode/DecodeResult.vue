<template>
  <template v-if="uuid && validate(uuid)">
    <DecodeDetailResult :result="decode(uuid)" />
  </template>
  <template v-else>
    <DecodeError />
  </template>
</template>

<script setup lang="ts">
import { validate } from 'uuid'

import DecodeError from './DecodeError.vue'
import DecodeDetailResult from './DecodeDetailResult.vue'
import { decode } from '@/utils/base/uuid/decode'

defineProps<{
  uuid?: string
}>()
</script>
