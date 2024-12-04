import fs from 'node:fs/promises'
import RSS from 'rss'
import { getPublishedArticlesStatic } from 'data/articles'

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
  const { props } = await getPublishedArticlesStatic()
  const publishedArticles = props.publishedArticles

  publishedArticles.forEach(article => {
    feed.item({
      title: article.title,
      description: article.tagline,
      url: `${siteUrl}${article.relativeUrl}`,
      date: article.publishedOn,
      categories: article.tags,
    })
  })

  // Write the RSS feed to a file as XML.
  await fs.writeFile('./public/rss.xml', feed.xml({ indent: true }))
})()
