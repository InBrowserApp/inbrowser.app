<template>
  <n-h2 prefix="bar" align-text>
    <n-icon :component="Info16Regular" style="vertical-align: -0.15em" />
    General Info
  </n-h2>
  <n-p>
    <a href="https://developer.mozilla.org/en-US/docs/Web/Manifest" target="_blank" class="link">
      <n-icon :component="BookInformation20Regular" style="vertical-align: -0.15em" size="1.2em" />

      Check out Web app manifests reference for more information.
    </a>
  </n-p>
  <n-grid x-gap="30" :cols="4">
    <n-grid-item :span="2">
      <n-form-item label="App Name">
        <n-input v-model:value="options.name" />
      </n-form-item>
    </n-grid-item>
    <n-grid-item :span="2">
      <n-form-item label="Short Name">
        <n-input v-model:value="options.short_name" />
      </n-form-item>
    </n-grid-item>
    <n-grid-item :span="4">
      <n-form-item label="Description">
        <n-input v-model:value="options.description" />
      </n-form-item>
    </n-grid-item>
    <n-grid-item :span="2">
      <n-form-item label="Theme Color">
        <n-color-picker
          :show-alpha="false"
          :show-preview="true"
          v-model:value="options.theme_color"
        />
      </n-form-item>
    </n-grid-item>
    <n-grid-item :span="2">
      <n-form-item>
        <template #label>
          Theme Color in Dark Mode
          <n-button
            tag="a"
            href="https://css-tricks.com/meta-theme-color-and-trickery/"
            target="_blank"
            text
            style="vertical-align: -0.2em"
          >
            <template #icon>
              <n-icon :component="Info16Regular" />
            </template>
          </n-button>
        </template>

        <n-checkbox
          v-model:checked="options.theme_color_dark_enabled"
          style="margin-right: 0.7em"
        />
        <span v-show="!options.theme_color_dark_enabled">Disabled</span>
        <n-color-picker
          :show-alpha="false"
          :show-preview="true"
          v-model:value="options.theme_color_dark"
          :disabled="!options.theme_color_dark_enabled"
          v-show="options.theme_color_dark_enabled"
        />
      </n-form-item>
    </n-grid-item>
    <n-grid-item :span="2">
      <n-form-item label="Background Color">
        <n-color-picker
          :show-alpha="false"
          :show-preview="true"
          v-model:value="options.background_color"
        />
      </n-form-item>
    </n-grid-item>

    <n-grid-item :span="2">
      <n-form-item label="Start URL">
        <n-input v-model:value="options.start_url" />
      </n-form-item>
    </n-grid-item>
    <n-grid-item :span="2">
      <n-form-item label="Path of icons">
        <n-input v-model:value="options.path" />
      </n-form-item>
    </n-grid-item>

    <n-grid-item :span="2">
      <n-form-item label="Display">
        <n-select v-model:value="options.display" :options="displayOptions" />
      </n-form-item>
    </n-grid-item>
  </n-grid>
</template>

<script setup lang="ts">
import {
  NH2,
  NInput,
  NFormItem,
  NGrid,
  NGridItem,
  NColorPicker,
  NSelect,
  NIcon,
  NButton,
  NP,
  NCheckbox
} from 'naive-ui'
import type { GeneralInfoOptions } from '../../../../utils/favicon-generator/general-info'
import { useVModel } from '@vueuse/core'
import { Info16Regular, BookInformation20Regular } from '@vicons/fluent'

const props = defineProps<{
  options: GeneralInfoOptions
}>()

const emit = defineEmits(['update:options'])

const options = useVModel(props, 'options', emit)

const displayOptions = [
  { label: 'Fullscreen', value: 'fullscreen' },
  { label: 'Standalone', value: 'standalone' },
  { label: 'Minimal UI', value: 'minimal-ui' },
  { label: 'Browser', value: 'browser' }
]
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
