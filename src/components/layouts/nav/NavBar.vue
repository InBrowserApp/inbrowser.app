<template>
  <n-layout-header bordered class="navbar">
    <nav class="nav">
      <SiteBranding />

      <div>
        <NavMenusExpanded v-if="menuExpanded" />
      </div>

      <n-space align="center">
        <NavMenusCollapsed v-if="!menuExpanded" />
      </n-space>
    </nav>
  </n-layout-header>
</template>

<script setup lang="ts">
import { NLayoutHeader, NSpace } from 'naive-ui'
import SiteBranding from './SiteBranding.vue'
import NavMenusCollapsed from './menus/NavMenusCollapsed.vue'
import NavMenusExpanded from './menus/NavMenusExpanded.vue'
import { useWindowSize } from '@vueuse/core'
import { computed } from 'vue'

const { width } = useWindowSize()
const menuExpanded = computed(() => width.value > 1200)
</script>

<style>
body {
  --navbar-height: 64px;
}
</style>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  z-index: 1000;
}

.nav {
  --side-padding: 32px;
  display: grid;
  grid-template-rows: calc(var(--navbar-height) - 1px);
  align-items: center;
  padding: 0 var(--side-padding);
  grid-template-columns: calc(225px - var(--side-padding)) 1fr auto;
}
</style>
