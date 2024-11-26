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
import * as TsIoDecodingEncoding1 from '../tutorials/ts-io-decoding-encoding-1.mdx'

const articles = [ResponsivenessWithoutBreakpoints, JsonParserRust1, TsIoDecodingEncoding1]
export const articlesMeta: PublishedArticleMeta[] = articles
  .map(blog => blog.meta)
  .filter(isPublished)
  .sort((a, b) => b.publishedOn.localeCompare(a.publishedOn))

function isPublished(meta: ArticleMeta): meta is PublishedArticleMeta {
  return !!meta.publishedOn
}

export default function ArticleIndex() {
  const blogSummaries = articlesMeta.map(meta => <ArticleListing meta={meta} key={meta.slug} />)
  return (
    <Layout title='Blogs' description='Blog Posts'>
      <h1>Articles</h1>
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
