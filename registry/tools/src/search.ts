import type { ToolInfo } from '@shared/tools'
import { type Ref } from 'vue'
import { get } from '@vueuse/core'
import { supportedLanguages } from '@shared/locale'
import { useSiteLanguage } from '@shared/locale'
import { computedAsync } from '@vueuse/core'
import { ref } from 'vue'

interface SearchResult extends ToolInfo {
  score: number
  matchedFields: string[]
}

export function useSearchTools(query: string | Ref<string>) {
  const { language } = useSiteLanguage()
  const searching = ref(false)

  const toolsResults = computedAsync<ToolInfo[]>(
    async () => {
      const queryValue = (get(query) ?? '').toLowerCase().trim()

      // Return all tools if query is empty
      const { tools } = await import('./index')
      if (!queryValue) {
        return tools
      }

      // Segment query into words
      const words: string[] = []
      if (Intl?.Segmenter) {
        const segmenter = new Intl.Segmenter(language.value ?? navigator.language, {
          granularity: 'word',
        })
        const segments = segmenter.segment(queryValue)
        for (const segment of segments) {
          if (segment.isWordLike && segment.segment.trim()) {
            words.push(segment.segment.toLowerCase().trim())
          }
        }
      } else {
        const splitWords = queryValue.split(/\s+/).filter((word) => word.trim())
        words.push(...splitWords)
      }

      const results: SearchResult[] = []
      const currentLang = language.value || 'en'

      for (const tool of tools) {
        let score = 0
        const matchedFields: string[] = []

        // Check exact phrase match in current language first (highest priority)
        const currentName = tool.meta[currentLang]?.name.toLowerCase() || ''
        const currentDesc = tool.meta[currentLang]?.description.toLowerCase() || ''

        if (currentName.includes(queryValue)) {
          score += 100
          matchedFields.push('name')
        }
        if (currentDesc.includes(queryValue)) {
          score += 50
          matchedFields.push('description')
        }

        // Check tags for exact phrase match
        const tagsText = tool.tags.join(' ').toLowerCase()
        if (tagsText.includes(queryValue)) {
          score += 80
          matchedFields.push('tags')
        }

        // Word-based matching across all languages
        for (const word of words) {
          if (!word) continue

          // Check current language with higher weight
          if (currentName.includes(word)) {
            score += 20
            if (!matchedFields.includes('name')) matchedFields.push('name')
          }
          if (currentDesc.includes(word)) {
            score += 10
            if (!matchedFields.includes('description')) matchedFields.push('description')
          }

          // Check other languages with lower weight
          for (const lang of supportedLanguages) {
            if (lang === currentLang) continue

            const name = tool.meta[lang]?.name.toLowerCase() || ''
            const description = tool.meta[lang]?.description.toLowerCase() || ''

            if (name.includes(word)) {
              score += 5
              if (!matchedFields.includes('name')) matchedFields.push('name')
            }
            if (description.includes(word)) {
              score += 3
              if (!matchedFields.includes('description')) matchedFields.push('description')
            }
          }

          // Check tags for individual words
          for (const tag of tool.tags) {
            if (tag.toLowerCase().includes(word)) {
              score += 15
              if (!matchedFields.includes('tags')) matchedFields.push('tags')
            }
          }

          // Check toolID for word matches
          if (tool.toolID.toLowerCase().includes(word)) {
            score += 8
            if (!matchedFields.includes('toolID')) matchedFields.push('toolID')
          }
        }

        // Boost score for tools with more matches
        if (words.length > 1) {
          const wordMatchCount = words.filter(
            (word) =>
              currentName.includes(word) ||
              currentDesc.includes(word) ||
              tagsText.includes(word) ||
              tool.toolID.toLowerCase().includes(word),
          ).length

          if (wordMatchCount === words.length) {
            score += 30 // All words found
          } else if (wordMatchCount > 1) {
            score += wordMatchCount * 5 // Partial matches
          }
        }

        // Only include tools with some relevance
        if (score > 0) {
          results.push({
            ...tool,
            score,
            matchedFields,
          })
        }
      }

      // Sort by score (descending) and return without score/matchedFields
      return results.sort((a, b) => b.score - a.score).map(({ ...tool }) => tool)
    },
    [],
    searching,
  )

  return {
    toolsResults,
    searching,
  }
}
