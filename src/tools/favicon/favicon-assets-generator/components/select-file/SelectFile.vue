<template>
  <n-p>
    <template v-if="image">
      <div class="selected-layout">
        <img :src="imageURL" class="selected-image" />
        <div>
          <div>Dimensions: {{ imageSize }}</div>
          <div>Type: {{ image.type }}</div>
          <div>Size: {{ image.size }}</div>

          <n-button size="small" text @click="image = undefined">
            <template #icon>
              <n-icon :component="Delete16Regular" />
            </template>
            Reselect Image
          </n-button>
        </div>
      </div>
    </template>
    <template v-else>
      <ImageUpload @update:file="image = $event" />
      <n-button size="small" text @click="useDemoIcon">
        <template #icon>
          <n-icon :component="Icons20Regular" />
        </template>
        Use Demo Icon
      </n-button>
    </template>
  </n-p>
</template>

<script setup lang="ts">
import { useVModel, useObjectUrl } from '@vueuse/core'
import ImageUpload from '../ImageUpload.vue'
import { NButton, NP, NIcon } from 'naive-ui'
import { Delete16Regular, Icons20Regular } from '@vicons/fluent'
import { getImageSize } from '../../utils/image/get-image-size'
import { computedAsync } from '@vueuse/core'
import FaviconURL from './favicon.svg'

const props = defineProps<{
  image: Blob | undefined
}>()

const emit = defineEmits<{
  (event: 'update:image', image: Blob | undefined): void
}>()

const image = useVModel(props, 'image', emit)

const imageURL = useObjectUrl(image)

const imageSize = computedAsync(async () => {
  if (image.value === undefined) {
    return undefined
  }
  const { height, width } = await getImageSize(image.value)
  return `${width}x${height}`
})

const useDemoIcon = async () => {
  const response = await fetch(FaviconURL)
  const blob = await response.blob()
  image.value = blob
}
</script>

<style scoped>
.selected-image {
  aspect-ratio: 1;
  object-fit: contain;
  max-height: 7em;
  margin-top: 1em;
  margin-bottom: 1em;
}

.selected-layout {
  display: flex;
  flex-direction: row;
  gap: 1em;
}
</style>
