<template>
  <NavLayout>
    <RouterView :key="route.fullPath" />
  </NavLayout>
</template>

<script lang="ts" setup>
import { RouterView, useRoute } from 'vue-router'
import NavLayout from '@/components/layouts/NavLayout.vue'

const route = useRoute()
</script>
