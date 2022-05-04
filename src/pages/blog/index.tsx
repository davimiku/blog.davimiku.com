import Layout from 'layouts'
import { blogsMeta } from 'data'
import { BlogListing } from 'components/blog'

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
