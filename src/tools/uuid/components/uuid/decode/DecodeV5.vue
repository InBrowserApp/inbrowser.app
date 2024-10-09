<template>
  <n-descriptions label-placement="left" bordered :column="1" content-style="width: 100%">
    <n-descriptions-item label="UUID">
      <n-text code>{{ uuid }}</n-text>
    </n-descriptions-item>
    <n-descriptions-item label="Version">
      <VersionDisplay :version="decodeResult.version" />
    </n-descriptions-item>
    <n-descriptions-item label="Variant">
      <VariantDisplay :variant="decodeResult.variant" />
    </n-descriptions-item>
    <n-descriptions-item label="Algorithm">SHA1</n-descriptions-item>
  </n-descriptions>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { NDescriptions, NDescriptionsItem, NText } from 'naive-ui'
import { decode } from '../../../utils/uuid/decode/decode'
import VersionDisplay from './VersionDisplay.vue'
import VariantDisplay from './VariantDisplay.vue'

const props = defineProps<{
  uuid: string
}>()

const decodeResult = computed(() => decode(props.uuid))
</script>
