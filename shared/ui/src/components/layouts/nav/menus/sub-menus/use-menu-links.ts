import { h } from 'vue'
import type { MenuOption } from 'naive-ui'
import IndexMenu from './IndexMenu.vue'
import AllToolsMenu from './AllToolsMenu.vue'
import GitHubMenu from './GitHubMenu.vue'

export function useExpandedMenuOptions(): MenuOption[] {
  return [
    {
      label: () => h(IndexMenu),
      key: 'go-to-home-page',
    },
    {
      label: () => h(AllToolsMenu),
      key: 'go-to-all-tools-page',
    },
  ]
}

export function useCollapsedMenuOptions(): MenuOption[] {
  return [
    ...useExpandedMenuOptions(),
    {
      label: () => h(GitHubMenu),
      key: 'go-to-github-page',
    },
  ]
}
