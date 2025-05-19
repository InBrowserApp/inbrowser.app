<template>
  <div class="nav-menu">
    <n-menu :options="menuOptions" mode="horizontal" />
  </div>
</template>

<script lang="ts" setup>
import { NMenu } from 'naive-ui'
import { useExpandedMenuOptions } from './sub-menus/use-menu-links'

const menuOptions = useExpandedMenuOptions()
</script>
