import Link from 'next/link'

import styles from './ArticleListing.module.scss'
import type { ArticleMeta } from 'pages/articles'

const formatPath = (...paths: string[]) => '/' + paths.join('/').replace(/\.mdx$/, '')

export type ArticleListingProps = {
  meta: ArticleMeta
}

export function ArticleListing({ meta }: ArticleListingProps) {
  const { publishedOn, updatedOn } = meta
  const tags = meta.tags ?? []

  const published = (
    <>
      Published: <time dateTime={publishedOn}>{publishedOn}</time>
    </>
  )
  const updated = updatedOn ? (
    <>
      <br />
      Updated: <time dateTime={publishedOn}>{publishedOn}</time>
    </>
  ) : null

  return (
    <li className={styles['blog-listing']}>
      <Link href={formatPath(meta.category, meta.slug)}>
        <a>
          <h2>{meta.title}</h2>
        </a>
      </Link>

      {published}
      {updated}
      <p>{meta.tagline}</p>
      <ul>
        {tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    </li>
  )
}
