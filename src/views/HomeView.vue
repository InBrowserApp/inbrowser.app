<template>
  <main>
    <n-h2 prefix="bar" align-text>Apps</n-h2>
    <n-list>
      <n-list-item v-for="appId of appIds" :key="appId">
        <router-link :to="{ name: 'app', params: { appId } }" class="link">
          {{ getApp(appId).title }}
        </router-link>
      </n-list-item>
    </n-list>
  </main>
</template>

<script setup lang="ts">
import { getApps } from "@/data/apps";
import { NH2, NList, NListItem } from "naive-ui";
import { getApp } from "@/data/apps";
import { useHead } from "@vueuse/head";

useHead({
  title: "InBrowser.App",
  meta: [
    {
      name: "description",
      content:
        "InBrowser.App is a project to build and collect web apps that fully run in the browser without backend servers.",
    },
  ],
  link: [
    {
      rel: "canonical",
      href: "https://inbrowser.app/",
    },
  ],
});

const apps = getApps();
const appIds = Object.keys(apps);
</script>

<style scoped>
.link {
  color: inherit;
  text-decoration: none;
}

.link:hover {
  text-decoration: underline;
}
</style>
