import { NextSeo } from 'next-seo'
import { ReactNode } from 'react'
import { FeaturedImage } from '../../components/blog/FeaturedImage'

import styles from './mdx.module.scss'

type FrontMatter = {
  title: string
  description: string
}

export type BlogsPageProps = {
  frontMatter: FrontMatter
  children: ReactNode
}

export default function BlogsPage({ children, frontMatter }: BlogsPageProps) {
  const { title, description } = frontMatter
  return (
    <>
      <NextSeo title={title} description={description} />
      <article className={styles.container}>
        <h1>{title}</h1>
        <p>{description}</p>
        <FeaturedImage title={title} />
        <section>{children}</section>
      </article>
    </>
  )
}
