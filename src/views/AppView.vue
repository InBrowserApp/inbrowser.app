<template>
  <main>
    <n-h1 prefix="bar" align-text>{{ app.title }}</n-h1>
    <AppURL :info="app" />
  </main>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { useRouteParams } from "@vueuse/router";
import { getApp } from "@/data/apps";
import { NH1 } from "naive-ui";

import AppURL from "@/components/apps/url/AppURL.vue";

const appId = useRouteParams("appId");
const app = computed(() => getApp(appId.value as string));
</script>
