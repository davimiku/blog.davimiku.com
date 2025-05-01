export const articleCategories = ['articles', 'tutorials'] as const
export type ArticleCategory = (typeof articleCategories)[number]

export type PublishedArticleMeta = ArticleMeta & {
  publishedOn: string
  relativeUrl: string
}

export type ArticleMeta = Readonly<
  {
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
    tags?: string[]

    /** Date the article was published */
    publishedOn?: string

    /** Most recent date the article was updated */
    updatedOn?: string

    /** Image URL for social media */
    ogImageUrl?: string

    /** Minutes to read the article */
    readingTime?: number
  } & ArticleSeriesMeta
>

export function isArticleMeta(input: Record<string, unknown>): input is ArticleMeta {
  return (
    'title' in input &&
    'category' in input &&
    'slug' in input &&
    'tagline' in input &&
    'type' in input
  )
}

/** The article is part of a series or it's not */
type ArticleSeriesMeta =
  | {
      /** If the article is part of a series, the user-readable name of the series */
      seriesName: string
      /** If the article is part of a series, the slug used in the URL for the series homepage */
      seriesSlug: string
      /** If the article is part of a series, its index number in the series (1-based) */
      seriesIndex: number
      /** The final number in the series */
      seriesLastIndex: number
    }
  | { seriesName?: never; seriesSlug?: never; seriesIndex?: never; seriesNextIndex?: never }

export type PublishedArticlesStaticProps = {
  publishedArticles: PublishedArticleMeta[]
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

export function isPublished(meta: ArticleMeta): meta is PublishedArticleMeta {
  return !!meta.publishedOn
}

export function withUrl(meta: PublishedArticleMeta): PublishedArticleMeta {
  return {
    ...meta,
    relativeUrl: `/${meta.category}/${meta.slug}`,
  }
}

export function byPublishDate(a: PublishedArticleMeta, z: PublishedArticleMeta): number {
  return z.publishedOn.localeCompare(a.publishedOn)
}
