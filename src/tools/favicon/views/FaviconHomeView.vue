<template>
  <main>
    <BackButton />

    <n-h1 prefix="bar" align-text>Favicon Tools</n-h1>
    <n-h2 prefix="bar" align-text>Tools</n-h2>
    <router-link
      :to="{
        name: 'tools-favicon-favicon-generator'
      }"
      #="{ navigate, href }"
      custom
    >
      <n-button tag="a" :href="href" @click="navigate" text>
        <template #icon>
          <n-icon :component="Icons20Regular" />
        </template>
        Favicon Generator
      </n-button>
    </router-link>
  </main>
</template>

<script setup lang="ts">
import { NH2, NButton, NH1, NIcon } from 'naive-ui'
import { useTitle, useDescription } from '@/composables/head'
import BackButton from '@/components/navigate/BackButton.vue'
import { Icons20Regular } from '@vicons/fluent'

useTitle('Favicon Tools')
useDescription('Favicon Tools.')
</script>
