<template>
  <main>
    <BackButton />
    <n-h1 prefix="bar" align-text>{{ title }}</n-h1>
    <n-p v-if="description">
      {{ description }}
    </n-p>
    <n-p>
      <slot></slot>
    </n-p>
  </main>
</template>

<script setup lang="ts">
import { NH1, NP } from 'naive-ui'
import BackButton from '@/components/navigate/BackButton.vue'
import { useHeadFromRouteMeta } from '@/composables/head'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'

const props = defineProps<{
  title?: string
  description?: string
}>()

const route = useRoute()
const meta = route.meta

const { t } = useI18n({
  messages: meta?.locales
})

const title = computed(() => props.title ?? t('title'))
const description = computed(() => props.description ?? t('description'))

useHeadFromRouteMeta()
</script>
