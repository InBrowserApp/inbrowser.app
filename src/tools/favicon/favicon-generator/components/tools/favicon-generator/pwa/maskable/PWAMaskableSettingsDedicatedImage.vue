<template>
  <div v-if="options.maskableImage === undefined">
    <n-p>You are not using a dedicated image.</n-p>
    <ImageUpload @update:file="options.maskableImage = $event" />
  </div>
  <div v-else>
    <n-p>You are using a dedicated image.</n-p>
    <n-image :src="imageURL" class="dedicated-image" />
    <div>
      <n-button size="small" text @click="options.maskableImage = undefined">
        <template #icon>
          <n-icon :component="Delete16Regular" />
        </template>
        Remove
      </n-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { NButton, NIcon, NImage, NP } from 'naive-ui'
import type { PWAOptions } from '../../../../../utils/favicon-generator/pwa'
import { useVModel, useObjectUrl } from '@vueuse/core'
import ImageUpload from '../../ImageUpload.vue'
import { Delete16Regular } from '@vicons/fluent'
import { toRef, computed } from 'vue'

const props = defineProps<{
  options: PWAOptions
}>()

const emit = defineEmits(['update:options'])

const options = useVModel(props, 'options', emit)

const optionsRef = toRef(props, 'options')
const image = computed<Blob | undefined>(() => optionsRef.value.maskableImage)

const imageURL = useObjectUrl(image)
</script>

<style scoped>
.dedicated-image {
  aspect-ratio: 1;
  object-fit: contain;
  max-height: 7em;
  margin-top: 1em;
  margin-bottom: 1em;
}
</style>
