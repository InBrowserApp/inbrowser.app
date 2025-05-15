<template>
  <TheDeveloperSay />

  <n-h2 prefix="bar" align-text>{{ t('base.all_tools') }}</n-h2>
  <n-p>
    <TheAllTools />
  </n-p>
</template>

<script setup lang="ts">
import { NH2, NP } from 'naive-ui'
import { useI18n } from 'vue-i18n'
import TheDeveloperSay from '@/components/miscellaneous/the-developer-says/TheDeveloperSay.vue'
import TheAllTools from '@/components/tools/all-tools/TheAllTools.vue'

const { t } = useI18n()
</script>
