<template>
  <n-h2 prefix="bar" align-text>
    <n-icon :component="LogoPwa" style="vertical-align: -0.15em" />
    Progressive Web App (PWA)
  </n-h2>
  <n-p>
    <a href="https://web.dev/articles/maskable-icon" target="_blank" class="link">
      <n-icon :component="BookInformation20Regular" style="vertical-align: -0.15em" size="1.2em" />

      What's the difference between &nbsp;<n-text code>"purpose": "any"</n-text>&nbsp; and
      &nbsp;<n-text code>"purpose": "maskable"</n-text>?
    </a>
  </n-p>
  <n-h3 prefix="bar" align-text> PWA <n-text code>"purpose": "any"</n-text> </n-h3>
  <n-grid x-gap="30" y-gap="20" :cols="5" item-responsive responsive="screen">
    <n-grid-item span="5 s:2">
      <PWAPreview :image="image" :options="options" :general-info-options="generalInfoOptions" />
    </n-grid-item>
    <n-grid-item span="5 s:3">
      <PWASettings :image="image" v-model:options="options" />
    </n-grid-item>
  </n-grid>
  <n-h3 prefix="bar" align-text> PWA <n-text code>"purpose": "maskable"</n-text> </n-h3>
  <n-grid x-gap="30" y-gap="20" :cols="5" item-responsive responsive="screen">
    <n-grid-item span="5 s:2">
      <PWAMaskablePreview
        :image="image"
        :options="options"
        :general-info-options="generalInfoOptions"
      />
    </n-grid-item>
    <n-grid-item span="5 s:3">
      <PWAMaskableSettings :image="image" v-model:options="options" />
    </n-grid-item>
  </n-grid>
</template>

<script setup lang="ts">
import { NH2, NH3, NText, NGrid, NGridItem, NIcon, NP } from 'naive-ui'
import type { PWAOptions } from '../../../../utils/favicon-generator/pwa'
import { useVModel } from '@vueuse/core'
import type { GeneralInfoOptions } from '../../../../utils/favicon-generator/general-info'
import PWAPreview from './any/PWAPreview.vue'
import PWAMaskablePreview from './maskable/PWAMaskablePreview.vue'
import PWASettings from './any/PWASettings.vue'
import PWAMaskableSettings from './maskable/PWAMaskableSettings.vue'
import { LogoPwa } from '@vicons/ionicons5'
import { BookInformation20Regular } from '@vicons/fluent'

const props = defineProps<{
  image: Blob | undefined
  options: PWAOptions
  generalInfoOptions: GeneralInfoOptions
}>()

const emit = defineEmits(['update:options'])

const options = useVModel(props, 'options', emit)
</script>

<style scoped>
.link {
  color: inherit;
  text-decoration: none;
}

.link:hover {
  text-decoration: underline;
}
</style>
