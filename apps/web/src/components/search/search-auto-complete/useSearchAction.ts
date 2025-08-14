import type { Ref, ComputedRef, VNodeChild } from 'vue'
import { computed, h } from 'vue'
import SearchPageLabel from './SearchPageLabel.vue'

export type SearchActionOption = {
  label: string
  value: string
  query: string
  action: 'search'
}

export const useSearchAction = (
  query: Ref<string>,
): {
  searchActionOption: ComputedRef<SearchActionOption>
} => {
  const searchActionOption = computed(
    (): SearchActionOption => ({
      label: `Search ${query.value}`,
      value: `search:${query.value}`,
      action: 'search',
      query: query.value,
    }),
  )

  return { searchActionOption }
}

export const renderSearchActionLabel = (option: SearchActionOption): VNodeChild => {
  const { query } = option
  return h(SearchPageLabel, { query })
}
