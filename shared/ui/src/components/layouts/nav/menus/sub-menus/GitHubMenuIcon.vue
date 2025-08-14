<template>
  <n-tooltip>
    <template #trigger>
      <n-button
        tag="a"
        href="https://github.com/InBrowserApp/inbrowser.app"
        target="_blank"
        rel="noopener noreferrer"
        quaternary
        circle
        aria-label="GitHub"
      >
        <template #icon>
          <n-icon>
            <icon />
          </n-icon>
        </template>
      </n-button>
    </template>
    <span>GitHub</span>
  </n-tooltip>
</template>

<script lang="ts" setup>
import { NIcon, NButton, NTooltip } from 'naive-ui'
import { LogoGithub as icon } from '@shared/icons/ionicons5'
</script>
