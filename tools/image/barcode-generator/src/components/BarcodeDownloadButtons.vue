<template>
  <n-flex :size="8" wrap>
    <n-button tertiary @click="downloadPNG">
      <template #icon>
        <n-icon><ImageIcon /></n-icon>
      </template>
      PNG
    </n-button>
    <n-button tertiary @click="downloadSVG">
      <template #icon>
        <n-icon><CodeIcon /></n-icon>
      </template>
      SVG
    </n-button>
  </n-flex>
</template>

<script setup lang="ts">
import { NFlex, NButton, NIcon } from 'naive-ui'
import JsBarcode from 'jsbarcode'
import type { Options } from 'jsbarcode'
import { Code16Regular as CodeIcon, Image16Regular as ImageIcon } from '@shared/icons/fluent'

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

function downloadBlob(file: File) {
  const url = URL.createObjectURL(file)
  const a = document.createElement('a')
  a.href = url
  a.download = file.name
  a.click()
  URL.revokeObjectURL(url)
}

function buildOptions(): Partial<Options> {
  return {
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
    xmlDocument: document,
  }
}

async function downloadPNG() {
  const canvas = document.createElement('canvas')
  JsBarcode(canvas, props.text || ' ', buildOptions())
  await new Promise<void>((resolve) => setTimeout(resolve))
  await new Promise<void>((resolve) => {
    canvas.toBlob((blob) => {
      if (!blob) return resolve()
      downloadBlob(new File([blob], 'barcode.png', { type: 'image/png' }))
      resolve()
    }, 'image/png')
  })
}

async function downloadSVG() {
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
  JsBarcode(svg, props.text || ' ', buildOptions())
  const svgText = svg.outerHTML
  downloadBlob(new File([svgText], 'barcode.svg', { type: 'image/svg+xml' }))
}
</script>
