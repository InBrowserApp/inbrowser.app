<template>
  <router-link :to="{ name: toolName }" #="{ navigate, href }" custom>
    <n-button tag="a" :href="href" @click="navigate" text>
      <template #icon v-if="tool?.meta?.icon">
        <n-icon :component="tool?.meta?.icon" />
      </template>
      {{ t('title') }}
    </n-button>
  </router-link>
</template>

<script setup lang="ts">
import { NButton, NIcon } from 'naive-ui'
import { routes } from '@/tools/routes'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const props = defineProps<{
  toolName: string
}>()

const tool = computed(() => routes.find((route) => route.name === props.toolName))

const { t } = useI18n({
  messages: tool?.value?.meta?.locales
})
</script>
