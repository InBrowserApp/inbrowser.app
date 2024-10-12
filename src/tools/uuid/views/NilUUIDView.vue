<template>
  <ToolViewTemplate title="Nil UUID Generator">
    <NilUUIDGenerator />
    <n-h2 prefix="bar" align-text>What is a Nil UUID</n-h2>
    <n-p>
      The "nil" UUID, a special case, is the UUID 00000000-0000-0000-0000-000000000000; that is, all
      bits set to zero.
    </n-p>
  </ToolViewTemplate>
</template>

<script setup lang="ts">
import { NH2, NP } from 'naive-ui'
import NilUUIDGenerator from '../components/uuid/generator/NilUUIDGenerator.vue'
import { useTitle, useDescription } from '@/composables/head'
import ToolViewTemplate from '@/components/layouts/tool-view-template/ToolViewTemplate.vue'

useTitle('Nil UUID Generator')
useDescription('Generate Nil UUID.')
</script>
