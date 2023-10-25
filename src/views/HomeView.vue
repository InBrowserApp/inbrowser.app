<template>
  <main>
    <n-h2 prefix="bar" align-text>Apps</n-h2>
    <n-list>
      <n-list-item v-for="app of apps" :key="app.url">
        <a :href="app.url" target="_blank" class="link">
          {{ app.name }}
        </a>
      </n-list-item>
    </n-list>
  </main>
</template>

<script setup lang="ts">
import { NH2, NList, NListItem } from "naive-ui";
import { useHead } from "@vueuse/head";

const apps = [
  {
    name: "Look Scanned",
    url: "https://lookscanned.io",
  },
  {
    name: "DNS",
    url: "https://dns.inbrowser.app",
  },
  {
    name: "IP",
    url: "https://ip.inbrowser.app",
  },
  {
    name: "Authenticator",
    url: "https://authenticator.inbrowser.app",
  },
  {
    name: "MAC Address",
    url: "https://macaddress.inbrowser.app",
  },
  {
    name: "PDF",
    url: "https://pdf.inbrowser.app",
  },
  {
    name: "tldr-pages",
    url: "https://tldr.inbrowser.app",
  },
  {
    name: "UUID",
    url: "https://uuid.inbrowser.app",
  },
];

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
