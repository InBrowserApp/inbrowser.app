<template>
  <RouterLink :to="path">
    {{ t('base.home') }}
  </RouterLink>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
import { useSiteLanguagePath } from '@/locale'

const { t } = useI18n()

const { path } = useSiteLanguagePath({ name: 'home' })
</script>
