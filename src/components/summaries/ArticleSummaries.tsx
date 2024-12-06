import type { PublishedArticleMeta } from 'data/articles'
import styles from './Summaries.module.scss'
import Link from 'next/link'

export type ArticleSummariesProps = {
  articles: PublishedArticleMeta[]
}

export function ArticleSummaries({ articles }: ArticleSummariesProps) {
  const summaries = articles.map(toSummary)

  return <ul className={styles['summary-list']}>{summaries}</ul>
}

function toSummary(meta: PublishedArticleMeta): JSX.Element {
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
      Updated: <time dateTime={updatedOn}>{updatedOn}</time>
    </>
  ) : null

  return (
    <li key={meta.slug} className={styles['summary']}>
      <Link href={meta.relativeUrl}>
        <h2>{meta.title}</h2>
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
