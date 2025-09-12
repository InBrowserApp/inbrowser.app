<template>
  <InfoStatistic :label="t('gpu-vendor')" :value="gpuVendor" />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import InfoStatistic from '../common/InfoStatistic.vue'

const { t } = useI18n()

// GPU Information
const getWebGLDebugInfo = () => {
  try {
    const canvas = document.createElement('canvas')
    const gl = canvas.getContext('webgl') as WebGLRenderingContext | null
    if (gl) {
      const debugInfo = gl.getExtension('WEBGL_debug_renderer_info')
      if (debugInfo) {
        return {
          renderer: gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL) || null,
          vendor: gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL) || null,
        }
      }
    }
    return { renderer: null, vendor: null }
  } catch {
    return { renderer: null, vendor: null }
  }
}

const gpuInfo = computed(() => getWebGLDebugInfo())
const gpuVendor = computed(() => gpuInfo.value.vendor)
</script>

<i18n lang="json">
{
  "en": {
    "gpu-vendor": "GPU Vendor"
  },
  "zh": {
    "gpu-vendor": "GPU厂商"
  }
}
</i18n>
