import { IoIosConstruct } from 'react-icons/io'

import { FrontMatter } from 'layouts/blog'
import { Card } from 'components/cards/card'
import { Badge, TechnologyBadge } from 'components/badges'

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
        {/* TODO: Extract date and WIP notice to separate components */}
        {isPublished ? null : (
          <Badge>
            <IoIosConstruct />
            &nbsp;Work in progress&nbsp;
            <IoIosConstruct />
          </Badge>
        )}
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
