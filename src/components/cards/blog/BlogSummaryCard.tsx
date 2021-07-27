import { FrontMatter } from 'layouts/blog'
import { Card } from 'components/cards/card'
import { TechnologyBadge } from 'components/badges'
import { PublishDate } from 'components/blog/publish_date'

import styles from './BlogSummaryCard.module.scss'

export type BlogCardProps = {
  blog: FrontMatter
}

export function BlogSummaryCard({ blog }: BlogCardProps) {
  const isPublished = Boolean(blog.publishedAt)
  return (
    <Card id={`link-${blog.slug}`}>
      <Card.Header>
        <Card.Title
          title={blog.title}
          href={isPublished ? `/blog/${blog.slug}` : null}
        />
      </Card.Header>
      <Card.Body>
        <PublishDate date={blog.publishedAt} />
        <p>{blog.tagline}</p>
      </Card.Body>
      <Card.Footer>
        <div className={styles['badge-container']}>
          {blog.tags?.map((tag) => (
            <TechnologyBadge key={tag} technology={tag} />
          ))}
        </div>
      </Card.Footer>
    </Card>
  )
}
