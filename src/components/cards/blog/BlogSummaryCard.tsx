import { Card } from 'components/cards/card'
import { TechnologyBadge } from 'components/badges'
import { PublishDate } from 'components/blog/publish_date'

import styles from './BlogSummaryCard.module.scss'
import { BlogMeta } from 'data'

export type BlogCardProps = {
  meta: BlogMeta
}

export function BlogSummaryCard({ meta }: BlogCardProps) {
  const isPublished = Boolean(meta.publishedOn)
  return (
    <Card id={`link-${meta.slug}`}>
      <Card.Header>
        <Card.Title title={meta.title} href={isPublished ? `/blog/${meta.slug}` : undefined} />
      </Card.Header>
      <Card.Body>
        <PublishDate date={meta.publishedOn} />
        <p>{meta.tagline}</p>
      </Card.Body>
      <Card.Footer>
        <div className={styles['badge-container']}>
          {meta.tags?.map(tag => (
            <TechnologyBadge key={tag} technology={tag} />
          ))}
        </div>
      </Card.Footer>
    </Card>
  )
}
