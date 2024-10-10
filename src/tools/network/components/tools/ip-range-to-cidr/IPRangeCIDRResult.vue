<template>
  <n-p>
    <span>{{ cidrs.length }} CIDRs:</span>
    <n-ul>
      <n-li v-for="cidr in cidrs" :key="cidr">{{ cidr }}</n-li>
    </n-ul>
  </n-p>
</template>

<script setup lang="ts">
import { Cidr, IpAddress, IpRange } from 'cidr-calc'
import { computed } from 'vue'
import { NUl, NLi, NP } from 'naive-ui'

const props = defineProps<{
  ipRange: [string, string]
}>()

const cidrs = computed(() => {
  const ipRange = props.ipRange
  const ipRange_ = new IpRange(IpAddress.of(ipRange[0]), IpAddress.of(ipRange[1]))

  const cidrs = ipRange_.toCidrs()
  const cidrsString = cidrs.map((cidr: Cidr) => cidr.toString())

  return cidrsString
})
</script>
