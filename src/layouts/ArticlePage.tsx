import { NextSeo, NextSeoProps } from 'next-seo'
import { ReactNode } from 'react'

import Layout from 'layouts'

import styles from './ArticlePage.module.scss'
import { type ArticleMeta } from 'data/articles'

export type ArticlePageProps = {
  children: ReactNode
  meta: ArticleMeta
}

export function ArticlePage({ children, meta }: ArticlePageProps) {
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
        <section>{children}</section>
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
