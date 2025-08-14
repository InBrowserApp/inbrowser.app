<template>
  <n-flex align="center" justify="space-between" :wrap="false">
    <n-menu :options="menuOptions" mode="horizontal" />
    <n-flex align="center" size="small" :wrap="false">
      <LanguageMenuIcon />
      <GitHubMenuIcon />
    </n-flex>
  </n-flex>
</template>

<script lang="ts" setup>
import { NMenu, NFlex } from 'naive-ui'
import { useExpandedMenuOptions } from './sub-menus/use-menu-links'
import GitHubMenuIcon from './sub-menus/GitHubMenuIcon.vue'
import LanguageMenuIcon from './sub-menus/LanguageMenuIcon.vue'

const menuOptions = useExpandedMenuOptions()
</script>
