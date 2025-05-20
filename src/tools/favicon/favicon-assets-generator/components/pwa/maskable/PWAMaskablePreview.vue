<template>
  <div class="container">
    <PWAPreviewAndroid :image="image" :options="props.options" />
  </div>
</template>

<script setup lang="ts">
import type { PWAOptions } from '../../../utils/favicon-generator/pwa'
import type { GeneralInfoOptions } from '../../../utils/favicon-generator/general-info'
import PWAPreviewAndroid from './PWAPreviewAndroid.vue'

const props = defineProps<{
  image: Blob | undefined
  options: PWAOptions
  generalInfoOptions: GeneralInfoOptions
}>()
</script>
