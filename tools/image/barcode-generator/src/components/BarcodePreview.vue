<template>
  <n-flex align="center" vertical :size="12">
    <n-skeleton v-if="isLoading" :style="{ width: '100%', height: props.height + 40 + 'px' }" />
    <img v-else-if="svgDataUrl" :src="svgDataUrl" :style="{ maxWidth: '100%' }" alt="Barcode" />
  </n-flex>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { NFlex, NSkeleton } from 'naive-ui'
import JsBarcode from 'jsbarcode'
import type { Options } from 'jsbarcode'
import { computedAsync, useDebounce } from '@vueuse/core'

const props = defineProps<{
  text: string
  format: string
  width: number
  height: number
  margin: number
  displayValue: boolean
  textAlign: 'left' | 'center' | 'right'
  textPosition: 'top' | 'bottom'
  fontSize: number
  lineColor: string
  background: string
}>()

const isLoading = ref(false)

const input = computed(() => ({
  text: props.text || ' ',
  format: props.format,
  width: props.width,
  height: props.height,
  margin: props.margin,
  displayValue: props.displayValue,
  textAlign: props.textAlign,
  textPosition: props.textPosition,
  fontSize: props.fontSize,
  lineColor: props.lineColor,
  background: props.background,
}))
const debouncedInput = useDebounce(input, 150)

const svgString = computedAsync<string>(
  async () => {
    const v = debouncedInput.value
    try {
      const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
      JsBarcode(svg, v.text, {
        format: v.format,
        width: v.width,
        height: v.height,
        margin: v.margin,
        displayValue: v.displayValue,
        textAlign: v.textAlign,
        textPosition: v.textPosition,
        fontSize: v.fontSize,
        lineColor: v.lineColor,
        background: v.background,
        xmlDocument: document,
      } as Partial<Options>)
      return svg.outerHTML
    } catch {
      return ''
    }
  },
  '',
  { evaluating: isLoading },
)

const svgDataUrl = computed<string>(() =>
  svgString.value ? `data:image/svg+xml;utf8,${encodeURIComponent(svgString.value)}` : '',
)
</script>
