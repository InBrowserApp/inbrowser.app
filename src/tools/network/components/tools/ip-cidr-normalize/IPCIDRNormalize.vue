<template>
  <n-h3 prefix="bar" align-text>IP/CIDR</n-h3>
  <IPCIDRInput @update:ipcidr="ipcidr = $event" />

  <template v-if="ipcidr !== ''">
    <n-h3 prefix="bar" align-text style="margin-top: 0.5em"> Normalized Result </n-h3>
    <IPCIDRNormalizedResult :ipcidr="ipcidr" />
  </template>
</template>

<script setup lang="ts">
import { NH3 } from 'naive-ui'
import IPCIDRInput from './IPCIDRInput.vue'
import { ref } from 'vue'
import IPCIDRNormalizedResult from './IPCIDRNormalizedResult.vue'

const ipcidr = ref('')
</script>
