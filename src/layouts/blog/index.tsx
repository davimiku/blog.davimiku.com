import { NextSeo } from 'next-seo'
import { ReactNode } from 'react'

import { FeaturedImage } from 'components/blog/FeaturedImage'
import Layout from 'layouts'

import styles from './blog.module.scss'
import { BlogMeta } from 'data'

export type BlogsPageProps = {
  meta: BlogMeta
  children: ReactNode
}

export function BlogsPage({ children, meta }: BlogsPageProps) {
  const { title, tagline } = meta
  return (
    <Layout title={title} description={tagline}>
      <NextSeo title={title} description={tagline} />
      <article className={styles.container}>
        <h1>{title}</h1>
        <p>{tagline}</p>
        <FeaturedImage title={title} />
        <section>{children}</section>
      </article>
    </Layout>
  )
}
