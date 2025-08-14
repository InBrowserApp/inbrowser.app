<template>
  <div class="container">
    <PWAPreviewWindowsTaskbar :image="image" :options="props.options" />
  </div>
</template>

<script setup lang="ts">
import type { PWAOptions } from '../../../utils/favicon-generator/pwa'
import type { GeneralInfoOptions } from '../../../utils/favicon-generator/general-info'
import { computed } from 'vue'
import PWAPreviewWindowsTaskbar from './PWAPreviewWindowsTaskbar.vue'

const props = defineProps<{
  image: Blob | undefined
  options: PWAOptions
  generalInfoOptions: GeneralInfoOptions
}>()

const image = computed<Blob | undefined>(() => {
  if (props.options.image) {
    return props.options.image
  } else {
    return props.image
  }
})
</script>
