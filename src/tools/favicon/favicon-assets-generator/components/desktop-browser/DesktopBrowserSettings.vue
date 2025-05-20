<template>
  <n-tabs type="line" animated>
    <n-tab-pane name="settings" tab="Settings" display-directive="show">
      <DesktopBrowserSettingsDisplay v-model:options="options" />
    </n-tab-pane>
    <n-tab-pane name="dedicated-image" tab="Dedicated Image" display-directive="show">
      <DesktopBrowserSettingsDedicatedImage v-model:options="options" />
    </n-tab-pane>
    <n-tab-pane name="download" tab="Download Separately" display-directive="show">
      <DesktopBrowserSettingsDownload :options="options" :image="image" />
    </n-tab-pane>
  </n-tabs>
</template>

<script setup lang="ts">
import { NTabs, NTabPane } from 'naive-ui'
import type { DesktopBrowserOptions } from '../../utils/favicon-generator/desktop-browser'
import { useVModel } from '@vueuse/core'
import DesktopBrowserSettingsDisplay from './DesktopBrowserSettingsDisplay.vue'
import DesktopBrowserSettingsDownload from './DesktopBrowserSettingsDownload.vue'
import DesktopBrowserSettingsDedicatedImage from './DesktopBrowserSettingsDedicatedImage.vue'

const props = defineProps<{
  image: Blob | undefined
  options: DesktopBrowserOptions
}>()

const emit = defineEmits(['update:options'])

const options = useVModel(props, 'options', emit)
</script>
