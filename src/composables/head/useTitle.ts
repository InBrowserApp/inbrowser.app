import { useHead } from '@vueuse/head'

const suffix = ' | InBrowser.App'

export function useTitle(title: string) {
  useHead({
    title: title + suffix
  })
}
