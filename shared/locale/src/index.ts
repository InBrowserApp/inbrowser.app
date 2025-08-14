import { createI18n } from 'vue-i18n'
import { baseMessages } from './messages'
export * from './languages'
export * from './use-site-language'
import { supportedLanguages, type SupportedLanguage } from './languages'

function initLanguage() {
  const path = window.location.pathname
  const lang = path.split('/')[1]
  if (supportedLanguages.includes(lang as SupportedLanguage)) {
    return lang
  }
  return navigator?.language
}

const i18n = createI18n({
  locale: initLanguage(),
  fallbackLocale: 'en',
  legacy: false,
  messages: baseMessages,
})

export default i18n
