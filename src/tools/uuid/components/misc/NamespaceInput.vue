<template>
  <n-form-item label="Namespace" :show-feedback="false">
    <n-input
      v-model:value="namespaceRef"
      :placeholder="placeholder"
      :status="validated ? undefined : 'error'"
    >
      <template #suffix
        ><n-icon
          style="cursor: pointer"
          :component="RefreshOutline"
          @click="namespaceRef = uuidv4()"
      /></template>
    </n-input>
  </n-form-item>
  <n-space style="margin-top: 0.3em; margin-bottom: 0.7em">
    <n-tag
      :bordered="false"
      class="predefined"
      @click="namespaceRef = '6ba7b810-9dad-11d1-80b4-00c04fd430c8'"
      >ns:DNS</n-tag
    >
    <n-tag
      :bordered="false"
      class="predefined"
      @click="namespaceRef = '6ba7b811-9dad-11d1-80b4-00c04fd430c8'"
      >ns:URL</n-tag
    >
    <n-tag
      :bordered="false"
      class="predefined"
      @click="namespaceRef = '6ba7b812-9dad-11d1-80b4-00c04fd430c8'"
      >ns:OID</n-tag
    >
    <n-tag
      :bordered="false"
      class="predefined"
      @click="namespaceRef = '6ba7b814-9dad-11d1-80b4-00c04fd430c8'"
      >ns:X.500 DN</n-tag
    >
  </n-space>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'

import { NInput, NIcon, NFormItem, NTag, NSpace } from 'naive-ui'
import RefreshOutline from '@vicons/ionicons5/RefreshOutline'
import { v4 as uuidv4, validate } from 'uuid'

const placeholder = uuidv4()

const props = defineProps<{
  namespace: string
}>()

const emit = defineEmits<{
  (event: 'update:namespace', namespace: string): void
}>()

const namespaceRef = ref(props.namespace)

const validated = computed(() => {
  return validate(namespaceRef.value)
})

watch(
  () => namespaceRef.value,
  (namespace: string) => {
    if (validate(namespace)) {
      emit('update:namespace', namespace)
    }
  }
)
</script>

<style scoped>
.predefined {
  cursor: pointer;
}
</style>
