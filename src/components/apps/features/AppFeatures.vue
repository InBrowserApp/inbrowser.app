<template>
  <div style="display: flex; gap: 0.4em">
    <template v-for="feature of features" :key="feature">
      <component
        :is="featureComponents[feature]"
        v-if="info.features?.[feature]"
      />
    </template>
  </div>
</template>

<script setup lang="ts">
import type { AppInfo } from "@/data/apps";

import { features } from "@/data/features";

import { featureComponents } from "./feature";

defineProps<{
  info: AppInfo;
}>();
</script>
