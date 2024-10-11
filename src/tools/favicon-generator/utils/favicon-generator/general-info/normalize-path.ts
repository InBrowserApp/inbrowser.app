export function normalizePath(path: string): string {
  if (!path.endsWith('/')) {
    return `${path}/`
  }
  return path
}
