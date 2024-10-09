<template>
  <n-scrollbar style="max-height: 8em">
    <div v-for="uuid in shownUUIDs" :key="uuid">
      <n-text code style="word-break: break-all; font-size: 1em">
        {{ uuid }}
      </n-text>
    </div>
  </n-scrollbar>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { NText, NScrollbar } from 'naive-ui'

const maxShown = 500

const props = defineProps<{
  uuids: string[]
}>()

const shownUUIDs = computed(() => {
  if (props.uuids.length > maxShown) {
    return props.uuids.slice(0, maxShown)
  } else {
    return props.uuids
  }
})
</script>
