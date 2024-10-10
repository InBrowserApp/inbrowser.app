<template>
  <template v-if="isIP">
    <a
      :href="`https://ip.inbrowser.app/tools/ip-info/${data}`"
      target="_blank"
      rel="noopener noreferrer"
      class="ip-link"
    >
      {{ data }}
    </a>
  </template>
  <template v-else>
    {{ data }}
  </template>
</template>

<script lang="ts" setup>
import { isIP as isIPFunc } from 'is-ip'
import { computed } from 'vue'

const props = defineProps<{
  data: string
}>()

const isIP = computed(() => {
  return isIPFunc(props.data)
})
</script>

<style scoped>
.ip-link {
  color: inherit;
  text-decoration: none;
}

.ip-link:hover {
  text-decoration: underline;
}
</style>
