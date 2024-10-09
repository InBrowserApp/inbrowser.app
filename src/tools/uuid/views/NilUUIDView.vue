<template>
  <main>
    <BackButton />
    <n-h1 prefix="bar" align-text>Nil UUID</n-h1>
    <NilUUIDGenerator />
    <n-h2 prefix="bar" align-text>What is a Nil UUID</n-h2>
    <NilUUIDDescription />
  </main>
</template>

<script setup lang="ts">
import { NH2, NH1 } from 'naive-ui'
import NilUUIDDescription from '../components/uuid/description/NilUUIDDescription.vue'
import NilUUIDGenerator from '../components/uuid/generator/NilUUIDGenerator.vue'
import BackButton from '@/components/navigate/BackButton.vue'
import { useTitle, useDescription } from '@/composables/head'

useTitle('Nil UUID Generator')
useDescription('Generate Nil UUID.')
</script>
