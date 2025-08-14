<template>
  <ToolDefaultPageLayout :info="toolInfo" hide-related-tools>
    <TagsTools tags="image" exclude="image-tools" />
  </ToolDefaultPageLayout>
</template>

<script setup lang="ts">
import * as toolInfo from './info'
import { ToolDefaultPageLayout, TagsTools } from '@shared/ui/tool'
</script>
