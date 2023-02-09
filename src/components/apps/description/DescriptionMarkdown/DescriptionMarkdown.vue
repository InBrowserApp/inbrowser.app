<template>
  <!-- eslint-disable vue/no-v-text-v-html-on-component -->
  <n-el v-html="html" class="main-markdown"></n-el>
  <!-- eslint-enable -->
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { marked } from "marked";
import DOMPurify from "dompurify";
import { NEl } from "naive-ui";
import "./markdown.scss";

const props = defineProps<{
  markdown: string;
}>();

const html = computed(() => DOMPurify.sanitize(marked.parse(props.markdown)));
</script>
