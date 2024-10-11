import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useTitle } from './useTitle'
import { useDescription } from './useDescription'

export function useHeadFromRouteMeta() {
  const route = useRoute()
  const meta = route.meta

  const { t } = useI18n({
    messages: meta?.locales
  })

  useTitle(t('title'))
  useDescription(t('description'))
}
