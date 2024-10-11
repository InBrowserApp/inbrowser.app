<template>
  <n-tooltip trigger="hover">
    <template #trigger>
      <n-button text>
        <template #icon>
          <n-icon>
            <Warning16Regular />
          </n-icon>
        </template>
        Dark Theme SVG Icon Limitation
      </n-button>
    </template>
    Due to the limitation of the browser, the SVG icon of the browser tab in dark theme may not be
    displayed correctly.
  </n-tooltip>
</template>

<script setup lang="ts">
import { NButton, NTooltip, NIcon } from 'naive-ui'
import { Warning16Regular } from '@vicons/fluent'
</script>
