import { NextSeo, NextSeoProps } from 'next-seo'
import { ReactNode } from 'react'

import Layout from 'layouts'

import styles from './blog.module.scss'
import type { ArticleMeta } from 'pages/articles'

export type BlogsPageProps = {
  children: ReactNode
  meta: ArticleMeta
}

export function BlogsPage({ children, meta }: BlogsPageProps) {
  const { title, tagline, category, slug, publishedOn, updatedOn, ogImage } = meta
  const imageUrl = ogImage
    ? `https://blog.davimiku.com/images/blog/${category}/${slug}/${ogImage}`
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

  const published = publishedOn ? (
    <p className={styles.timestamp}>Published: {publishedOn}</p>
  ) : null
  const updated = updatedOn ? <p className={styles.timestamp}>Last Updated: {updatedOn}</p> : null

  return (
    <Layout title={title} description={tagline}>
      <NextSeo {...seoProps} />
      <article>
        <h1>{title}</h1>
        <p className='subtitle'>{tagline}</p>
        {published}
        {updated}
        <section>{children}</section>
      </article>
    </Layout>
  )
}
