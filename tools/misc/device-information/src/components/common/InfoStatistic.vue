<template>
  <InfoWrapper v-if="value">
    <n-statistic :label="label">
      <n-ellipsis :line-clamp="1">{{ value }}</n-ellipsis>
    </n-statistic>
  </InfoWrapper>
</template>

<script setup lang="ts">
import { NStatistic, NEllipsis } from 'naive-ui'
import InfoWrapper from '../common/InfoWrapper.vue'

defineProps<{
  label: string
  value: string | number | null | undefined
}>()
</script>
