<template>
  <ToolViewTemplate title="UUID Tools">
    <n-h2 prefix="bar" align-text>Get a Random UUID</n-h2>
    <UUIDV4Generator />
    <n-h2 prefix="bar" align-text>Tools List</n-h2>
    UUID Generator:
    <router-link
      :to="{
        name: 'tools-uuid-v1'
      }"
      #="{ navigate, href }"
      custom
    >
      <n-a :href="href" @click="navigate">Version 1</n-a>
    </router-link>
    <n-divider vertical />
    <router-link
      :to="{
        name: 'tools-uuid-v3'
      }"
      #="{ navigate, href }"
      custom
    >
      <n-a :href="href" @click="navigate">Version 3</n-a>
    </router-link>
    <n-divider vertical />
    <router-link
      :to="{
        name: 'tools-uuid-v4'
      }"
      #="{ navigate, href }"
      custom
    >
      <n-a :href="href" @click="navigate">Version 4</n-a>
    </router-link>
    <n-divider vertical />
    <router-link
      :to="{
        name: 'tools-uuid-v5'
      }"
      #="{ navigate, href }"
      custom
    >
      <n-a :href="href" @click="navigate">Version 5</n-a>
    </router-link>
    <n-divider vertical />
    <router-link
      :to="{
        name: 'tools-uuid-nil'
      }"
      #="{ navigate, href }"
      custom
    >
      <n-a :href="href" @click="navigate">Nil UUID</n-a>
    </router-link>
    <br />
    Bulk UUID Generator:
    <router-link
      :to="{
        name: 'tools-uuid-bulk-v1'
      }"
      #="{ navigate, href }"
      custom
    >
      <n-a :href="href" @click="navigate">Version 1</n-a>
    </router-link>
    <n-divider vertical />
    <router-link
      :to="{
        name: 'tools-uuid-bulk-v4'
      }"
      #="{ navigate, href }"
      custom
    >
      <n-a :href="href" @click="navigate">Version 4</n-a>
    </router-link>
    <br />
    Utilities:
    <router-link
      :to="{
        name: 'tools-uuid-decode'
      }"
      #="{ navigate, href }"
      custom
    >
      <n-a :href="href" @click="navigate">Decode UUID</n-a>
    </router-link>
  </ToolViewTemplate>
</template>

<script setup lang="ts">
import { NH2, NDivider, NA } from 'naive-ui'
import UUIDV4Generator from '../components/uuid/generator/UUIDV4Generator.vue'
import { useTitle, useDescription } from '@/composables/head'
import ToolViewTemplate from '@/components/layouts/tool-view-template/ToolViewTemplate.vue'

useTitle('UUID Tools')
useDescription('UUID Tools.')
</script>
