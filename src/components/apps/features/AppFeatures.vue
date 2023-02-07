<template>
  <n-space size="small">
    <FeatureDarkMode v-if="info.features?.darkMode" />
    <FeatureOffline v-if="info.features?.offline" />
  </n-space>
</template>

<script setup lang="ts">
import type { AppInfo } from "@/data/apps";

import { NSpace } from "naive-ui";
import FeatureDarkMode from "./feature/FeatureDarkMode.vue";
import FeatureOffline from "./feature/FeatureOffline.vue";

defineProps<{
  info: AppInfo;
}>();
</script>
