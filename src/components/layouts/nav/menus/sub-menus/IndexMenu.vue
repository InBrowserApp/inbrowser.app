<template>
  <RouterLink :to="{ name: 'home' }">
    <span>Home</span>
  </RouterLink>
</template>

<script lang="ts" setup>
import { RouterLink } from 'vue-router'
</script>
