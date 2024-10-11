<template>
  <ToolViewTemplate title="Version 4 UUID Generator">
    <UUIDV4Generator />
    <n-h2 prefix="bar" align-text>What is a version 4 UUID?</n-h2>
    <n-p>
      A version 4 UUID is randomly generated. As in other UUIDs, 4 bits are used to indicate version
      4, and 2 or 3 bits to indicate the variant (102 or 1102 for variants 1 and 2 respectively).
      Thus, for variant 1 (that is, most UUIDs) a random version-4 UUID will have 6 predetermined
      variant and version bits, leaving 122 bits for the randomly generated part, for a total of
      2122, or 5.3×1036 (5.3 undecillion) possible version-4 variant-1 UUIDs. There are half as many
      possible version-4 variant-2 UUIDs (legacy GUIDs) because there is one less random bit
      available, 3 bits being consumed for the variant.
    </n-p>
  </ToolViewTemplate>
</template>

<script setup lang="ts">
import { NH2, NP } from 'naive-ui'
import UUIDV4Generator from '../components/uuid/generator/UUIDV4Generator.vue'
import { useTitle, useDescription } from '@/composables/head'
import ToolViewTemplate from '@/components/layouts/tool-view-template/ToolViewTemplate.vue'

useTitle('Version 4 UUID Generator')
useDescription('Generate version 4 UUID.')
</script>
