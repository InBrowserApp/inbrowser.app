<template>
  <n-tag :type="type" size="small" :bordered="false">
    {{ version }}
  </n-tag>
</template>

<script setup lang="ts">
import { NTag } from 'naive-ui'
import { isIPv4, isIPv6 } from 'is-ip'
import { computed } from 'vue'

const props = defineProps<{
  ip: string
}>()

const version = computed(() => {
  if (isIPv4(props.ip)) {
    return 'IPv4'
  } else if (isIPv6(props.ip)) {
    return 'IPv6'
  } else {
    return 'Unknown'
  }
})

const type = computed(() => {
  if (version.value === 'IPv4') {
    return 'info'
  } else if (version.value === 'IPv6') {
    return 'success'
  } else {
    return 'warning'
  }
})
</script>
