import { useSiteLanguage } from '@shared/locale'
import { useRouter } from 'vue-router'
import { computed, type Ref } from 'vue'
import type { RouteLocationAsRelativeGeneric, RouteLocationAsPathGeneric } from 'vue-router'
import { get } from '@vueuse/core'

type To = string | RouteLocationAsRelativeGeneric | RouteLocationAsPathGeneric

export function useLocalizedPath(to: Ref<To> | To) {
  const router = useRouter()
  const { language } = useSiteLanguage()
  const path = computed<string>(() => {
    if (typeof to === 'string') {
      return get(to)
    } else {
      return router.resolve(get(to)).fullPath
    }
  })

  const localizedPath = computed<string>(() => {
    if (language.value === undefined) {
      return path.value
    } else {
      return `/${language.value}${path.value}`
    }
  })

  return { localizedPath }
}
