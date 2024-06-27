import Link from 'next/link'

import styles from './BlogListing.module.scss'
import { PublishDate } from 'components/blog/publish_date'
import type { BlogMeta } from 'pages/articles'

const formatPath = (...paths: string[]) => '/' + paths.join('/').replace(/\.mdx$/, '')

export type BlogListingProps = {
  meta: BlogMeta
}

export function BlogListing({ meta }: BlogListingProps) {
  const { publishedOn } = meta
  const isPublished = Boolean(meta.publishedOn)
  const tags = meta.tags ?? []

  return (
    <li className={styles['blog-listing']}>
      {/* TODO: Refactor to separate component */}
      {isPublished ? (
        <Link href={formatPath(meta.category, meta.slug)}>
          <a>
            <h2>{meta.title}</h2>
          </a>
        </Link>
      ) : (
        <h2 className={styles['wip']}>{meta.title}</h2>
      )}

      <PublishDate date={publishedOn} />
      <p>{meta.tagline}</p>
      <ul>
        {tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    </li>
  )
}
