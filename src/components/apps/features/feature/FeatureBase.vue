<template>
  <n-tooltip trigger="hover">
    <template #trigger>
      <n-button text>
        <template #icon>
          <n-icon :component="icon" />
        </template>
      </n-button>
    </template>
    <slot />
  </n-tooltip>
</template>

<script setup lang="ts">
import { NButton, NTooltip, NIcon } from "naive-ui";
import type { Component } from "vue";

defineProps<{
  icon: Component;
}>();
</script>
