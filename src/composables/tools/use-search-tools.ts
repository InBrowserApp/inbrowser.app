import { tools, type ToolInfo } from '@/tools'
import { type Ref, computed } from 'vue'
import { get } from '@vueuse/core'
import { supportedLanguages } from '@/locale'

export function useSearchTools(query: string | Ref<string>) {
  const toolsResults = computed<ToolInfo[]>(() => {
    const queryValue = get(query)
    return tools.filter((tool) => {
      for (const lang of supportedLanguages) {
        const name = tool.meta[lang].name
        if (name.toLowerCase().includes(queryValue.toLowerCase())) {
          return true
        }
      }
    })
  })

  return {
    toolsResults,
  }
}
