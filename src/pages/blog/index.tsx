import Layout from 'layouts'
import { BlogListing } from 'components/blog'

export type PublishedBlogMeta = BlogMeta & {
  publishedOn: string
}

export type BlogMeta = {
  title: string
  category: Category
  slug: string
  tagline: string
  type: string
  tags: string[]
  publishedOn?: string
  updatedOn?: string
}

type Category = 'parsers' | 'web-design'

import * as ResponsivenessWithoutBreakpoints from '../articles/responsiveness-without-breakpoints.mdx'
import * as JsonParserRust1 from '../tutorials/json-parsing-rust-1.mdx'

const articles = [ResponsivenessWithoutBreakpoints, JsonParserRust1]
export const blogsMeta: PublishedBlogMeta[] = articles
  .map(blog => blog.meta)
  .filter(meta => meta.publishedOn)

export default function BlogIndex() {
  const blogSummaries = blogsMeta.map(meta => <BlogListing meta={meta} key={meta.slug} />)
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
      <ul>{blogSummaries}</ul>
    </Layout>
  )
}
