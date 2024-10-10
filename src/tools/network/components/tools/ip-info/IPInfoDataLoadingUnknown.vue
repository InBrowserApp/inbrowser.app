<template>
  <n-skeleton text style="width: 10em" v-if="data === undefined" />
  <n-tag :bordered="false" size="small" type="error" v-if="data === null"> Unknown </n-tag>
</template>

<script setup lang="ts">
import { NSkeleton, NTag } from 'naive-ui'

defineProps<{
  data: any
}>()
</script>
