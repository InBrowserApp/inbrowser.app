<template>
  <n-button text tag="a" :href="info.url" target="_blank">
    <template #icon>
      <n-icon>
        <icon-link />
      </n-icon>
    </template>
    {{ url }}
  </n-button>
</template>

<script setup lang="ts">
import type { AppInfo } from "@/data/apps";
import { NButton, NIcon } from "naive-ui";
import IconLink from "@vicons/fluent/Link16Regular";
import { computed } from "vue";

const props = defineProps<{
  info: AppInfo;
}>();

// remove protocol from URL
const url = computed(() => props.info.url.replace(/(^\w+:|^)\/\//, ""));
</script>
