import { NextSeo, NextSeoProps } from 'next-seo'
import Link from 'next/link'
import { ReactNode, type JSX } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

import { MDXProvider } from '@mdx-js/react'
import { type ArticleMeta } from 'data/articles'
import Layout from 'layouts'
import { useMDXComponents } from 'mdx-components'
import styles from './ArticlePage.module.scss'

export type ArticlePageProps = {
  children: ReactNode
  meta: ArticleMeta
}

export function ArticlePage({ children, meta }: ArticlePageProps) {
  const components = useMDXComponents({})
  const { title, tagline, category, slug, publishedOn, updatedOn, ogImageUrl, readingTime } = meta
  const imageUrl = ogImageUrl
    ? `https://blog.davimiku.com/images/blog/${category}/${slug}/${ogImageUrl}`
    : ''
  const seoProps: NextSeoProps = {
    title,
    description: tagline,
    openGraph: {
      url: `https://blog.davimiku.com/${category}/${slug}`,
      type: 'website',
      title: title,
      description: tagline,
      images: [
        {
          url: imageUrl,
        },
      ],
    },
  }

  return (
    <Layout title={title} description={tagline}>
      <NextSeo {...seoProps} />
      <article className={styles['article']}>
        <h1 className={styles['title']}>{title}</h1>
        <p className={`subtitle ${styles['subtitle']}`}>{tagline}</p>
        <PublishedOn publishedOn={publishedOn} />
        <UpdatedOn updatedOn={updatedOn} />
        <ReadingTime minutes={readingTime} />
        <MDXProvider components={components}>
          <section>{children}</section>
        </MDXProvider>
        <PreviousNext meta={meta} />
      </article>
    </Layout>
  )
}

function PublishedOn({ publishedOn }: { publishedOn?: string }) {
  if (!publishedOn) return null

  return <p className={styles.timestamp}>📄 Published: {publishedOn}</p>
}

function UpdatedOn({ updatedOn }: { updatedOn?: string }) {
  if (!updatedOn) return null

  return <p className={styles.timestamp}>🛠️ Last Updated: {updatedOn}</p>
}

function ReadingTime({ minutes }: { minutes?: number }) {
  if (!minutes) return null

  return <p className={styles.timestamp}>☕ Estimated reading time: {minutes} minutes</p>
}

type PreviousNextProps = {
  meta: ArticleMeta
}

function PreviousNext({ meta }: PreviousNextProps) {
  let previous: JSX.Element | null = null
  let next: JSX.Element | null = null
  if (meta.seriesIndex) {
    if (meta.seriesIndex > 1) {
      const previousIndex = meta.seriesIndex - 1
      previous = (
        <Link
          className={`no-tufte-underline ${styles['previous']}`}
          href={`${meta.seriesSlug}-${previousIndex}`}
        >
          <FaArrowLeft />
          <span>Previous (Part {previousIndex})</span>
        </Link>
      )
    }

    const hasNext = meta.seriesLastIndex - meta.seriesIndex > 0
    if (hasNext) {
      const nextIndex = meta.seriesIndex + 1
      next = (
        <Link
          className={`no-tufte-underline ${styles['next']}`}
          href={`${meta.seriesSlug}-${nextIndex}`}
        >
          <span>Next (Part {nextIndex})</span>
          <FaArrowRight />
        </Link>
      )
    }
  }

  return (
    <div className={styles['previous-next-container']}>
      {previous}
      {next}
    </div>
  )
}
