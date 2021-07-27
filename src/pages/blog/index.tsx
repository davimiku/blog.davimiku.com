import Layout from 'layouts'
import { blogs } from 'data'
import { BlogListing } from 'components/blog'

export default function BlogIndex() {
  return (
    <Layout title='Blogs' description='Blog Posts'>
      <h1>Blog</h1>
      <ul>
        {blogs.map((blog) => (
          <BlogListing blog={blog} key={blog.__resourcePath} />
        ))}
      </ul>
    </Layout>
  )
}
