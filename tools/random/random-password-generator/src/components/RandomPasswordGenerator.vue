<template>
  <n-grid cols="2 l:4" responsive="screen" :x-gap="40" :y-gap="20">
    <n-gi span="2 l:3">
      <ToolSectionHeader>{{ t('options') }}</ToolSectionHeader>
      <ToolSection>
        <n-tabs v-model:value="activeTab" :default-value="'random'" type="segment" animated>
          <n-tab-pane name="random" :tab="t('tab-random')">
            <template #tab>
              <n-flex align="center" size="small">
                <n-icon>
                  <RandomIcon />
                </n-icon>
                <span>
                  {{ t('tab-random') }}
                </span>
              </n-flex>
            </template>
            <RandomTab v-model:value="randomValue" :nonce="nonce" />
          </n-tab-pane>
          <n-tab-pane name="words" :tab="t('tab-words')">
            <template #tab>
              <n-flex align="center" size="small">
                <n-icon>
                  <WordsIcon />
                </n-icon>
                <span>
                  {{ t('tab-words') }}
                </span>
              </n-flex>
            </template>
            <WordsTab v-model:value="wordsValue" :nonce="nonce" />
          </n-tab-pane>
          <n-tab-pane name="separator">
            <template #tab>
              <n-flex align="center" size="small">
                <n-icon>
                  <SeparatorIcon />
                </n-icon>
                <span>
                  {{ t('tab-separator') }}
                </span>
              </n-flex>
            </template>
            <SeparatorTab v-model:value="separatorValue" :nonce="nonce" />
          </n-tab-pane>
          <n-tab-pane name="pin">
            <template #tab>
              <n-flex align="center" size="small">
                <n-icon>
                  <PinIcon />
                </n-icon>
                <span>
                  {{ t('tab-pin') }}
                </span>
              </n-flex>
            </template>
            <PinTab v-model:value="pinValue" :nonce="nonce" />
          </n-tab-pane>
        </n-tabs>
      </ToolSection>
    </n-gi>

    <n-gi span="2 l:1">
      <ToolSectionHeader> {{ t('results') }}</ToolSectionHeader>

      <ToolSection>
        <n-flex vertical :size="8">
          <n-flex justify="center">
            <CopyToClipboardTooltip :content="password" #="{ copy }">
              <n-text
                code
                style="cursor: pointer; font-size: 2em; word-break: break-all"
                @click="copy"
                >{{ password }}</n-text
              >
            </CopyToClipboardTooltip>
          </n-flex>
          <n-flex>
            <CopyToClipboardButton :content="password" />
            <RegenerateButton @click="regenerate" />
          </n-flex>
        </n-flex>
      </ToolSection>
    </n-gi>
  </n-grid>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { NTabs, NTabPane, NText, NFlex, NIcon, NGrid, NGi } from 'naive-ui'
import { ToolSection, ToolSectionHeader } from '@shared/ui/tool'
import { CopyToClipboardTooltip, RegenerateButton, CopyToClipboardButton } from '@shared/ui/base'
import { useStorage } from '@vueuse/core'
import RandomTab from './RandomTab.vue'
import WordsTab from './WordsTab.vue'
import SeparatorTab from './SeparatorTab.vue'
import PinTab from './PinTab.vue'
import {
  NumberSymbol16Regular as PinIcon,
  TextChangeCase16Regular as WordsIcon,
  LineHorizontal120Filled as SeparatorIcon,
  MathSymbols16Regular as RandomIcon,
} from '@shared/icons/fluent'
// import { Random16Regular as RandomIcon } from '@shared/icons/fluent'

const { t } = useI18n()

const activeTab = useStorage<'random' | 'words' | 'separator' | 'pin'>(
  'tools:random-password-generator:activeTab',
  'random',
)

const randomValue = ref('')
const wordsValue = ref('')
const separatorValue = ref('')
const pinValue = ref('')

const nonce = useStorage<number>('tools:random-password-generator:nonce', 0)
function regenerate() {
  nonce.value++
}

const password = computed(() => {
  switch (activeTab.value) {
    case 'random':
      return randomValue.value
    case 'words':
      return wordsValue.value
    case 'separator':
      return separatorValue.value
    case 'pin':
      return pinValue.value
    default:
      return ''
  }
})
</script>

