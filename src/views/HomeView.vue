<template>
  <main>
    <div v-for="appId of appIds" :key="appId">
      <router-link :to="{ name: 'app', params: { appId } }">
        {{ appId }}
      </router-link>
    </div>
  </main>
</template>

<script setup lang="ts">
import { getApps } from "@/data/apps";

const apps = getApps();
const appIds = Object.keys(apps);
</script>
