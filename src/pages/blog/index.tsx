import Layout from 'layouts'
import { BlogListing } from 'components/blog'

export type BlogMeta = {
  title: string
  category: Category
  slug: string
  tagline: string
  publishedOn?: string
  tags?: string[]
}

type Category = 'parsers' | 'web-design'

import * as ResponsivenessWithoutBreakpoints from '../web-design/responsiveness-without-breakpoints.mdx'
import * as JsonParserRust1 from '../parsers/json-parser-rust-1.mdx'

const articles = [ResponsivenessWithoutBreakpoints, JsonParserRust1]
export const blogsMeta: BlogMeta[] = articles.map(blog => blog.meta)

export default function BlogIndex() {
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
      <ul>
        {blogsMeta.map(meta => (
          <BlogListing meta={meta} key={meta.slug} />
        ))}
      </ul>
    </Layout>
  )
}
