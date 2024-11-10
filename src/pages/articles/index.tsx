import Layout from 'layouts'
import { ArticleListing } from 'components/blog'
import styles from './ArticleIndex.module.scss'

export type PublishedArticleMeta = ArticleMeta & {
  publishedOn: string
}

export type ArticleMeta = {
  title: string
  category: 'tutorials' | string
  slug: string
  tagline: string
  type: string
  tags: string[]
  publishedOn?: string
  updatedOn?: string
  ogImage?: string
  readingTime?: number
}

import * as ResponsivenessWithoutBreakpoints from '../articles/responsiveness-without-breakpoints.mdx'
import * as JsonParserRust1 from '../tutorials/json-parsing-rust-1.mdx'
import * as TsIoDecodingEncoding from '../tutorials/ts-io-decoding-encoding.mdx'

const articles = [ResponsivenessWithoutBreakpoints, JsonParserRust1, TsIoDecodingEncoding]
export const blogsMeta: PublishedArticleMeta[] = articles
  .map(blog => blog.meta)
  .filter(meta => meta.publishedOn)
  .sort((a, b) => a.publishedOn.localeCompare(b.publishedOn))

export default function ArticleIndex() {
  const blogSummaries = blogsMeta.map(meta => <ArticleListing meta={meta} key={meta.slug} />)
  return (
    <Layout title='Blogs' description='Blog Posts'>
      <h1>Blog</h1>
      <p>
        Below are the articles in my blog. I enjoy technical writing in general, and I mostly write
        about Software Engineering and Programming Languages.
      </p>
      <p>
        I also write tutorials aimed at intermediate programmers, I believe there is an abundance of
        entry-level tutorials but far fewer quality materials for taking the next step from beginner
        to intermediate. I hope to help with that!
      </p>
      <ul className={styles['article-summaries']}>{blogSummaries}</ul>
    </Layout>
  )
}
