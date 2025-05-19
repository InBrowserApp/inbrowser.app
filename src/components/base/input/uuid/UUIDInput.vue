<template>
  <n-input
    v-model:value="uuidRef"
    :placeholder="placeholder"
    :status="validated ? undefined : 'error'"
  >
    <template #suffix>
      <n-icon style="cursor: pointer" :component="RefreshOutline" @click="uuidRef = uuidv4()" />
    </template>
  </n-input>
</template>

<script setup lang="ts">
import { ref, computed, watch, toRef } from 'vue'

import { NInput, NIcon } from 'naive-ui'
import RefreshOutline from '@vicons/ionicons5/RefreshOutline'
import { v4 as uuidv4, validate } from 'uuid'

const placeholder = uuidv4()

const props = defineProps<{
  uuid?: string
}>()

const emit = defineEmits<{
  (event: 'update:uuid', uuid?: string): void
}>()

const uuidRef = ref(props.uuid)
const uuidOuterRef = toRef(props, 'uuid')

const validated = computed(() => {
  return uuidRef.value ? validate(uuidRef.value) : false
})

watch(
  () => uuidRef.value,
  (uuid?: string) => {
    if (uuid && validate(uuid)) {
      emit('update:uuid', uuid)
    } else {
      emit('update:uuid', undefined)
    }
  },
)

watch(uuidOuterRef, (uuid) => {
  uuidRef.value = uuid
})
</script>
