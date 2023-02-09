<template>
  <n-button @click="onClick" text>
    <template #icon>
      <n-icon :component="ArrowBackOutline" />
    </template>
    Back
  </n-button>
</template>

<script setup lang="ts">
import { NIcon, NButton } from "naive-ui";
import ArrowBackOutline from "@vicons/ionicons5/ArrowBackOutline";
import { useRouter } from "vue-router";

const router = useRouter();
const onClick = () => {
  router.push("/");
};
</script>
