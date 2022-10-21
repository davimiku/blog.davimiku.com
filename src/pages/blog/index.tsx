import Layout from 'layouts'
import { BlogListing } from 'components/blog'

type BlogMeta = {
  title: string
  category: Category
  slug: string
  tagline: string
  publishedOn?: string
  tags?: string[]
}

type Category = 'thoughts' | 'tutorials'

import * as thoughts from './thoughts'
import * as tutorials from './tutorials'

export const blogsMeta: BlogMeta[] = [thoughts, tutorials]
  .flatMap(mod => Object.values(mod))
  .map(blog => blog.meta)

export default function BlogIndex() {
  return (
    <Layout title='Blogs' description='Blog Posts'>
      <h1>Blog</h1>
      <ul>
        {blogsMeta.map(meta => (
          <BlogListing meta={meta} key={meta.slug} />
        ))}
      </ul>
    </Layout>
  )
}
