<template>
  <n-p>
    <span v-if="result === 'error'">Error</span>
    <span v-else-if="result.length === 0">No CIDRs</span>
    <n-ul v-else>
      <n-li v-for="cidr in result" :key="cidr">
        {{ cidr }}
      </n-li>
    </n-ul>
  </n-p>
</template>

<script setup lang="ts">
import { NP, NUl, NLi } from 'naive-ui'
import { exclude } from 'cidr-tools'
import { computed } from 'vue'

const props = defineProps<{
  cidrsToMerge: string[]
  cidrsToExclude: string[]
}>()

const result = computed<string[] | 'error'>(() => {
  try {
    return exclude(props.cidrsToMerge, props.cidrsToExclude)
  } catch (e) {
    console.error(e)
    return 'error'
  }
})
</script>
