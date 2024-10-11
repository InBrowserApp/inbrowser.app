<template>
  <n-input-group>
    <n-input placeholder="IPv4 / IPv6 / Domain" v-model:value="value" @keydown.enter="goToIPInfo" />
    <n-button
      ghost
      @click="goToIPInfo"
      tag="a"
      v-bind="{
        ...(href && { href: href })
      }"
    >
      <template #icon>
        <n-icon>
          <Search16Filled />
        </n-icon>
      </template>
    </n-button>
  </n-input-group>
</template>

<script setup lang="ts">
import { NInput, NButton, NInputGroup, NIcon } from 'naive-ui'
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { Search16Filled } from '@vicons/fluent'

const router = useRouter()

const value = ref('')
const goToIPInfo = () => {
  if (value.value === '') return

  router.push(`/tools/network/ip-info/${value.value}`)
}

const href = computed(() => {
  if (value.value === '') return undefined

  return `/tools/network/ip-info/${value.value}`
})
</script>
