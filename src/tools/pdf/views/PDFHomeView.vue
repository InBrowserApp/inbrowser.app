<template>
  <main>
    <BackButton />

    <n-h1 prefix="bar" align-text>PDF Tools</n-h1>
    <n-h2 prefix="bar" align-text>Tools</n-h2>
    <router-link
      :to="{
        name: 'tools-pdf-remove-owner-password'
      }"
      #="{ navigate, href }"
      custom
    >
      <n-button tag="a" :href="href" @click="navigate" text>
        <template #icon>
          <n-icon :component="Key16Regular" />
        </template>
        Remove PDF Owner Password
      </n-button>
    </router-link>
  </main>
</template>

<script setup lang="ts">
import { NH2, NButton, NH1, NIcon } from 'naive-ui'
import { useTitle, useDescription } from '@/composables/head'
import BackButton from '@/components/navigate/BackButton.vue'
import Key16Regular from '@vicons/fluent/Key16Regular'

useTitle('PDF Tools')
useDescription('PDF Tools.')
</script>
