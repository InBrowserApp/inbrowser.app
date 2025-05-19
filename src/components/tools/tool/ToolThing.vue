<template>
  <router-link :to="path" class="tool-link">
    <n-thing>
      <template v-if="showIcon" #avatar>
        <n-avatar>
          <n-icon :component="props.tool.icon" />
        </n-avatar>
      </template>
      <template #header>
        {{ t('name') }}
      </template>
      <template #description>
        {{ t('description') }}
      </template>
    </n-thing>
  </router-link>
</template>

<script setup lang="ts">
import { NThing, NAvatar, NIcon } from 'naive-ui'
import type { ToolInfo } from '@/tools/interface'
import { useSiteLanguagePath } from '@/locale'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const props = defineProps<{
  tool: ToolInfo
  showIcon?: boolean
}>()

const rawPath = computed(() => props.tool.path)

const { path } = useSiteLanguagePath(rawPath)

const { t } = useI18n({
  messages: props.tool.meta,
})
</script>

<style scoped>
.tool-link {
  text-decoration: none;
  color: inherit;

  font-size: 1.2em;
}

.tool-link:hover {
  text-decoration: underline;
}
</style>
