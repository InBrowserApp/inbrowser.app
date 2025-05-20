<template>
  <div class="container">
    <img :src="PreviewBackground" class="background" alt="Windows Taskbar Background" />
    <div class="icon-container">
      <div class="icon-background" :style="iconBackgroundStyle" />
      <n-skeleton v-if="image === undefined" class="icon" />
      <img v-else :src="imageURL" class="icon" :style="iconStyle" />
    </div>
  </div>
</template>

<script setup lang="ts">
import PreviewBackground from './windows-taskbar.webp'
import { useObjectUrl } from '@vueuse/core'
import type { PWAOptions } from '../../../utils/favicon-generator/pwa'
import { computed } from 'vue'
import { NSkeleton } from 'naive-ui'

const props = defineProps<{
  image: Blob | undefined
  options: PWAOptions
}>()

const image = computed<Blob | undefined>(() => {
  if (props.options.image) {
    return props.options.image
  } else {
    return props.image
  }
})

const imageURL = useObjectUrl(image)

const iconBackgroundStyle = computed(() => {
  if (props.options.background) {
    return {
      '--icon-background-color': props.options.backgroundColor,
      '--icon-background-radius': (props.options.backgroundRadius / 2).toString() + '%',
    }
  } else
    return {
      '--icon-background-color': 'transparent',
    }
})

const iconStyle = computed(() => ({
  '--icon-margin': (props.options.margin / 2).toString() + '%',
}))
</script>

<style scoped>
.container {
  position: relative;
  width: 100%;
  --icon-size: 46;
  --background-width: 460;
  --background-height: 94;
  --background-left: 384;
  --background-top: 23;
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
}

.icon-background {
  will-change: background-color;
  background-color: var(--icon-background-color);
  position: absolute;
  width: 100%;
  height: 100%;
  transition: background-color 0.2s ease-in-out;
  border-radius: var(--icon-background-radius);
}
</style>
