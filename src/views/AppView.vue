<template>
  <main>
    <n-h1 prefix="bar" align-text>{{ app.title }}</n-h1>
    <div>
      <AppFeatures :info="app" />
    </div>
    <div>
      <AppURL :info="app" />
    </div>
    <div>
      <AppSourceLink :source="app.source" v-if="app.source" />
    </div>
  </main>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { useRouteParams } from "@vueuse/router";
import { getApp } from "@/data/apps";
import { NH1 } from "naive-ui";

import AppURL from "@/components/apps/url/AppURL.vue";
import AppFeatures from "@/components/apps/features/AppFeatures.vue";
import AppSourceLink from "@/components/apps/source/AppSourceLink.vue";

const appId = useRouteParams("appId");
const app = computed(() => getApp(appId.value as string));
</script>
