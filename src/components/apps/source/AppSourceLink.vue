<template>
  <n-button text tag="a" :href="source" target="_blank">
    <template #icon>
      <n-icon :component="icon" />
    </template>
    {{ urlDisplay }}
  </n-button>
</template>

<script setup lang="ts">
import { NButton, NIcon } from "naive-ui";
import IconLink from "@vicons/fluent/Link16Regular";
import IconGithub from "@vicons/fa/Github";
import IconGitlab from "@vicons/fa/Gitlab";
import IconBitbucket from "@vicons/fa/Bitbucket";

import { computed } from "vue";

const props = defineProps<{
  source: string;
}>();

// remove protocol from URL
const urlDisplay = computed(() => {
  if (props.source.startsWith("https://github.com/")) {
    return props.source.slice("https://github.com/".length);
  }

  return props.source.replace(/(^\w+:|^)\/\//, "");
});

const icon = computed(() => {
  if (props.source.includes("github.com")) {
    return IconGithub;
  }

  if (props.source.includes("gitlab.com")) {
    return IconGitlab;
  }

  if (props.source.includes("bitbucket.org")) {
    return IconBitbucket;
  }

  return IconLink;
});
</script>
