<template>
  <div class="desktop-browser-container">
    <div
      v-if="!options.original && options.background"
      class="desktop-browser-image-background"
      :style="iconBackgroundStyle"
    />

    <n-skeleton v-if="image === undefined" class="desktop-browser-image" />
    <img
      v-else
      :src="imageURL"
      class="desktop-browser-image"
      :style="iconStyle"
      :class="{
        'desktop-browser-image-asis': options.original,
      }"
    />
  </div>
</template>

<script setup lang="ts">
import { useObjectUrl } from '@vueuse/core'
import type { DesktopBrowserOptions } from '../../utils/favicon-generator/desktop-browser'
import { computed } from 'vue'
import { NSkeleton } from 'naive-ui'

const props = defineProps<{
  image: Blob | undefined
  options: DesktopBrowserOptions
}>()

const image = computed<Blob | undefined>(() => {
  if (props.options.image) {
    return props.options.image
  } else {
    return props.image
  }
})

const imageURL = useObjectUrl(image)

const iconBackgroundStyle = computed(() => ({
  '--icon-background-color': props.options.backgroundColor,
  '--icon-background-radius': (props.options.backgroundRadius / 2).toString() + '%',
}))

const iconStyle = computed(() => ({
  '--icon-margin': (props.options.margin / 2).toString() + '%',
}))
</script>

<style scoped>
.desktop-browser-container {
  position: relative;
  width: 100%;
  aspect-ratio: 1;
  object-fit: contain;
  overflow: hidden;
}

.desktop-browser-image {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: contain;
  will-change: padding;
  padding: var(--icon-margin);
  transition: padding 0.2s ease-in-out;
  box-sizing: border-box;
}

.desktop-browser-image-asis {
  padding: inherit;
}

.desktop-browser-image-background {
  will-change: background-color;
  background-color: var(--icon-background-color);
  position: absolute;
  width: 100%;
  height: 100%;
  transition: background-color 0.2s ease-in-out;
  border-radius: var(--icon-background-radius);
}
</style>