<i18n lang="json">
{
  "en": {
    "options": "Options",
    "tab-random": "Random",
    "tab-words": "Words",
    "tab-separator": "Separator",
    "tab-pin": "PIN",
    "results": "Results",
    "regenerate": "Regenerate"
  },
  "zh": {
    "options": "选项",
    "tab-random": "随机",
    "tab-words": "单词",
    "tab-separator": "分隔",
    "tab-pin": "PIN",
    "results": "结果",
    "regenerate": "重新生成"
  },
  "zh-CN": {
    "options": "选项",
    "tab-random": "随机",
    "tab-words": "单词",
    "tab-separator": "分隔",
    "tab-pin": "PIN",
    "results": "结果",
    "regenerate": "重新生成"
  },
  "zh-TW": {
    "options": "選項",
    "tab-random": "隨機",
    "tab-words": "單詞",
    "tab-separator": "分隔",
    "tab-pin": "PIN",
    "results": "結果",
    "regenerate": "重新生成"
  },
  "zh-HK": {
    "options": "選項",
    "tab-random": "隨機",
    "tab-words": "單詞",
    "tab-separator": "分隔",
    "tab-pin": "PIN",
    "results": "結果",
    "regenerate": "重新生成"
  },
  "es": {
    "options": "Options",
    "tab-random": "Random",
    "tab-words": "Words",
    "tab-separator": "Separator",
    "tab-pin": "PIN",
    "results": "Results",
    "regenerate": "Regenerate"
  },
  "fr": {
    "options": "Options",
    "tab-random": "Random",
    "tab-words": "Words",
    "tab-separator": "Separator",
    "tab-pin": "PIN",
    "results": "Results",
    "regenerate": "Regenerate"
  },
  "de": {
    "options": "Options",
    "tab-random": "Random",
    "tab-words": "Words",
    "tab-separator": "Separator",
    "tab-pin": "PIN",
    "results": "Results",
    "regenerate": "Regenerate"
  },
  "it": {
    "options": "Options",
    "tab-random": "Random",
    "tab-words": "Words",
    "tab-separator": "Separator",
    "tab-pin": "PIN",
    "results": "Results",
    "regenerate": "Regenerate"
  },
  "ja": {
    "options": "Options",
    "tab-random": "Random",
    "tab-words": "Words",
    "tab-separator": "Separator",
    "tab-pin": "PIN",
    "results": "Results",
    "regenerate": "Regenerate"
  },
  "ko": {
    "options": "Options",
    "tab-random": "Random",
    "tab-words": "Words",
    "tab-separator": "Separator",
    "tab-pin": "PIN",
    "results": "Results",
    "regenerate": "Regenerate"
  },
  "ru": {
    "options": "Options",
    "tab-random": "Random",
    "tab-words": "Words",
    "tab-separator": "Separator",
    "tab-pin": "PIN",
    "results": "Results",
    "regenerate": "Regenerate"
  },
  "pt": {
    "options": "Options",
    "tab-random": "Random",
    "tab-words": "Words",
    "tab-separator": "Separator",
    "tab-pin": "PIN",
    "results": "Results",
    "regenerate": "Regenerate"
  },
  "ar": {
    "options": "Options",
    "tab-random": "Random",
    "tab-words": "Words",
    "tab-separator": "Separator",
    "tab-pin": "PIN",
    "results": "Results",
    "regenerate": "Regenerate"
  },
  "hi": {
    "options": "Options",
    "tab-random": "Random",
    "tab-words": "Words",
    "tab-separator": "Separator",
    "tab-pin": "PIN",
    "results": "Results",
    "regenerate": "Regenerate"
  },
  "tr": {
    "options": "Options",
    "tab-random": "Random",
    "tab-words": "Words",
    "tab-separator": "Separator",
    "tab-pin": "PIN",
    "results": "Results",
    "regenerate": "Regenerate"
  },
  "nl": {
    "options": "Options",
    "tab-random": "Random",
    "tab-words": "Words",
    "tab-separator": "Separator",
    "tab-pin": "PIN",
    "results": "Results",
    "regenerate": "Regenerate"
  },
  "sv": {
    "options": "Options",
    "tab-random": "Random",
    "tab-words": "Words",
    "tab-separator": "Separator",
    "tab-pin": "PIN",
    "results": "Results",
    "regenerate": "Regenerate"
  },
  "pl": {
    "options": "Options",
    "tab-random": "Random",
    "tab-words": "Words",
    "tab-separator": "Separator",
    "tab-pin": "PIN",
    "results": "Results",
    "regenerate": "Regenerate"
  },
  "vi": {
    "options": "Options",
    "tab-random": "Random",
    "tab-words": "Words",
    "tab-separator": "Separator",
    "tab-pin": "PIN",
    "results": "Results",
    "regenerate": "Regenerate"
  },
  "th": {
    "options": "Options",
    "tab-random": "Random",
    "tab-words": "Words",
    "tab-separator": "Separator",
    "tab-pin": "PIN",
    "results": "Results",
    "regenerate": "Regenerate"
  },
  "id": {
    "options": "Options",
    "tab-random": "Random",
    "tab-words": "Words",
    "tab-separator": "Separator",
    "tab-pin": "PIN",
    "results": "Results",
    "regenerate": "Regenerate"
  },
  "he": {
    "options": "Options",
    "tab-random": "Random",
    "tab-words": "Words",
    "tab-separator": "Separator",
    "tab-pin": "PIN",
    "results": "Results",
    "regenerate": "Regenerate"
  },
  "ms": {
    "options": "Options",
    "tab-random": "Random",
    "tab-words": "Words",
    "tab-separator": "Separator",
    "tab-pin": "PIN",
    "results": "Results",
    "regenerate": "Regenerate"
  },
  "no": {
    "options": "Options",
    "tab-random": "Random",
    "tab-words": "Words",
    "tab-separator": "Separator",
    "tab-pin": "PIN",
    "results": "Results",
    "regenerate": "Regenerate"
  }
}
</i18n>
