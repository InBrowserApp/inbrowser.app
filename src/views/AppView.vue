<template>
  {{ appId }}
</template>

<script lang="ts" setup>
import { useRouteParams } from "@vueuse/router";

const appId = useRouteParams("appId");
</script>
