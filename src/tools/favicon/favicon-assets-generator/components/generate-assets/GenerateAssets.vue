<template>
  <n-h2 prefix="bar" align-text>
    <n-icon :component="Archive20Regular" style="vertical-align: -0.15em" />
    Generate Favicon Assets
  </n-h2>
  <n-p>
    <n-text depth="3">
      <n-icon :component="Sparkle16Filled" style="vertical-align: -0.1em" />
      All files are losslessly minified using oxipng and svgo.
    </n-text>
  </n-p>

  <n-ol>
    <n-li>
      <n-button text @click="download" style="vertical-align: -0.15em">
        <template #icon>
          <n-icon :component="ArrowDownload16Filled" />
        </template>
        Download favicon-assets.zip
      </n-button>
    </n-li>
    <n-li>
      Extract the zip file and put the files in
      <n-text code>{{ prefix }}</n-text> folder.
    </n-li>
    <n-li>
      Add the following code to the <n-text code>&lt;head&gt;</n-text> tag of your HTML file.
      <n-p>
        <HTMLCode
          :image="image"
          :ios-web-clip-options="iosWebClipOptions"
          :desktop-browser-options="desktopBrowserOptions"
          :pwa-options="pwaOptions"
          :general-info-options="generalInfoOptions"
        />
      </n-p>
    </n-li>
    <n-li>
      <n-tag :bordered="false" type="success" size="small">Optional</n-tag>
      Modify
      <n-popover>
        <template #trigger>
          <n-text code>site.webmanifest</n-text>
        </template>
        <n-scrollbar style="max-height: 20em">
          <SiteWebManifest :general-info-options="generalInfoOptions" />
        </n-scrollbar>
      </n-popover>
      to your needs.
      <n-button
        text
        tag="a"
        href="https://developer.mozilla.org/en-US/docs/Web/Manifest"
        target="_blank"
        style="vertical-align: -0.15em"
      >
        <template #icon>
          <n-icon :component="BookInformation20Regular" />
        </template>
        Web app manifests reference
      </n-button>
    </n-li>
  </n-ol>
</template>

<script setup lang="ts">
import {
  NH2,
  NButton,
  NIcon,
  NP,
  NText,
  NOl,
  NLi,
  NTag,
  NPopover,
  NScrollbar,
  useMessage,
} from 'naive-ui'
import type { iOSWebClipOptions } from '../../utils/favicon-generator/ios-web-clip'
import type { PWAOptions } from '../../utils/favicon-generator/pwa'
import type { GeneralInfoOptions } from '../../utils/favicon-generator/general-info'
import type { DesktopBrowserOptions } from '../../utils/favicon-generator/desktop-browser'
import { generateAssets } from '../../utils/favicon-generator/generate-assets'
import {
  ArrowDownload16Filled,
  Sparkle16Filled,
  BookInformation20Regular,
  Archive20Regular,
} from '@vicons/fluent'
import HTMLCode from './HTMLCode.vue'
import { normalizePath } from '../../utils/favicon-generator/general-info'
import { computed } from 'vue'
import SiteWebManifest from './SiteWebManifest.vue'

const message = useMessage()

const props = defineProps<{
  image: Blob | undefined
  pwaOptions: PWAOptions
  desktopBrowserOptions: DesktopBrowserOptions
  iosWebClipOptions: iOSWebClipOptions
  generalInfoOptions: GeneralInfoOptions
}>()

const prefix = computed(() => {
  return normalizePath(props.generalInfoOptions.path)
})

const download = async () => {
  try {
    if (props.image === undefined) {
      throw new Error('No image selected')
    }

    const blob = await generateAssets(props.image, {
      generalInfo: props.generalInfoOptions,
      desktopBrowser: props.desktopBrowserOptions,
      pwa: props.pwaOptions,
      iosWebClip: props.iosWebClipOptions,
    })

    const a = document.createElement('a')
    a.href = URL.createObjectURL(blob)
    a.download = 'favicon-assets.zip'
    a.click()
  } catch (e) {
    message.error((e as Error).message)
  }
}
</script>
