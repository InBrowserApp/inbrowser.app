<template>
  <n-descriptions label-placement="left" bordered :column="1" content-style="width: 100%">
    <n-descriptions-item label="UUID">
      <n-skeleton text />
    </n-descriptions-item>
    <n-descriptions-item label="Base64">
      <n-skeleton text />
    </n-descriptions-item>
    <n-descriptions-item label="Version">
      <n-skeleton text />
    </n-descriptions-item>
    <n-descriptions-item label="Variant">
      <n-skeleton text />
    </n-descriptions-item>
  </n-descriptions>
</template>

<script setup lang="ts">
import { NDescriptions, NDescriptionsItem, NSkeleton } from 'naive-ui'
</script>
