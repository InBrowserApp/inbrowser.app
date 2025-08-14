import { ref, h, type Ref, type VNodeChild, computed } from 'vue'
import ToolEntry from './ToolEntry.vue'
import type { ToolInfo } from '@shared/tools'
import { useSearchTools } from '@registry/tools/search'

export type SearchResult = {
  label: string
  value: string
  action: 'tool'
  info: ToolInfo
}

export const useSearchResults = (): {
  query: Ref<string>
  loading: Ref<boolean>
  searchResults: Ref<SearchResult[]>
} => {
  const query = ref('')
  const { toolsResults, searching } = useSearchTools(query)

  const searchResults = computed(() => {
    return toolsResults.value.map((tool) => ({
      label: tool.toolID,
      value: `tool:${tool.toolID}`,
      action: 'tool' as const,
      info: tool,
    }))
  })

  return { query, loading: searching, searchResults }
}

export const renderSearchResultLabel = (option: SearchResult): VNodeChild => {
  return h(ToolEntry, {
    info: option.info,
  })
}
