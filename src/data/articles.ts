import path from 'path'

export const articleCategories = ['articles', 'tutorials'] as const
export type ArticleCategory = (typeof articleCategories)[number]

export type PublishedArticleMeta = ArticleMeta & {
  publishedOn: string
  relativeUrl: string
}

export type ArticleMeta = {
  /** Title of the article */
  title: string

  /** Category - part of the URL */
  category: ArticleCategory

  /** URL slug */
  slug: string

  /** Short description, shown as a subtitle and in social media posts */
  tagline: string

  /** Additional categorization, currently unused and may be removed */
  type: string

  /** Tags to show topics of the article, and possibly for filtering in the future */
  tags: string[]

  /** Date the article was published */
  publishedOn?: string

  /** Most recent date the article was updated */
  updatedOn?: string

  /** Image URL for social media */
  ogImageUrl?: string

  /** Minutes to read the article */
  readingTime?: number

  /** If the article is part of a series, the user-readable name of the series */
  seriesName?: string

  /** If the article is part of a series, the slug used in the URL for the series homepage */
  seriesSlug?: string

  /** If the article is part of a series, its index number in the series (1-based) */
  seriesIndex?: number
}

export type PublishedArticlesStaticProps = {
  publishedArticles: PublishedArticleMeta[]
}

export async function getPublishedArticles(fs: typeof import('fs/promises')) {
  const articleMetas: ArticleMeta[] = []
  let metaFilePaths: string[] = []

  for (const category of articleCategories) {
    const folder = path.join('src', 'pages', category)
    const filePaths = (await fs.readdir(folder, { withFileTypes: true }))
      .filter(file => file.name.endsWith('.meta.json'))
      .map(file => path.join(file.parentPath, file.name))

    metaFilePaths = metaFilePaths.concat(filePaths)
  }

  for (const filePath of metaFilePaths) {
    const metaJson = await fs.readFile(filePath, { encoding: 'utf-8' })
    const meta: ArticleMeta = JSON.parse(metaJson)
    articleMetas.push(meta)
  }

  const publishedArticles = articleMetas.filter(isPublished).map(withUrl).sort(byPublishDate)

  return { props: { publishedArticles } }
}

/**
 * If the article is the first in the series or is not part of a series,
 * it should be listed in the general article lists such as the front page.
 *
 * Otherwise, Part 2 / Part 3 / etc. won't be listed on the front page.
 */
export function isFirstInSeries(meta: PublishedArticleMeta): boolean {
  return !meta.seriesIndex || meta.seriesIndex === 1
}

function isPublished(meta: ArticleMeta): meta is PublishedArticleMeta {
  return !!meta.publishedOn
}

function withUrl(meta: PublishedArticleMeta): PublishedArticleMeta {
  return {
    ...meta,
    relativeUrl: `/${meta.category}/${meta.slug}`,
  }
}

function byPublishDate(a: PublishedArticleMeta, z: PublishedArticleMeta): number {
  return z.publishedOn.localeCompare(a.publishedOn)
}
