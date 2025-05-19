<template>
  <n-li>
    <router-link :to="path" class="tool-link">
      <n-icon :component="props.tool.icon" class="tool-icon" />
      <span>{{ t('name') }}</span>
    </router-link>
  </n-li>
</template>

<script setup lang="ts">
import { NLi, NIcon } from 'naive-ui'
import type { ToolInfo } from '@/tools/interface'
import { useSiteLanguagePath } from '@/locale'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const props = defineProps<{
  tool: ToolInfo
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

.tool-icon {
  vertical-align: -0.2em;
  font-size: 1.2em;
}
</style>
