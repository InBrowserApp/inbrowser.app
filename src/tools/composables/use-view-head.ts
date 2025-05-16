import { useHead } from '@unhead/vue'

export function useViewHead(t: (key: string) => string) {
  useHead({
    title: t('name') + ' - InBrowser.App',
    meta: [
      {
        name: 'description',
        content: t('description'),
      },
    ],
  })
}
