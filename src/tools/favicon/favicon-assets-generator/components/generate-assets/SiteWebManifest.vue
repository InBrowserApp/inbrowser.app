<template>
  <n-code language="json" :code="code" />
  <!-- <div /> -->
</template>

<script setup lang="ts">
import { NCode } from 'naive-ui'
import type { GeneralInfoOptions } from '../../utils/favicon-generator/general-info'
import { computed } from 'vue'
import { generateManifestText } from '../../utils/favicon-generator/general-info'

const props = defineProps<{
  generalInfoOptions: GeneralInfoOptions
}>()

const code = computed(() => {
  return generateManifestText(props.generalInfoOptions)
})
</script>
