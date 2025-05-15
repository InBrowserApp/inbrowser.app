import { createI18n } from 'vue-i18n'
import { baseMessages } from './messages'
export * from './languages'
export * from './use-site-language'

const i18n = createI18n({
  locale: navigator?.language,
  fallbackLocale: 'en',
  legacy: false,
  messages: baseMessages,
})

export default i18n
