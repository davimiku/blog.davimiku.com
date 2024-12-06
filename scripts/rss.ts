import * as fs from 'node:fs/promises'
import { createReadStream } from 'node:fs'
import * as path from 'node:path'
import * as readline from 'node:readline'
import RSS from 'rss'
import { isPublished, withUrl } from 'data/articles'
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
  const allArticleMeta = await extractMDXMeta(fs, readline, path, createReadStream)
  for (const [filePath, articleMeta] of Object.entries(allArticleMeta)) {
    if (isPublished(articleMeta)) {
      feed.item({
        title: articleMeta.title,
        description: articleMeta.tagline,
        url: `${siteUrl}${articleMeta.relativeUrl}`,
        date: articleMeta.publishedOn,
        categories: articleMeta.tags ?? [],
      })
    }
  }

  // Write the RSS feed to a file as XML.
  await fs.writeFile('./public/rss.xml', feed.xml({ indent: true }))
})()
