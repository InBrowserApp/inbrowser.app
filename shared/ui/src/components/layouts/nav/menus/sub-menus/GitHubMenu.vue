<template>
  <a href="https://github.com/InBrowserApp/inbrowser.app" target="_blank">
    <n-flex align="center" size="small">
      <n-icon>
        <icon />
      </n-icon>
      <span>GitHub</span>
    </n-flex>
  </a>
</template>

<script lang="ts" setup>
import { NIcon, NFlex } from 'naive-ui'
import { LogoGithub as icon } from '@shared/icons/ionicons5'
</script>
