import type { Ref } from 'vue'
import { h } from 'vue'
import { get } from '@vueuse/core'
import { useMessage, NIcon } from 'naive-ui'
import { ClipboardCheckmark20Regular } from '@vicons/fluent'

export function useCopyToClipboard(text: Ref<string> | string) {
  const message = useMessage()

  const copy = () => {
    try {
      navigator.clipboard.writeText(get(text))
      message.create('Copied to clipboard', {
        icon: () => h(NIcon, null, { default: () => h(ClipboardCheckmark20Regular) })
      })
    } catch (error) {
      console.error('Failed to copy to clipboard:', error)
      message.error('Failed to copy to clipboard')
    }
  }

  return { copy }
}
