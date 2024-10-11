<template>
  <n-h3 prefix="bar" align-text>CIDR</n-h3>
  <CIDRInput @update:cidr="cidr = $event" />
  <template v-if="cidr !== ''">
    <n-h3 prefix="bar" align-text style="margin-top: 0.5em">Result</n-h3>
    <CIDRParseResult :cidr="cidr" />
  </template>
</template>

<script setup lang="ts">
import { NH3 } from 'naive-ui'
import { ref } from 'vue'
import CIDRInput from './CIDRInput.vue'
import CIDRParseResult from './CIDRParseResult.vue'

const cidr = ref('')
</script>
