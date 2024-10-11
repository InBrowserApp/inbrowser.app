<template>
  <n-h2 prefix="bar" align-text>
    <n-icon :component="Desktop16Regular" style="vertical-align: -0.15em" />
    Desktop Browser & Google Result
  </n-h2>
  <n-grid x-gap="30" y-gap="20" :cols="5" item-responsive responsive="screen">
    <n-grid-item span="5 s:2">
      <DesktopBrowserPreview
        :image="image"
        :options="options"
        :general-info-options="generalInfoOptions"
      />
    </n-grid-item>
    <n-grid-item span="5 s:3">
      <DesktopBrowserSettings :image="image" :options="options" />
    </n-grid-item>
  </n-grid>
</template>

<script setup lang="ts">
import { NH2, NGrid, NGridItem, NIcon } from 'naive-ui'
import type { DesktopBrowserOptions } from '../../../../utils/favicon-generator/desktop-browser'
import { useVModel } from '@vueuse/core'
import DesktopBrowserPreview from './DesktopBrowserPreview.vue'
import type { GeneralInfoOptions } from '../../../../utils/favicon-generator/general-info'
import DesktopBrowserSettings from './DesktopBrowserSettings.vue'
import { Desktop16Regular } from '@vicons/fluent'

const props = defineProps<{
  image: Blob | undefined
  options: DesktopBrowserOptions
  generalInfoOptions: GeneralInfoOptions
}>()

const emit = defineEmits(['update:options'])

const options = useVModel(props, 'options', emit)
</script>
