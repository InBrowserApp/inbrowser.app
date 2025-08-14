import { tools } from '@registry/tools'
import { supportedLanguages } from '@shared/locale/languages'
import { SitemapStream, streamToPromise } from 'sitemap'
import { writeFile } from 'fs/promises'

const smStream = new SitemapStream({
  hostname: 'https://inbrowser.app',
  lastmodDateOnly: false,
  xmlns: {
    // trim the xml namespace
    news: false, // flip to false to omit the xml namespace for news
    xhtml: true,
    image: false,
    video: false,
  },
})

const xmlBuffer = new Promise<Buffer>((resolve, reject) => {
  streamToPromise(smStream).then(resolve).catch(reject)
})

const paths = ['/', '/tools', ...tools.map((tool) => tool.path)].filter((path) =>
  path.startsWith('/'),
)

console.log('Building sitemap...')
console.log('Tools:', tools.length)
console.log('Languages:', supportedLanguages.length)
console.log('Paths:', paths.length)

for (const path of paths) {
  smStream.write({
    url: `https://inbrowser.app${path}`,
    links: supportedLanguages.map((lang: string) => ({
      lang,
      url: `https://inbrowser.app/${lang}${path}`,
    })),
  })
}

smStream.end()

const buffer = await xmlBuffer

console.log('Sitemap generated successfully!')

// write to ./public/sitemap.xml
await writeFile('./public/sitemap.xml', buffer)
