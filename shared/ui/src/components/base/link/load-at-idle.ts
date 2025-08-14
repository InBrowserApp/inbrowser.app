/**
 * Loads a module during browser idle time using requestIdleCallback if available
 *
 * This function helps optimize performance by loading non-critical modules during
 * periods when the browser is idle. If requestIdleCallback is not supported,
 * it falls back to loading the module immediately.
 *
 * @param moduleLoader - A function that returns a Promise resolving to the module
 * @param options - Optional configuration object
 * @param options.timeout - Maximum time in ms to wait before forcing module load (default: 200ms)
 * @returns Promise that resolves with the loaded module
 *
 * @example
 * ```ts
 * // Basic usage
 * const MyComponent = await loadAtIdle(() => import('./MyComponent.vue'))
 *
 * // With custom timeout
 * const MyModule = await loadAtIdle(() => import('./MyModule'), { timeout: 500 })
 * ```
 */
export function loadAtIdle<T>(
  moduleLoader: () => Promise<T>,
  options?: {
    timeout?: number
  },
): Promise<T> {
  if (window.requestIdleCallback) {
    return new Promise((resolve) => {
      window.requestIdleCallback(
        async () => {
          resolve(await moduleLoader())
        },
        {
          timeout: options?.timeout,
        },
      )
    })
  } else {
    return moduleLoader()
  }
}
