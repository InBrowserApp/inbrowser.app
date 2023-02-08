<template>
  <main>
    <div v-if="app">
      <div
        style="
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 10px;
        "
      >
        <n-h1 style="margin-block-end: 0px" prefix="bar" align-text>{{
          app.title
        }}</n-h1>
        <div>
          <AppFeatures :info="app" />
        </div>
      </div>

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
import { getApp } from "@/data/apps";
import { NH1 } from "naive-ui";
import { computedAsync } from "@vueuse/core";

import AppURL from "@/components/apps/url/AppURL.vue";
import AppFeatures from "@/components/apps/features/AppFeatures.vue";
import AppSourceLink from "@/components/apps/source/AppSourceLink.vue";

const appId = useRouteParams("appId");

const app = computedAsync(() => getApp(appId.value as string), undefined);
</script>
