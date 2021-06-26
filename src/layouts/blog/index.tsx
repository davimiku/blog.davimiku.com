import { NextSeo } from 'next-seo'
import { ReactNode } from 'react'
import { FeaturedImage } from 'components/blog/FeaturedImage'

import styles from './blog.module.scss'

type FrontMatter = {
  title: string
  tagline: string
  publishedAt: Date
  tags?: string[]
  __resourcePath: string
}

export type BlogsPageProps = {
  frontMatter: FrontMatter
  children: ReactNode
}

export default function BlogsPage({ children, frontMatter }: BlogsPageProps) {
  const { title, tagline } = frontMatter
  return (
    <>
      <NextSeo title={title} description={tagline} />
      <article className={styles.container}>
        <h1>{title}</h1>
        <p>{tagline}</p>
        <FeaturedImage title={title} />
        <section>{children}</section>
      </article>
    </>
  )
}
