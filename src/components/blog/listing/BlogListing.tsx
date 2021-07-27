import Link from 'next/link'

import { FrontMatter } from 'layouts/blog'
import styles from './BlogListing.module.scss'
import { PublishDate } from 'components/blog/publish_date'

const formatPath = (path: string) => path.replace(/\.mdx$/, '')

export type BlogListingProps = {
  blog: FrontMatter
}

export function BlogListing({ blog }: BlogListingProps) {
  const { publishedAt } = blog
  const isPublished = Boolean(blog.publishedAt)

  return (
    <li className={styles['blog-listing']}>
      {/* TODO: Refactor to separate component */}
      {isPublished ? (
        <Link href={isPublished ? formatPath(blog.__resourcePath) : ''}>
          <a>
            <h2>{blog.title}</h2>
          </a>
        </Link>
      ) : (
        <h2 className={styles['wip']}>{blog.title}</h2>
      )}

      <PublishDate date={publishedAt} />
      <p>{blog.tagline}</p>
      <ul>
        {blog.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    </li>
  )
}
