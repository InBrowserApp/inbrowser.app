import type { MaybeRef } from 'vue'
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { get } from '@vueuse/core'
import type { RouteComponent, RouteLocationRaw } from 'vue-router'

export interface PrefetchComponent {
  loader: () => Promise<unknown>
  timeout?: number
  delay?: number
  priority?: 'highest' | 'high' | 'medium' | 'low' | 'lowest'
}

declare module 'vue-router' {
  interface RouteMeta {
    prefetchComponents?: PrefetchComponent[]
  }
}

interface RouteComponentLoader {
  loader: () => Promise<RouteComponent>
  priority: 'highest'
}

/**
 * A composable that extracts view component loaders for a given route location.
 * This is used internally by other prefetching composables to get the actual
 * component loading functions that need to be prefetched.
 *
 * Under the hood, this resolves the route and extracts all component loaders
 * from the matched route records, filtering out non-function components.
 *
 * @param to - The route location to get loaders for. Can be:
 *           - A path string (e.g. '/about')
 *           - A named route object (e.g. { name: 'about' })
 *           - A reactive reference to either
 * @returns An object containing:
 *         - route: Computed ref containing the resolved route object
 *         - loaders: Computed ref containing an array of component loading functions
 *           that return Promises resolving to RouteComponent instances
 *
 * @example
 * ```ts
 * // Basic path usage
 * const { route, loaders } = useViewLoaders('/about')
 *
 * // With named route
 * const { route, loaders } = useViewLoaders({ name: 'about' })
 *
 * // With reactive reference
 * const routeRef = ref('/about')
 * const { route, loaders } = useViewLoaders(routeRef)
 *
 * // Access the loaders
 * console.log(loaders.value) // Array of loading functions
 * ```
 */
export function useViewLoaders(to: MaybeRef<RouteLocationRaw>) {
  const router = useRouter()
  const route = computed(() => router.resolve(get(to)))

  const viewLoaders = computed<RouteComponentLoader[]>(() => {
    return route.value.matched
      .map((record) => Object.values(record.components ?? {}))
      .flat()
      .filter((Component) => typeof Component === 'function')
      .map((Component) => ({
        loader: Component as () => Promise<RouteComponent>,
        priority: 'highest',
      }))
  })

  const prefetchComponents = computed<PrefetchComponent[]>(() => {
    return route.value.meta?.prefetchComponents ?? []
  })

  const loaders = computed<PrefetchComponent[]>(() => {
    return [...viewLoaders.value, ...prefetchComponents.value]
  })

  return { route, loaders, viewLoaders, prefetchComponents }
}
