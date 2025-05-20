<template>
  <n-tabs type="line" animated>
    <n-tab-pane name="settings" :tab="t('settings')" display-directive="show">
      <iOSWebClipSettingsDisplay v-model:options="options" />
    </n-tab-pane>
    <n-tab-pane name="dedicated-image" :tab="t('dedicatedImage')" display-directive="show">
      <iOSWebClipSettingsDedicatedImage v-model:options="options" />
    </n-tab-pane>
    <n-tab-pane name="download" :tab="t('downloadSeparately')" display-directive="show">
      <iOSWebClipSettingsDownload :options="options" :image="image" />
    </n-tab-pane>
  </n-tabs>
</template>

<script setup lang="ts">
import { NTabs, NTabPane } from 'naive-ui'
import type { iOSWebClipOptions } from '../../utils/favicon-generator/ios-web-clip'
import { useVModel } from '@vueuse/core'
import iOSWebClipSettingsDisplay from './iOSWebClipSettingsDisplay.vue'
import iOSWebClipSettingsDedicatedImage from './iOSWebClipSettingsDedicatedImage.vue'
import iOSWebClipSettingsDownload from './iOSWebClipSettingsDownload.vue'
import { useI18n } from 'vue-i18n'
import { messages } from '../locale/settings-messages'

const { t } = useI18n({ messages })

const props = defineProps<{
  image: Blob | undefined
  options: iOSWebClipOptions
}>()

const emit = defineEmits(['update:options'])

const options = useVModel(props, 'options', emit)
</script>
