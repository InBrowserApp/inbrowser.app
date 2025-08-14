import { useViewLoaders } from './use-view-loaders'
import type { MaybeRef } from 'vue'
import { ref } from 'vue'
import type { RouteLocationRaw } from 'vue-router'
import { loadAtIdle } from './load-at-idle'

/**
 * A composable that helps prefetch view components during idle browser time.
 * This is useful for preloading views that are likely to be navigated to,
 * improving perceived performance.
 *
 * Under the hood, this uses the browser's requestIdleCallback API (when available)
 * to load components during idle periods. It also supports individual component
 * configuration with delay and timeout options.
 *
 * @param location - The route location to prefetch. Can be:
 *           - A path string (e.g. '/about')
 *           - A named route object (e.g. { name: 'about' })
 *           - A reactive reference to either
 * @returns An object containing:
 *         - prefetch: Function that triggers the prefetch. Returns a Promise that resolves
 *           when prefetching is complete, or undefined if already prefetched or if
 *           no loaders are found
 *
 * @example
 * ```ts
 * // Basic path usage
 * const { prefetch } = usePrefetchView('/about')
 *
 * // With named route
 * const { prefetch } = usePrefetchView({ name: 'about' })
 *
 * // With reactive reference
 * const route = ref('/about')
 * const { prefetch } = usePrefetchView(route)
 *
 * // Trigger the prefetch
 * await prefetch() // Will load during idle time if supported
 * ```
 */
export function usePrefetchView(location: MaybeRef<RouteLocationRaw>) {
  const { route, loaders } = useViewLoaders(location)
  const prefetchedLocations = ref<RouteLocationRaw[]>([])

  async function prefetch(): Promise<unknown> {
    if (prefetchedLocations.value.includes(route.value.path)) {
      return undefined
    }
    prefetchedLocations.value.push(route.value.path)

    if (loaders.value.length > 0) {
      console.debug(`🚀 prefetching view: ${String(route.value.name)}`)
      const priorities = ['highest', 'high', 'medium', 'low', 'lowest']
      for (const priority of priorities) {
        const components = loaders.value.filter(
          (loader) => (loader.priority ?? 'high') === priority,
        )
        await Promise.all(
          components.map(async (loader) => {
            return loadAtIdle(loader.loader, { timeout: loader?.timeout })
          }),
        )
      }
    } else {
      console.error(`❌ failed to prefetch view - loader not found for path/name:`, location)
      return undefined
    }
  }

  return { prefetch }
}
