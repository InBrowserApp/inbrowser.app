<template>
  <ToolViewTemplate title="Decode UUID">
    <UUIDInput v-model:uuid="uuid" />
    <n-h2 prefix="bar" align-text>Result</n-h2>
    <DecodeResult :uuid="uuid" />
    <div style="width: 100%" />
  </ToolViewTemplate>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { NH2 } from 'naive-ui'
import DecodeResult from '../components/uuid/decode/DecodeResult.vue'
import UUIDInput from '../components/misc/UUIDInput.vue'
import { v4 as uuidv4 } from 'uuid'
import { useTitle, useDescription } from '@/composables/head'
import ToolViewTemplate from '@/components/layouts/tool-view-template/ToolViewTemplate.vue'

useTitle('Decode UUID')
useDescription('Decode your UUID, get the version, variant, and other information.')

const uuid = ref(uuidv4())
</script>
