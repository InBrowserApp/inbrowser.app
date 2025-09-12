<template>
  <ToolSection>
    <ToolSectionHeader level="2">{{ t('screen-info') }}</ToolSectionHeader>

    <InfosGrid>
      <!-- Screen Information -->
      <ScreenResolution />
      <AvailableResolution />
      <WindowSize />
      <ViewportSize />
      <ColorDepth />
      <DevicePixelRatio />
      <ScreenOrientation />
      <Fps />
      <MultipleScreens />
    </InfosGrid>
  </ToolSection>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { ToolSectionHeader, ToolSection } from '@shared/ui/tool'
import InfosGrid from '../common/InfosGrid.vue'

// Screen Components
import ScreenResolution from '../screen/ScreenResolution.vue'
import AvailableResolution from '../screen/AvailableResolution.vue'
import WindowSize from '../screen/WindowSize.vue'
import ViewportSize from '../screen/ViewportSize.vue'
import ColorDepth from '../screen/ColorDepth.vue'
import DevicePixelRatio from '../screen/DevicePixelRatio.vue'
import ScreenOrientation from '../screen/ScreenOrientation.vue'
import Fps from '../screen/Fps.vue'
import MultipleScreens from '../screen/MultipleScreens.vue'

const { t } = useI18n()
</script>

<i18n lang="json">
{
  "en": {
    "screen-info": "Screen Information"
  },
  "zh": {
    "screen-info": "屏幕信息"
  }
}
</i18n>
