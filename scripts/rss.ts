import { isPublished, withUrl } from 'data/articles'
import * as fs from 'node:fs/promises'
import * as path from 'node:path'
import RSS from 'rss'
import { extractMDXMeta } from '../src/data/extractMdxMeta'

const siteUrl = 'https://blog.davimiku.com'

const feedOptions = {
  title: "David's articles | RSS Feed",
  description: 'Articles, essays, and tutorials about programming and software development',
  site_url: siteUrl,
  feed_url: `${siteUrl}/rss.xml`,
  image_url: `${siteUrl}/apple-touch-icon.png`,
  pubDate: new Date(),
  copyright: `All rights reserved ${new Date().getFullYear()}`,
}

const feed = new RSS(feedOptions)

;(async function () {
  const allArticleMeta = await extractMDXMeta(fs, path)
  for (const articleMeta of Object.values(allArticleMeta)) {
    if (isPublished(articleMeta)) {
      const publishedArticleMeta = withUrl(articleMeta)
      feed.item({
        title: publishedArticleMeta.title,
        description: publishedArticleMeta.tagline,
        url: `${siteUrl}${publishedArticleMeta.relativeUrl}`,
        date: publishedArticleMeta.publishedOn,
        categories: publishedArticleMeta.tags ?? [],
      })
    }
  }

  // Write the RSS feed to a file as XML.
  await fs.writeFile('./public/rss.xml', feed.xml({ indent: true }))
})()
