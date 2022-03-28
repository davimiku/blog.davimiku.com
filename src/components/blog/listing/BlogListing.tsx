import Link from 'next/link'

import styles from './BlogListing.module.scss'
import { PublishDate } from 'components/blog/publish_date'
import { Meta } from 'data'

const formatPath = (path: string) => path.replace(/\.mdx$/, '')

export type BlogListingProps = {
  meta: Meta
}

export function BlogListing({ meta }: BlogListingProps) {
  const { publishedOn } = meta
  const isPublished = Boolean(meta.publishedOn)
  const tags = meta.tags ?? []

  return (
    <li className={styles['blog-listing']}>
      {/* TODO: Refactor to separate component */}
      {isPublished ? (
        <Link href={isPublished ? formatPath(meta.__resourcePath) : ''}>
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
