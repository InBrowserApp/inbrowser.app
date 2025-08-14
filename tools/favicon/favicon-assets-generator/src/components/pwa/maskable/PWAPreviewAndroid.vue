<template>
  <div class="container">
    <img :src="PreviewBackground" class="background" alt="Android Launcher Background" />
    <div class="icon-container">
      <div class="icon-background" :style="iconBackgroundStyle" />
      <n-skeleton v-if="image === undefined" class="icon" />
      <img v-else :src="imageURL" class="icon" :style="iconStyle" />
    </div>
  </div>
</template>

<script setup lang="ts">
import PreviewBackground from './android-launcher.webp'
import { useObjectUrl } from '@vueuse/core'
import type { PWAOptions } from '../../../utils/favicon-generator/pwa'
import { computed } from 'vue'
import { NSkeleton } from 'naive-ui'

const props = defineProps<{
  image: Blob | undefined
  options: PWAOptions
}>()

const image = computed<Blob | undefined>(() => {
  if (props.options.maskableImage) {
    return props.options.maskableImage
  } else {
    return props.image
  }
})

const imageURL = useObjectUrl(image)

const iconBackgroundStyle = computed(() => ({
  '--icon-background-color': props.options.maskableBackgroundColor,
}))

const iconStyle = computed(() => ({
  '--icon-margin': (props.options.maskableMargin / 2).toString() + '%',
}))
</script>

<style scoped>
.container {
  position: relative;
  width: 100%;
  --icon-size: calc(135 / 8 * 10);
  --background-width: 1080;
  --background-height: 195;
  --background-left: calc(473 - var(--icon-size) / 10);
  --background-top: calc(30 - var(--icon-size) / 10);
  aspect-ratio: var(--background-width) / var(--background-height);
  overflow: hidden;
}

.background {
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.icon-container {
  position: absolute;
  width: calc(var(--icon-size) / var(--background-width) * 100%);
  aspect-ratio: 1;
  left: calc(var(--background-left) / var(--background-width) * 100%);
  top: calc(var(--background-top) / var(--background-height) * 100%);
  object-fit: contain;
  /* border-radius: 100%; */
  overflow: hidden;
}

.icon {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: contain;

  box-sizing: border-box;
  will-change: padding;
  padding: var(--icon-margin);
  transition: padding 0.2s ease-in-out;
  clip-path: circle(40%);
}

.icon-background {
  will-change: background-color;
  background-color: var(--icon-background-color);
  position: absolute;
  width: 100%;
  height: 100%;
  transition: background-color 0.2s ease-in-out;
  clip-path: circle(40%);
}
</style>
