<template>
  <main>
    <BackButton />
    <n-h1 prefix="bar" align-text>Version 4 UUID</n-h1>
    <UUIDV4Generator />
    <n-h2 prefix="bar" align-text>What is a version 4 UUID?</n-h2>
    <UUIDV4Description />
  </main>
</template>

<script setup lang="ts">
import { NH2, NH1 } from 'naive-ui'
import UUIDV4Description from '../components/uuid/description/UUIDV4Description.vue'
import UUIDV4Generator from '../components/uuid/generator/UUIDV4Generator.vue'
import BackButton from '@/components/navigate/BackButton.vue'
import { useTitle, useDescription } from '@/composables/head'

useTitle('Version 4 UUID Generator')
useDescription('Generate version 4 UUID.')
</script>
