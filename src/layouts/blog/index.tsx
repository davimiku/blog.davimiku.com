import { NextSeo } from 'next-seo'
import { ReactNode } from 'react'

import Layout from 'layouts'

import styles from './blog.module.scss'
import type { BlogMeta } from 'pages/blog'

export type BlogsPageProps = {
  children: ReactNode
  meta: BlogMeta
}

export function BlogsPage({ children, meta }: BlogsPageProps) {
  const { title, tagline } = meta
  return (
    <Layout title={title} description={tagline}>
      <NextSeo title={title} description={tagline} />
      <article className={styles.container}>
        <h1>{title}</h1>
        <p className='subtitle'>{tagline}</p>
        <section>{children}</section>
      </article>
    </Layout>
  )
}
