<template>
  <div class="tool-link">
    <n-thing>
      <template #avatar>
        <n-avatar> </n-avatar>
      </template>
      <template #header>
        <n-skeleton text style="width: 10em" />
      </template>
      <template #description>
        <n-skeleton text :repeat="2" />
      </template>
    </n-thing>
  </div>
</template>

<script setup lang="ts">
import { NThing, NAvatar, useThemeVars, NSkeleton } from 'naive-ui'

const themeVars = useThemeVars()
</script>

<style scoped>
.tool-link {
  color: inherit;
  display: block;
  font-size: 1.2em;
  border-radius: 10px;
  padding: 15px;
  transition: background 0.2s v-bind('themeVars.cubicBezierEaseInOut');
  cursor: wait;
}

.tool-link:hover {
  background: v-bind('themeVars.hoverColor');
}
</style>
