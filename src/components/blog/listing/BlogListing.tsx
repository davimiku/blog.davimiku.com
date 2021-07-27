import Link from 'next/link'

import { FrontMatter } from 'layouts/blog'
import styles from './BlogListing.module.scss'
import { PublishDate } from 'components/blog/publish_date'

const formatPath = (path: string) => path.replace(/\.mdx$/, '')

export type BlogListingProps = {
  blog: FrontMatter
}

export function BlogListing({ blog }: BlogListingProps) {
  return (
    <li className={styles['blog-listing']}>
      <Link href={formatPath(blog.__resourcePath)}>
        <a>
          <h2>{blog.title}</h2>
        </a>
      </Link>
      <PublishDate date={blog.publishedAt} />
      <p>{blog.tagline}</p>
      <ul>
        {blog.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    </li>
  )
}
