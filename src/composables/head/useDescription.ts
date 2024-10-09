import { useHead } from '@vueuse/head'

const suffix =
  ' Fully runs in your browser, no data is sent to the server. Fast, secure, and offline capable.'

export function useDescription(description: string) {
  useHead({
    meta: [
      {
        name: 'description',
        content: description + suffix
      }
    ]
  })
}
