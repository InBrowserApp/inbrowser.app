<template>
  <n-h3 prefix="bar" align-text>IP Range</n-h3>

  <IPRangeInput @update:ipRange="ipRange = $event" />

  <template v-if="ipRange[0] !== '' && ipRange[1] !== ''">
    <n-h3 prefix="bar" align-text style="margin-top: 0.5em">CIDR Result</n-h3>

    <IPRangeCIDRResult :ipRange="ipRange" />
  </template>
</template>

<script setup lang="ts">
import { NH3 } from 'naive-ui'
import { ref } from 'vue'
import IPRangeInput from './IPRangeInput.vue'
import IPRangeCIDRResult from './IPRangeCIDRResult.vue'

const ipRange = ref<[string, string]>(['', ''])
</script>
