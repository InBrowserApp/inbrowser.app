<template>
  <NavBar />
  <main class="main-container">
    <slot></slot>
  </main>
</template>

<script lang="ts" setup>
import NavBar from '@/components/layouts/nav/NavBar.vue'
</script>

<style scoped>
.main-container {
  padding-top: calc(var(--navbar-height) + 1em);
  padding-left: 2em;
  padding-right: 2em;
  padding-bottom: 4em;
  transition: padding 0.3s;
}
</style>
