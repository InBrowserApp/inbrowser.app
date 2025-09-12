<template>
  <ToolSection>
    <ToolSectionHeader level="2">{{ t('browser-info') }}</ToolSectionHeader>

    <InfosGrid>
      <!-- Browser Information -->
      <BrowserName />
      <PrimaryLanguage />
      <BrowserLanguages />
      <Architecture />
      <PlatformInfo />
      <TimezoneInfo />
      <CookieEnabled />
      <UserAgent />
    </InfosGrid>
  </ToolSection>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { ToolSectionHeader, ToolSection } from '@shared/ui/tool'
import InfosGrid from '../common/InfosGrid.vue'

// Browser Components
import BrowserName from '../browser/BrowserName.vue'
import PrimaryLanguage from '../browser/PrimaryLanguage.vue'
import BrowserLanguages from '../browser/BrowserLanguages.vue'
import Architecture from '../browser/ArchitectureInfo.vue'
import PlatformInfo from '../browser/PlatformInfo.vue'
import TimezoneInfo from '../browser/TimezoneInfo.vue'
import CookieEnabled from '../browser/CookieEnabled.vue'
import UserAgent from '../browser/UserAgent.vue'

const { t } = useI18n()
</script>

<i18n lang="json">
{
  "en": {
    "browser-info": "Browser Information"
  },
  "zh": {
    "browser-info": "浏览器信息"
  }
}
</i18n>
