import { useRoute, useRouter, type RouteLocationRaw } from 'vue-router'
import { computed, type Ref, watch } from 'vue'
import { supportedLanguages, type SupportedLanguage } from './index'
import { useI18n } from 'vue-i18n'
import { get } from '@vueuse/core'

/**
 * Composable that returns the current site language based on the URL path.
 * @returns An object containing a computed property `language` that returns the current language code or undefined
 * @example
 * ```ts
 * const { language } = useSiteLanguage()
 * // If URL is /en/about, language.value will be 'en'
 * // If URL is /about, language.value will be undefined
 * ```
 */
export function useSiteLanguage() {
  const route = useRoute()
  const language = computed<SupportedLanguage | undefined>(() => {
    const lang = route.path.split('/')[1]
    if ((supportedLanguages as Readonly<string[]>).includes(lang)) {
      return lang as SupportedLanguage
    } else {
      return undefined
    }
  })

  return {
    language,
  }
}

/**
 * Composable that sets up a watcher to update the site language based on URL changes.
 * Updates both the i18n locale and the HTML lang attribute.
 * Falls back to browser language if no language is specified in the URL.
 *
 * @example
 * ```ts
 * // In your app setup
 * useSetSiteLanguage()
 * // This will automatically update the site language when the URL changes
 * // and set the appropriate HTML lang attribute
 * ```
 */
export function useSetSiteLanguage() {
  const { language } = useSiteLanguage()
  const { locale } = useI18n()
  watch(
    language,
    () => {
      const lang = language.value
      if (lang) {
        locale.value = lang
        // Update the HTML lang attribute
        document.documentElement.lang = lang
      } else {
        locale.value = navigator.language
        // if navigator.language is in siteLanguages
        // set the locale to document.documentElement.lang
        const matches: string[] = []
        for (const lang of supportedLanguages) {
          if (navigator.language.startsWith(lang)) {
            matches.push(lang)
          }
        }
        // get the longest match
        const longestMatch = matches.sort((a, b) => b.length - a.length)[0]
        if (longestMatch) {
          document.documentElement.lang = longestMatch
        }
      }
    },
    { immediate: true },
  )
}

/**
 * Composable that generates a language-prefixed path for the current route.
 * @param location - The route location to generate a path for
 * @returns An object containing a computed property `path` that returns the full path with language prefix if applicable
 * @example
 * ```ts
 * const { path } = useSiteLanguagePath({ name: 'about' })
 * // If current language is 'en', path.value will be '/en/about'
 * // If no language is set, path.value will be '/about'
 * ```
 */
export function useSiteLanguagePath(location: RouteLocationRaw | Ref<RouteLocationRaw>) {
  const router = useRouter()
  const { language } = useSiteLanguage()
  const basePath = router.resolve(get(location)).path

  const path = computed(() => {
    if (language.value === undefined) {
      return basePath
    } else {
      return `/${language.value}${basePath}`
    }
  })
  return { path }
}
