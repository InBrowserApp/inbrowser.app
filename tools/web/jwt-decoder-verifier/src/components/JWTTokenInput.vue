<template>
  <div>
    <ToolSectionHeader>{{ t('token') }}</ToolSectionHeader>
    <ToolSection>
      <n-input
        v-model:value="value"
        :placeholder="placeholder"
        type="password"
        show-password-on="click"
      />
    </ToolSection>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { NInput } from 'naive-ui'
import { ToolSectionHeader, ToolSection } from '@shared/ui/tool'

const value = defineModel<string>('value', { required: true })

defineProps<{
  placeholder?: string
}>()

const { t } = useI18n()
</script>

<i18n lang="json">
{
  "en": {
    "token": "Token"
  },
  "zh": {
    "token": "令牌"
  }
}
</i18n>
