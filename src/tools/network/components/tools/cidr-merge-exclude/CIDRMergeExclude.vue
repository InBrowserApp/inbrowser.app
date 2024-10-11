<template>
  <n-h3 prefix="bar" align-text>CIDRs to Merge</n-h3>
  <CIDRsInput @update:cidrs="cidrsToMerge = $event" />
  <n-h3 prefix="bar" align-text> CIDRs to Exclude </n-h3>
  <CIDRsInput @update:cidrs="cidrsToExclude = $event" />
  <template
    v-if="cidrsToMerge && cidrsToExclude && cidrsToMerge.length + cidrsToExclude.length > 1"
  >
    <n-h3 prefix="bar" align-text>Merge And Exclude Result</n-h3>
    <CIDRsMergeExcludeResult
      :cidrsToMerge="cidrsToMerge"
      :cidrsToExclude="cidrsToExclude"
      v-if="cidrsToMerge && cidrsToExclude"
    />
  </template>
</template>

<script setup lang="ts">
import { NH3 } from 'naive-ui'
import CIDRsInput from './CIDRsInput.vue'
import { ref } from 'vue'
import CIDRsMergeExcludeResult from './CIDRsMergeExcludeResult.vue'

const cidrsToMerge = ref<string[] | undefined>([])
const cidrsToExclude = ref<string[] | undefined>([])
</script>
