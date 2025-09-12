<template>
  <ToolSection>
    <ToolSectionHeader level="2">{{ t('hardware-info') }}</ToolSectionHeader>

    <InfosGrid>
      <!-- CPU Information -->
      <CpuCores />
      <CpuArchitecture />
      <CpuBitness />

      <!-- Memory Information -->
      <DeviceMemory />

      <!-- Storage Information -->
      <StorageQuota />

      <!-- Network Information -->
      <ConnectionType />
      <ConnectionSpeed />

      <!-- Device Information -->
      <MaxTouchPoints />
      <DeviceModel />
      <FormFactor />

      <!-- GPU Information -->
      <GpuVendor />
      <GpuRenderer />
    </InfosGrid>
  </ToolSection>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { ToolSectionHeader, ToolSection } from '@shared/ui/tool'
import InfosGrid from '../common/InfosGrid.vue'

// Hardware Components
import CpuCores from '../hardwares/CpuCores.vue'
import CpuArchitecture from '../hardwares/CpuArchitecture.vue'
import CpuBitness from '../hardwares/CpuBitness.vue'
import DeviceMemory from '../hardwares/DeviceMemory.vue'
import StorageQuota from '../hardwares/StorageQuota.vue'
import GpuVendor from '../hardwares/GpuVendor.vue'
import GpuRenderer from '../hardwares/GpuRenderer.vue'
import ConnectionType from '../hardwares/ConnectionType.vue'
import ConnectionSpeed from '../hardwares/ConnectionSpeed.vue'
import MaxTouchPoints from '../hardwares/MaxTouchPoints.vue'
import DeviceModel from '../hardwares/DeviceModel.vue'
import FormFactor from '../hardwares/FormFactor.vue'
const { t } = useI18n()
</script>

<i18n lang="json">
{
  "en": {
    "hardware-info": "Hardware Information"
  },
  "zh": {
    "hardware-info": "硬件信息"
  }
}
</i18n>
