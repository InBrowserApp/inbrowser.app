import { h } from 'vue'
import type { MenuOption } from 'naive-ui'
import IndexMenu from './IndexMenu.vue'

export function useExpandedMenuOptions(): MenuOption[] {
  return [
    {
      label: () => h(IndexMenu),
      key: 'go-to-home-page',
    },
  ]
}

export function useCollapsedMenuOptions(): MenuOption[] {
  return [...useExpandedMenuOptions()]
}
