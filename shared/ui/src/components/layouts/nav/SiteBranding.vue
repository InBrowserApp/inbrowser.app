<template>
  <CustomRouterLink :to="{ name: 'home' }" class="link">
    <n-h1 class="site-name">
      <!-- placeholder for logo -->
      <span class="text">InBrowser.App</span>
    </n-h1>
  </CustomRouterLink>
</template>

<script setup lang="ts">
import { NH1 } from 'naive-ui'

import { CustomRouterLink } from '../../base'
</script>

<style scoped>
.link {
  text-decoration: none;
  color: inherit;
}

.site-name {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0;
}

.text {
  font-size: 0.6em;
  font-weight: 600;
  /* system-ui; */
  font-family: system-ui;
}
</style>
