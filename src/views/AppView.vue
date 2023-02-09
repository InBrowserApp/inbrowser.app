<template>
  <main>
    <BackToHome style="margin-bottom: 1em" />
    <div v-if="app">
      <div class="head-wrapper">
        <n-h1 style="margin-block-end: 0px" prefix="bar" align-text>{{
          app.title
        }}</n-h1>
        <div>
          <AppFeatures :info="app" />
        </div>
      </div>

      <n-p v-if="description">
        <DescriptionMarkdown :markdown="description" />
      </n-p>

      <n-divider />

      <div>
        <AppURL :info="app" />
      </div>
      <div>
        <AppSourceLink :source="app.source" v-if="app.source" />
      </div>
    </div>
  </main>
</template>

<script lang="ts" setup>
import { useRouteParams } from "@vueuse/router";
import { getApp, getDescription } from "@/data/apps";
import { NH1, NP, NDivider } from "naive-ui";
import { computedAsync } from "@vueuse/core";

import BackToHome from "@/components/misc/BackToHome.vue";

import AppURL from "@/components/apps/url/AppURL.vue";
import AppFeatures from "@/components/apps/features/AppFeatures.vue";
import AppSourceLink from "@/components/apps/source/AppSourceLink.vue";
import DescriptionMarkdown from "@/components/apps/description/DescriptionMarkdown/DescriptionMarkdown.vue";

const appId = useRouteParams("appId");

const app = computedAsync(() => getApp(appId.value as string), undefined);
const description = computedAsync(
  () => getDescription(appId.value as string),
  undefined
);
</script>

<style scoped>
.head-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}
</style>
