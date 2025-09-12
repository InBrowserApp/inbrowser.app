<template>
  <ToolDefaultPageLayout :info="toolInfo">
    <RomanNumeralConverter />
  </ToolDefaultPageLayout>
</template>

<script setup lang="ts">
import * as toolInfo from './info'
import { ToolDefaultPageLayout } from '@shared/ui/tool'
import RomanNumeralConverter from './components/RomanNumeralConverter.vue'
</script>