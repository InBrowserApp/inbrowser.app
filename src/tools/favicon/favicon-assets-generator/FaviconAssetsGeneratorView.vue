<template>
  <main>
    <n-h1 prefix="bar" align-text>{{ t('name') }}</n-h1>
    <n-p>
      {{ t('description') }}
    </n-p>
    <FaviconGenerator />
  </main>
</template>

<script setup lang="ts">
import { meta } from './i18n'
import { NH1, NP } from 'naive-ui'
import FaviconGenerator from './components/FaviconGenerator.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n({
  messages: meta,
})
</script>
