import type { Ref } from 'vue'
import { h } from 'vue'
import { get } from '@vueuse/core'
import { useMessage, NIcon } from 'naive-ui'
import ClipboardCheckmark20Regular from '@vicons/fluent/ClipboardCheckmark20Regular'

export function useCopyToClipboard(text: Ref<string> | string) {
  const message = useMessage()

  const copy = () => {
    navigator.clipboard.writeText(get(text))
    message.create('Copied to clipboard', {
      icon: () => h(NIcon, null, { default: () => h(ClipboardCheckmark20Regular) })
    })
  }

  return { copy }
}
