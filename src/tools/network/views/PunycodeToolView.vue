<template>
  <ToolViewTemplate title="Punycode Tool">
    <n-p> Punycode converter that complies to RFC 3492 and RFC 5891. </n-p>
    <PunycodeTool />
  </ToolViewTemplate>
</template>

<script setup lang="ts">
import { NP } from 'naive-ui'
import PunycodeTool from '../components/tools/punycode/PunycodeTool.vue'
import { useTitle, useDescription } from '@/composables/head'
import ToolViewTemplate from '@/components/layouts/tool-view-template/ToolViewTemplate.vue'

useTitle('Punycode Tool')
useDescription('Punycode converter that complies to RFC 3492 and RFC 5891.')
</script>
