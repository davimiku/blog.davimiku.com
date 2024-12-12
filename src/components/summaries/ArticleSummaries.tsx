import type { PublishedArticleMeta } from 'data/articles'
import Link from 'next/link'
import styles from './Summaries.module.scss'

import { Badge } from 'components/badges/badge/Badge'
import type { JSX } from 'react'

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
      <ul className={styles['series-links']}>{seriesLinks(meta)}</ul>
    </li>
  )
}

const seriesLinks = (meta: PublishedArticleMeta) => {
  if (!meta.seriesIndex) return null

  const { relativeUrl } = meta
  const seriesItems = new Array(meta.seriesLastIndex).fill(0).map((_, i) => i + 1)

  return seriesItems.map(i => {
    const href = relativeUrl.slice(0, relativeUrl.length - 2) + '-' + i
    return (
      <li key={href}>
        <Link className='no-tufte-underline' href={href}>
          <Badge>Part {i}</Badge>
        </Link>
      </li>
    )
  })
}
