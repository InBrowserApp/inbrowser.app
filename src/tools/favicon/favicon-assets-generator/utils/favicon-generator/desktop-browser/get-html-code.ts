import type { DesktopBrowserOptions } from './types'

export function getHTMLCode(blob: Blob | undefined, options: DesktopBrowserOptions) {
  const image = options?.image ?? blob
  if (image === undefined) {
    return ''
  }

  const lines = []

  if (image.type === 'image/svg+xml' && options.original) {
    lines.push(`<link rel="icon" href="/favicon.ico" sizes="48x48" >`)
    lines.push(`<link rel="icon" href="/favicon.svg" sizes="any" type="image/svg+xml">`)
  } else {
    lines.push(`<link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32">`)
    lines.push(`<link rel="icon" href="/favicon-16x16.png" type="image/png" sizes="16x16">`)
  }

  return lines.join('\n')
}
